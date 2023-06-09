const DirectMessageContainer = (props) => {
    const { toggleDirectMessage, submittedNames } = props
    return (
        <>
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
                    <ul className="directMessageList">
                        {submittedNames.map((name, index) => (
                            <li
                                key={index}
                            >
                                <a className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-400/[0.4]">{name}</a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-400/[0.4]" onClick={toggleDirectMessage}
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
                        <span className="text-sm font-medium text-start">Open a Direct Message</span>
                    </a>
                </nav>
            </details>
        </>
    )
}

export default DirectMessageContainer