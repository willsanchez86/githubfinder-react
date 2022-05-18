import UserResults from '../components/users/UserResults';

function Home() {
  return (
    <>
      {/* Search Component */}
      <div className="form-control">
        <div className="input-group">
          <input type="text" placeholder="Search" className="input input-bordered w-full max-w-lg" />
          <button className="btn btn-square px-12">
          GO
          </button>
        </div>
      </div>
      <UserResults />
    </>
  )
}

export default Home
