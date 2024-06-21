import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({user}) => {

    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = selectedConversation?._id === user._id;

    return (
        <>
            <div 
            className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500": ""}`}
            onClick={() => setSelectedConversation(user)}
            >
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={user.profilePic} />
                    </div>
                </div>

                <p className='font-bold text-gray-200'>{user.fullName}</p>
            </div>


            <div className='divider px-3 m-0' />
        </>
    )
}

export default Conversation
