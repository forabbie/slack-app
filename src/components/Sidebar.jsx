/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import ChannelContainer from "./sidebar parts/ChannelContainer";
import DirectMessageContainer from "./sidebar parts/DirectMessageContainer";

const Sidebar = (props) => {
  const { auth, setChannel, channels, handleToggleChannelModal, toggleDirectMessage, submittedNames } = props;
  const navigate = useNavigate();

  const onLogout = () => {
    // console.log("log me out");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <section className="flex-none w-1/5 bg-primary-focus text-white text-justify flex flex-col">
        <div className="flex justify-between px-4 py-2">
          <h1 className="text-2xl">Avion School</h1>
          <button className="btn btn-circle btn-sm bg-white hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
        <div className="border-b border-white/25"></div>
        <nav
          aria-label="Main Nav"
          className="text-white px-4 mr-2 my-1 flex flex-col space-y-1 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-200/[0.5]"
          style={{ maxHeight: "85%" }}
        >
          <ChannelContainer 
            channels={channels}
            auth={auth}
            setChannel={setChannel}
            handleToggleChannelModal={handleToggleChannelModal}
          />
          <DirectMessageContainer 
            toggleDirectMessage={toggleDirectMessage}
            submittedNames={submittedNames}
            />
        </nav>

        {/* <div className="flex-grow"></div> */}

        <div className="logout inset-x-0 bottom-0 border-t border-white/25">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-gray-400/[0.4]"
            onClick={onLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="text-sm font-medium"> Logout </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
