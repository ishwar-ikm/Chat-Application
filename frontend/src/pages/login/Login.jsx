import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-gray-300 text-center'>
          Login <span className='text-blue-500 font-bold'>Chat Application</span>
        </h1>


        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'><span className='text-base label-text'>Username</span></label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className='relative'>
            <label className='label p-2'><span className='text-base label-text'>Password</span></label>
            <input type={showPassword ? "text" : "password"} placeholder='Enter password' className='w-full input input-bordered h-10'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className='absolute end-2 top-2/3 cursor-pointer' onClick={e => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye/>}
            </div>
            
          </div>

          <a href="/signup" className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block'>Don't have an account?</a>

          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) :
                (
                  "Login"
                )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
