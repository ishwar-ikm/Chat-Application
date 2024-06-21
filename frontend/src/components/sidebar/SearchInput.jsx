import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation.js';
import useGetConversations from '../../hooks/useGetConversations.js';
import toast from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();

    const handleInput = (e) => {
        e.preventDefault();

        if(!search) return;

        const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if(conversation){
            setSelectedConversation(conversation);
            setSearch("");
        }
        else{
            toast.error("Could not find user");
        }
    }

    return (
        <form onSubmit={handleInput} className='flex items-center gap-2'>
            <input type="text" placeholder='Search..' className='input input-bordered rounded-full' value={search} 
                onChange={e => setSearch(e.target.value)}
            />
            <button className="btn btn-primary btn-circle">
                <FaSearch className='w-4 h-4' />
            </button>
        </form>
    )
}

export default SearchInput
