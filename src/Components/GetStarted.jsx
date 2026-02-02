import React from 'react'
import { Link } from 'react-router-dom'

function GetStarted() {
  return (
    <div >

<div className=' text-white text-center  p-6 py-10 flex flex-col gap-2'>


<p className='text-lg lg:text-xl' >Ready to watch? Enter your email to create or restart your membership.</p>

<div className='flex flex-wrap items-center justify-center gap-3'>

<input className='w-full lg:w-90 md:w-90 md:text-xl md:p-3 rounded border border-dotted p-2 ' placeholder='Email address' type="text" />
<Link to={'/page'}><button className='bg-red-600 my-2  p-2 md:p-3 text-lg md:text-xl font-semibold rounded hover:bg-red-500 transition duration-500 cursor-pointer '>Get Started <i class="fa-solid fa-chevron-right"></i></button></Link>

</div>

</div>

    </div>
  )
}

export default GetStarted
