import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsPeopleFill } from 'react-icons/bs';
import { MdGroups, MdNightShelter } from 'react-icons/md';
import { DiCodepen } from 'react-icons/di';
import GithubContext from '../context/github/GithubContext';


function User() {
    const { user, getUser } = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
      getUser(params.login);
    }, [])

    return (
    <div className="h-5/6 w-5/6 m-auto">
      <div className="mb-4">
        <Link className="text-white text-md mb-4 ml-4" to='/'>BACK TO SEARCH</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
        <div className="avatar">
          <div className="w-5/6 rounded">
            <img src="https://api.lorem.space/image/face?hash=88560"/>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="font-bold text-2xl py-2">
            Brad Traversy
            <div className="badge badge-sm badge-accent badge-outline ml-3">User</div>
            <div className="badge badge-sm badge-primary badge-outline ml-3">Hireable</div>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia.</p>
          <button className="btn btn-sm btn-outline my-6">Visit Github Profile</button>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 ml-5">
            <div className="card bg-base-100 shadow-xl p-1">
              <h1>Location</h1>
              <h1 className="text-white font-bold">Massachusetts</h1>
            </div>
            <div className="card bg-base-100 shadow-xl p-1">
              <h1>Website</h1>
              <h1 className="text-white font-bold">traversymedia.com</h1>
            </div>
            <div className="card bg-base-100 shadow-xl p-1">
              <h1>Twitter</h1>
              <h1 className="text-white font-bold">traversymedia.com</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 my-12">
        <div className="flex justify-between bg-base-100 shadow-xl p-1">
          <div>
            <h1>Followers</h1>
            <h1 className="text-white font-bold text-4xl">46541</h1>
          </div>
          <MdGroups size={40} className="m-6 text-fuchsia-700"/>
        </div>
        <div className="flex justify-between bg-base-100 shadow-xl p-1">
          <div>
            <h1>Following</h1>
            <h1 className="text-white font-bold text-4xl">46541</h1>
          </div>
          <BsPeopleFill size={30} className="m-6 text-fuchsia-700"/>
        </div>
        <div className="flex justify-between bg-base-100 shadow-xl p-1">
          <div>
            <h1>Public Repos</h1>
            <h1 className="text-white font-bold text-4xl">46541</h1>
          </div>
          <DiCodepen size={45} className="m-5 text-fuchsia-700"/>
        </div>
        <div className="flex justify-between bg-base-100 shadow-xl p-1">
          <div>
            <h1>Public Gists</h1>
            <h1 className="text-white font-bold text-4xl">46541</h1>
          </div>
          <MdNightShelter size={40} className="m-6 text-fuchsia-700"/>
        </div>
      </div>

      <div className="grid-cols-1">
        <h1>Latest Repositories</h1>
      </div>
    </div>

    )
}

export default User
