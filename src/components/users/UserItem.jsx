// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function UserItem({user}) {
  return (
    <div className="card card-compact bg-base-100 shadow-sm" key={user.id}>
        <div className="card-body">
            <div className="avatar">
                <div className="w-16 rounded-full m-3">
                    <img src={user.avatar_url} alt="avatar" />
                </div>
                <div className="card-actions mt-4 ml-2">
                    <h5 className="font-bold text-lg">{user.login}</h5>
                    <Link className="text-base-content text-opacity-40" to={`/usera/${user.login}`} >
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserItem
