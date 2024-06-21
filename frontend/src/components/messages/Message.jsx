import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';

const extractTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`
}

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";


    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={message.senderId == authUser._id ? `${authUser.profilePic}` : `${selectedConversation.profilePic}`} />
                </div>
            </div>
            <div className={`${message.shouldShake ? "shake" : ""} pb-2 chat-bubble chat-bubble-${message.senderId == authUser._id ? "primary" : ""}`}>{message.message}</div>
            <div className="chat-footer opacity-60">
                {extractTime(message.createdAt)}
            </div>
        </div>
    )
}

export default Message
