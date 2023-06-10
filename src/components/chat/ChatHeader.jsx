/* eslint-disable react/prop-types */
const ChatHeader = (props) => {
  const { channel, modalOpen } = props;
  const members = channel?.channel_members;
  const count = (channel?.channel_members?.length || 0) - 3;
  return (
    <div className="w-full flex justify-between border-b py-2 px-5">
      <h1 className="text-2xl text-start">{channel?.name}</h1>
      <div className="flex justify-between gap-3">
        <button className="flex -space-x-1 overflow-hidden">
          {/* <div className="avatar static placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8 ring-2 ring-white">
              <span className="text-sm">K</span>
            </div>
          </div>
          <div className="avatar static placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8 ring-2 ring-white">
              <span className="text-sm">K</span>
            </div>
          </div> */}
          {members?.length > 0 &&
            members
              .map((member) => (
                <div key={member.id} className="avatar static placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-8 ring-2 ring-white">
                    <span className="text-sm">K</span>
                  </div>
                </div>
              ))
              .splice(0, 3)}
          {count >= 1 && (
            <div className="avatar static placeholder">
              <div className="text-neutral-content rounded-full w-8 ring-2 ring-white bg-slate-950">
                <span className="text-sm">+{count}</span>
              </div>
            </div>
          )}
        </button>
        <button onClick={modalOpen} className="btn btn-square btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
