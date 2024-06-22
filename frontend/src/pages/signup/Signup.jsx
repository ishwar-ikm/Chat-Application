import React, { useState } from 'react'
import useSignUp from '../../hooks/useSignUp';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CheckBox = ({ handleCheckbox, gender }) => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text mr-2">Male</span>
                    <input type="checkbox" className="checkbox checkbox-success"
                        checked={gender === "male"}
                        onChange={() => handleCheckbox("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text mr-2">Female</span>
                    <input type="checkbox" className="checkbox checkbox-error"
                        checked={gender === "female"}
                        onChange={() => handleCheckbox("female")}
                    />
                </label>
            </div>
        </div>
    )
}

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const { loading, signup } = useSignUp();

    const handleCheckbox = (gender) => {
        setInputs({ ...inputs, gender: gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-gray-300 text-center'>
                    Sign Up <span className='text-blue-500 font-bold'>Chat Application</span>
                </h1>


                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'><span className='text-base label-text'>Full name</span></label>
                        <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={e => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'><span className='text-base label-text'>Username</span></label>
                        <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={e => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div className='relative'>
                        <label className='label p-2'><span className='text-base label-text'>Password</span></label>
                        <input type={showPassword ? "text" : "password"} placeholder='Enter password' className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={e => setInputs({ ...inputs, password: e.target.value })}
                        />
                        <div className='absolute end-2 top-2/3 cursor-pointer' onClick={e => setShowPassword(!showPassword)}>
                          {showPassword ? <FaEyeSlash /> : <FaEye/>}
                        </div>
                    </div>
                    <div>
                        <label className='label p-2'><span className='text-base label-text'>Confirm Password</span></label>
                        <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={e => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <CheckBox handleCheckbox={handleCheckbox} gender={inputs.gender} />

                    <a href="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Have an have an account?</a>

                    <div>
                        <button type='submit' className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? (
                                <span className='loading loading-spinner'></span>
                            ) :
                                (
                                    "Signup"
                                )}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
