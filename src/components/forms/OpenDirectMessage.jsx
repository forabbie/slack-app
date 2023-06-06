import { useState, useEffect, useRef } from 'react'

const OpenDirectMessage = (props) => {
    const {isDirectMessageVisible, handleSubmitName, onHideForm, fetchUsers, userList } = props

    const [name, setName] = useState('');
    const [showUserList, setShowUserList] = useState(false);
    const [filteredUsersList, setFilteredUserList] = useState(userList);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(
                inputRef.current &&
                !inputRef.current.contains(event.target) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowUserList(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleNameChange = (e) => {
        const newName = e.target.value.toLowerCase();
        setName(newName);

        const filteredUsers = userList.filter((user) => {
            const userEmail = user.email.toLowerCase();
            return userEmail.startsWith(newName);
        });
        setFilteredUserList(filteredUsers);
        setShowUserList(newName.length > 0);
    };

    const handleNameSelection = (selectedName) => {
        setName(selectedName);
        setShowUserList(false);
    };

    const handleSubmitNameForm = (e) => {
        e.preventDefault();
        const userExists = userList.some((user) => user.email === name);
        if(!userExists) {
            return
        }

        setName('');
        onHideForm();
        handleSubmitName(name);
        setShowUserList(false)
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setShowUserList(false);
        }, 200);
    }

    return(
        <form onSubmit={handleSubmitNameForm}>
            <label className={`relative block border-b border-slate-300 shadow-sm 
                ${isDirectMessageVisible ? '' : 'hidden'}`}>
                <div className='pl-9 pr-3 py-2 '>
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <p className='text-slate-400 font-sans sm:text-sm'>To:</p>
                    </span>
                    <input 
                        ref={inputRef}
                        className="placeholder:text-slate-400 font-sans block bg-white w-full focus:outline-none sm:text-sm" 
                        placeholder="@somebody or somebody@example.com" 
                        type="text" 
                        name="search"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={handleInputBlur}
                        />
                    {showUserList && (
                    <div ref={dropdownRef} className="absolute mt-1 w-full pr-14">
                        <div className="max-h-48 overflow-y-auto bg-white text-black rounded-md shadow-2xl">
                            <ul className='my-4'>
                                {filteredUsersList.map((user) => (
                                    <li 
                                        key={user.id}
                                        className="cursor-pointer px-4 py-2 hover:bg-blue-500 text-start"
                                        onClick={() => handleNameSelection(user.email)}
                                    >
                                        {user.email}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    )}
                </div>
            </label>
        </form>
    )
}

export default OpenDirectMessage;
