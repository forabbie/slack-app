const Header = () => {
  return (
    <>
      <header className="w-full drop-shadow-[0_1px_0px_rgba(225,225,225,0.25)]">
        <div className=" flex flex-row justify-center content-center bg-fuchsia-950 shadow">
          <div className="w-1/5"></div>
          <div className="flex-1 my-auto">
            <button className="btn btn-xs btn-block bg-slate-50/50 border-0 hover:bg-slate-50/50 no-animation text-white font-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="ms-2 capitalize">Search avion School</span>
            </button>
          </div>
          <div className="w-1/5 flex justify-end">
            <div className="dropdown dropdown-end dropdown-hover">
              <label
                tabIndex={0}
                className="btn btn-circle btn-ghost text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </label>
              <div
                tabIndex={0}
                className="card compact dropdown-content mt-1 shadow  bg-slate-900 rounded-box text-white"
              >
                <div className="card-body">
                  <h4 className="text-sm">Help?</h4>
                  <p className="w-20">
                    <small className="text-slate-400">Press</small> F1
                  </p>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-square">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content mask mask-squircle w-8">
                    <span>MX</span>
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
