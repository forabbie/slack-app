/* eslint-disable react/prop-types */
import {
  setSessionStorage,
  getSessionStorage,
} from "../services/storage.service";
import { auth } from "../constant/UserConst";
import { useEffect, useState } from "react";
import { retrieveChannel } from "../services/api.service";

const Sidebar = (props) => {
  const { setChannel, channels, handleToggleChannelModal } = props;
  const [channelIndex, setChannelIndex] = useState(() => {
    const store = getSessionStorage("CH-Index", false);
    return parseInt(store) || 0;
  });

  const fetchChannel = async (id) => {
    try {
      const response = await retrieveChannel(auth, id);
      if (response) {
        setChannel(response.data);
      }
    } catch (error) {
      console.log("e", error);
    }
  };
  useEffect(() => {
    fetchChannel(parseInt(getSessionStorage("CH-Index", false)));
  }, []);

  const onSwitchTab = (params) => {
    setChannelIndex(params.id);
    setSessionStorage("CH-Index", params.id, false);
    fetchChannel(params.id);
  };

  return (
    <>
      <section className="flex-none w-1/5 bg-primary-focus text-white text-justify">
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
          className="text-white px-4 mt-6 flex flex-col space-y-1"
        >
          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-400/[0.4]">
              <div className="flex items-center gap-2">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span className="text-sm font-medium"> Channels </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav aria-label="Channels Nav" className="mt-2 flex flex-col px-4">
              <ul className="menu">
                {Object.keys(channels).map((key) => (
                  <li key={channels[key].id}>
                    <a
                      className={[
                        channels[key].id === channelIndex
                          ? "text-white bg-gray-400/[0.4]"
                          : "",
                        "flex items-center gap-2 rounded-lg px-4 py-2 my-0.5 hover:bg-gray-400/[0.4] active:text-white",
                      ].join(" ")}
                      onClick={() => onSwitchTab(channels[key])}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                        />
                      </svg>
                      {channels[key].name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-400/[0.4] active:text-white"
                    onClick={() => handleToggleChannelModal()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 bg-white/25 rounded"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                    Add channels
                  </a>
                </li>
              </ul>
            </nav>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-400/[0.4]">
              <div className="flex items-center gap-2">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-sm font-medium"> Direct Messages </span>
              </div>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-400/[0.4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 bg-white/25 rounded"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Open a Direct Message{" "}
                </span>
              </a>
              <div className="directMessageList">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-400/[0.4]"
                >
                  <span className="text-sm font-medium">Ianna</span>
                </a>
              </div>
            </nav>
          </details>
        </nav>
      </section>
    </>
  );
};

export default Sidebar;