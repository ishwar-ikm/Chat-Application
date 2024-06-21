import React, { useState } from 'react'
import { BsSendFill } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleInput = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return (
        <form className='px-4 my-3' onSubmit={handleInput}>
            <div className='w-full relative'>
                <input type="text"
                    className='border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button className='absolute flex items-center end-0 inset-y-0 pe-3'>
                    
                    {loading ? (<span className='loading loading-spinner'></span>) : <BsSendFill />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput
