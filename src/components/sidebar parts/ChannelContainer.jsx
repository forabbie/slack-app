/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  setSessionStorage,
  getSessionStorage,
} from "../../services/storage.service";
// import { retrieveChannel } from "../../services/api.service";

const ChannelContainer = (props) => {
  const { channels, modalOpen, fetchChannel } = props;
  const [channelIndex, setChannelIndex] = useState(() => {
    const store = getSessionStorage("CH-Index", false);
    return parseInt(store) || 0;
  });

  const onSwitchTab = (params) => {
    setChannelIndex(params.id);
    setSessionStorage("CH-Index", params.id, false);
    fetchChannel(params.id);
  };

  return (
    <>
      <details
        className="mt-4 group [&_summary::-webkit-details-marker]:hidden"
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
            {channels &&
              Object.keys(channels).map((key) => (
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
                onClick={() => modalOpen()}
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
    </>
  );
};

export default ChannelContainer;
