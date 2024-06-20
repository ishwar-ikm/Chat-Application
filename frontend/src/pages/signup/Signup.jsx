import React from 'react'

const CheckBox = () => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text mr-2">Male</span>
                    <input type="checkbox" className="checkbox checkbox-success" />
                </label>
            </div>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text mr-2">Female</span>
                    <input type="checkbox" className="checkbox checkbox-error" />
                </label>
            </div>
        </div>
    )
}

const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-gray-300 text-center'>
                    Sign Up <span className='text-blue-500 font-bold'>Chat Application</span>
                </h1>


                <form >
                    <div>
                        <label className='label p-2'><span className='text-base label-text'>Full name</span></label>
                        <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'><span className='text-base label-text'>Username</span></label>
                        <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'><span className='text-base label-text'>Password</span></label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'><span className='text-base label-text'>Confirm Password</span></label>
                        <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' />
                    </div>

                    <CheckBox />

                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Have an have an account?</a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
