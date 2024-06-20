import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 flex flex-col p-4'>
      <SearchInput />
      <div className='divider px-3' />
      <Conversations />
      <LogoutBtn />
    </div>
  )
}

export default Sidebar
