import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { MdNightShelter } from 'react-icons/md';
import { DiCodepen } from 'react-icons/di';
import Spinner from '../components/shared/Spinner';
import GithubContext from '../context/github/GithubContext';
import ReposList from '../components/repos/ReposList';


function User() {
    const { user, loading, repos, getUser, getUserRepos } = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
      getUser(params.login);
      getUserRepos(params.login);
    }, [])

    if(loading) {
      return <Spinner />
    } else {
      return (
        <div className="w-full mx-auto lg:w-5/6">
          <div className="mb-4">
            <Link className="text-white text-md mb-4 ml-4" to='/'>BACK TO SEARCH</Link>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
            <div className="avatar">
              <div className="w-5/6 rounded">
                <img src={user.avatar_url} alt="profile"/>
              </div>
            </div>
            <div className="col-span-2">
              <h1 className="font-bold text-2xl py-2">
                {user.name}
                <div className="badge badge-sm badge-accent badge-outline ml-3">User</div>
                {user.hireable && (
                  <div className="badge badge-sm badge-primary badge-outline ml-3">Hireable</div>
                )}
              </h1>
              <p>{user.bio}.</p>
              <button className="btn btn-sm btn-outline my-6">
              <a href={user.html_url}>Visit Github Profile</a>
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 ml-5">
                <div className="card bg-base-100 shadow-xl p-1">
                  <h1>Location</h1>
                  <h1 className="text-white font-bold">{user.location}</h1>
                </div>
                <div className="card bg-base-100 shadow-xl p-1">
                  <h1>Website</h1>
                  <h1 className="text-white font-bold">{user.blog}</h1>
                </div>
                <div className="card bg-base-100 shadow-xl p-1">
                  <h1>Twitter</h1>
                  <h1 className="text-white font-bold">@{user.twitter_username}</h1>
                </div>
              </div>
            </div>
          </div>
    
          <div className="grid grid-cols-2 lg:grid-cols-4 my-12">
            <div className="flex justify-between bg-base-100 shadow-xl p-1">
              <div>
                <h1>Followers</h1>
                <h1 className="text-white font-bold text-4xl">{user.followers}</h1>
              </div>
              <FaUsers size={35} className="mt-5 mx-2 text-fuchsia-700"/>
            </div>
            <div className="flex justify-between bg-base-100 shadow-xl p-1">
              <div>
                <h1>Following</h1>
                <h1 className="text-white font-bold text-4xl">{user.following}</h1>
              </div>
              <BsPeopleFill size={30} className="m-6 text-fuchsia-700"/>
            </div>
            <div className="flex justify-between bg-base-100 shadow-xl p-1">
              <div>
                <h1>Public Repos</h1>
                <h1 className="text-white font-bold text-4xl">{user.public_repos}</h1>
              </div>
              <DiCodepen size={45} className="m-5 text-fuchsia-700"/>
            </div>
            <div className="flex justify-between bg-base-100 shadow-xl p-1">
              <div>
                <h1>Public Gists</h1>
                <h1 className="text-white font-bold text-4xl">{user.public_gists}</h1>
              </div>
              <MdNightShelter size={40} className="m-6 text-fuchsia-700"/>
            </div>
          </div>

          <ReposList />       
        </div>
        )
    }
    
}

export default User
