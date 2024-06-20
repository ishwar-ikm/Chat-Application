import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search..' className='input input-bordered rounded-full' />
            <button className="btn btn-primary btn-circle">
                <FaSearch className='w-4 h-4' />
            </button>
        </form>
    )
}

export default SearchInput
