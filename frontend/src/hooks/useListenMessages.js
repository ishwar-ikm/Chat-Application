import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from "../zustand/useConversation"

import notiSound from "../assets/sound/notification.mp3"

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      if (selectedConversation?._id === newMessage.senderId) {
        newMessage.shouldShake = true;
        const sound = new Audio(notiSound);
        sound.play();
        setMessages([...messages, newMessage]);
      }
    });

    return () => {
      socket.off("newMessage");
    }
  }, [socket, setMessages, messages])
}

export default useListenMessages
