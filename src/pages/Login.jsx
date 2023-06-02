import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="hero min-h-screen flex flex-col justify-center items-center h-screen">
        <h1 className="font-bold text-2xl">Login</h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="flex flex-row justify-center text-sm gap-1">
                  <h6>Not yet registered?</h6>
                  <button><p><Link to="/signup">Click Here</Link></p></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
