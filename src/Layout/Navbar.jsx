import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <div >





       
        

    <div className='flex flex-row flex-wrap justify-between px-10 py-5 items-center'>

       <div>
      <h1 className='text-3xl lg:text-5xl md:text-4xl text-red-700 font-bold'>NETFLIX</h1>
      </div> 

        <div className='flex gap-2'>

      <div  className='border border-dotted p-0.5 text-white px-2 rounded '>
        <label htmlFor=""><i class="fa-solid fa-language"></i></label>
        <select className='focus:outline-none cursor-pointer'  name="" id="">
            <option className='text-black' value="">English</option>
            <option className='text-black' value="">Hindi</option>
        </select>
      </div>

     <Link to={'/page'} ><div><button className='px-2 py-1 mx-1 bg-red-600 text-white font-semibold rounded cursor-pointer transition duration-500 hover:bg-red-500'>Sign In</button></div></Link>


      </div>

      </div>

    





    </div>
  )
}

export default Navbar
