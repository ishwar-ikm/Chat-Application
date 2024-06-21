import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages';

const MessageSkeleton = () => {
  return (
    <>
      <div className='flex gap-3 items-center'>
        <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
        <div className='flex flex-col gap-1'>
          <div className='skeleton h-4 w-40'></div>
          <div className='skeleton h-4 w-40'></div>
        </div>
      </div>
      <div className='flex gap-3 items-center justify-end'>
        <div className='flex flex-col gap-1'>
          <div className='skeleton h-4 w-40'></div>
        </div>
        <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
      </div>
    </>
  );
};

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    }, 500)
  }, [messages])

  return (
    <div className='px-4 flex-1 overflow-auto mt-2'>
      {loading &&
        [...Array(3)].map((_, index) => {
          return <MessageSkeleton  key={index}/>
        })
      }

      {!loading && messages.length === 0 &&
        <p className='text-center'>Send a message to start conversation</p>
      }
      {!loading && messages.map(message => {
          return <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        })
      }
    </div>
  )
}

export default Messages
