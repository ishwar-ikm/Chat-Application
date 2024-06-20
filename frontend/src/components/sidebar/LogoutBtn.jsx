import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogOut from '../../hooks/useLogOut';

const LogoutBtn = () => {

  const {loading, logout} = useLogOut();

  return (
    <div className='mt-auto'>
      {loading ? (
        <span className='loading loading-spinner'></span>
      ) :
      (
        <RiLogoutBoxLine className='w-6 h-6 cursor-pointer' onClick={logout}/>
      )}
    </div>
  )
}

export default LogoutBtn
