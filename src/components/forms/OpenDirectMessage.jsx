import { useState, useEffect } from 'react'

const OpenDirectMessage = (props) => {
    const {isDirectMessageVisible, handleSubmitName, onHideForm, fetchUsers, userList } = props

    const [name, setName] = useState('');
    const [showUserList, setShowUserList] = useState(false);

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    const handleSearchClick = () => {
        setShowUserList(true);
    };

    const handleNameSelection = (selectedName) => {
        setName(selectedName);
        setShowUserList(false);
    };

    const handleSubmitNameForm = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {
            setName('');
            onHideForm();
            handleSubmitName(name);
        }
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
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
                        className="placeholder:text-slate-400 font-sans block bg-white w-full focus:outline-none sm:text-sm" 
                        placeholder="@somebody or somebody@example.com" 
                        type="text" 
                        name="search"
                        value={name}
                        onChange={handleNameChange}
                        onClick={handleSearchClick}
                        />
                </div>
            </label>
            
            {showUserList && (
                <div>
                    <h3>List of Existing Users:</h3>
                    <ul>
                        {userList.map((user) => (
                            <li 
                                key={user.id}
                                onClick={() => handleNameSelection(user.email)}
                            >
                                {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    )
}

export default OpenDirectMessage