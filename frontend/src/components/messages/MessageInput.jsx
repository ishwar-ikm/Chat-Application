import React from 'react'
import { BsSendFill } from "react-icons/bs";

const MessageInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='w-full relative'>
                <input type="text"
                    className='border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                />
                <button className='absolute flex items-center end-0 inset-y-0 pe-3'>
                    <BsSendFill />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
