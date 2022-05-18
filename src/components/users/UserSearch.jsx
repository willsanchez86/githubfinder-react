import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

function UserSearch() {
    const [text, setText] = useState('');

    const { users, fetchUsers, clearUsers } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text === '') {
            setAlert('Please enter something!', 'error');
        } else {
            fetchUsers(text);
            setText('');
        }
    }

    const handleClick = () => clearUsers();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="input-group">
                    <input type="text" placeholder="Search" className="input input-bordered bg-gray-200 w-full max-w-lg text-black" value={text} onChange={handleChange}/>
                    <button type="submit" className="btn btn-square btn-button px-12">
                    GO
                    </button>
                    </div>
                </div>
            </form>
            {/* Only show if users are being shown */}
            {users.length > 0 && (
                <div>
                    <button onClick={handleClick} className="btn btn-ghost">Clear</button>
                </div>
            )}
        </div>
    )
}

export default UserSearch
