const OpenDirectMessage = (props) => {
    const {isDirectMessageVisible} = props

    return(
        <form>
            <label className={`relative block border-b border-slate-300 shadow-sm ${isDirectMessageVisible ? '' : 'hidden'}`}>
                <div className='pl-9 pr-3 py-2 '>
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <p className='text-slate-400 font-sans sm:text-sm'>To:</p>
                    </span>
                    <input className="placeholder:text-slate-400 font-sans block bg-white w-full focus:outline-none sm:text-sm" placeholder="@somebody or somebody@example.com" type="text" name="search" />
                </div>
            </label>
        </form>
    )
}

export default OpenDirectMessage