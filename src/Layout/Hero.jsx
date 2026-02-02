import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (


    <div>

    <div className=' text-white text-center  p-6 py-10 flex flex-col gap-2'>

        <h1 className='text-3xl font-extrabold md:text-5xl  lg:text-6xl'>Unlimited movies, <span className='block'>TV shows and more</span> </h1>
        <p className='text-lg lg:text-xl font-bold'>Starts at &#8377;149. Cancel at any time.</p>

        <p className='text-lg lg:text-xl' >Ready to watch? Enter your email to create or restart your membership.</p>

        <div className='flex flex-wrap items-center justify-center gap-3'>

        <input className='w-full lg:w-90 md:w-90  border border-dotted p-2 lg:p-3 lg:text-lg rounded  ' placeholder='Email address' type="text" />

       <Link to={'/page'}> <button className='bg-red-600 my-2  p-2 text-lg font-semibold lg:p-3 rounded hover:bg-red-500 transition duration-500 cursor-pointer '>Get Started <i class="fa-solid fa-chevron-right"></i></button></Link>

        </div>

    </div>

      
    </div>
  )
}

export default Hero
