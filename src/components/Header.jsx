const Header = () => {
  return (
    <>
      <header className="flex flex-row bg-primary-focus shadow">
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
        <div className="w-1/5 text-end">
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
      </header>
    </>
  );
};

export default Header;
