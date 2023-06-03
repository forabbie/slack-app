import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setSessionStorage } from "../services/storage.service";
import { signIn } from "../services/api.service";
// import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn({
        email,
        password,
      });
      if (response) {
        console.log(response.headers);
        const authData = {
          data: {
            userId: response.data.id,
          },
          headers: {
            "access-token": response.headers["access-token"],
            client: response.headers.client,
            expiry: response.headers.expiry,
            uid: response.headers.uid,
          },
        };
        setSessionStorage("loggedInUserAuth", authData);
        navigate("/home");
      }
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <>
      <div className="hero min-h-screen flex flex-col justify-center items-center h-screen">
        <h1 className="font-bold text-2xl">Login</h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="flex flex-row justify-center text-sm gap-1  mt-2">
                  <h6>Not yet registered?</h6>
                  <button>
                    <p className="link">
                      <Link to="/signup">Click Here</Link>
                    </p>
                  </button>
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
