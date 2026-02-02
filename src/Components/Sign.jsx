import React from 'react'
import Navbar from '../Layout/Navbar'
import { Link } from 'react-router-dom'

function Sign() {
  return (

    <div className=' my-5 justify-center '>

<div className='mx-20'>
      <Link to={'/hero'}><h1 className='text-3xl lg:text-5xl md:text-4xl text-red-700 font-bold'>NETFLIX</h1></Link>
      </div> 

      <div className=' text-white  bg-gray-900 rounded-lg px-12 py-5 pb-10 w-full lg:w-fit md:w-100 flex flex-col gap-3  mx-auto  '>
        <h1 className='text-3xl font-bold '>Sign In</h1>

        <div className='flex flex-col gap-3 items-center font-semibold'>

        <input placeholder='Email or mobile number' className='border-1 p-3 rounded border-gray-400 w-full lg:w-75 ' type="text" />
        <input placeholder='Password' className='border-1 p-3 rounded border-gray-400 w-full lg:w-75'  type="password" />
        <button className='bg-red-600 w-full p-2 rounded hover:bg-red-600/80  transition duration-500 cursor-pointer'>Sign In</button>
        <h1>OR</h1>
        <button className='bg-gray-500/90  w-full p-2 rounded hover:bg-gray-500/70 transition duration-500 cursor-pointer'>Use a sign-in code</button>
        <h1 className='underline cursor-pointer hover:text-gray-400'>Forgot password</h1>

        </div>

        <div className='font-semibold flex flex-col gap-3'>

        <label className='space-x-2 flex items-center' htmlFor=""><input className='size-4'  type="checkbox" /><span> Remember me</span></label>

        <h1><span className='font-normal text-gray-400'>New to Netflix?</span>Sign up now.</h1>
        
        <p className='font-normal text-sm text-gray-400'>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot</p>

        <p className='font-normal text-blue-600 underline cursor-pointer'>Learn more</p>

        </div>

      </div>

    </div>

  )
}

export default Sign
