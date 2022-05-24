import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { fetchUsers } from '../../context/github/GithubActions';

function UserSearch() {
    const [text, setText] = useState('');

    const { users, dispatch } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(text === '') {
            setAlert('Please enter something!', 'error');
        } else {
            dispatch({type: 'SET_LOADING'});
            const users = await fetchUsers(text);
            dispatch({type: 'GET_USERS', payload: users});

            setText('');
        }
    }

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
                    <button onClick={() => dispatch({type: 'CLEAR_USERS'})} className="btn btn-ghost">Clear</button>
                </div>
            )}
        </div>
    )
}

export default UserSearch
