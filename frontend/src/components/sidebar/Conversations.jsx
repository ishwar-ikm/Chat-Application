import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {

  const {loading, conversations } = useGetConversations();

  return (
    <div className='py-1 flex flex-col overflow-auto'>
        {loading ? <span className='loading loading-spinner mx-auto'></span> : 
          conversations.map(user => {
            return <Conversation key={user._id} user={user}/>
          })
        }
    </div>
  )
}

export default Conversations
