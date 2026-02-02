import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <div>

      <div className='  text-gray-400 p-6 px-20 font-semibold flex flex-col gap-12'>

      <h1>Questions? Call <span className='underline cursor-pointer'>000-123-456-7890</span></h1>

      <div className='flex gap-10 flex-wrap items-center underline foot'>

      <ul>
        <li>FAQ</li>
        <li>Invester Relations</li>
        <li>Privacy</li>
        <Link to={'/add'}><li>Speed Test</li></Link>
      </ul>

      <ul>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Preference</li>
        <li>Legal Notices</li>
      </ul>

      <ul>
        <li>Account</li>
        <li>Ways to Watch</li>
        <li>Corporate Information</li>
        <li>Only on Netflix</li>
      </ul>

      <ul>
        <li>Media Centre</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
      </ul>

      </div>

      <div  className='border border-dotted p-0.5 text-white px-2 rounded w-fit bg-gray-800 '>
        <label htmlFor=""><i class="fa-solid fa-language"></i></label>
        <select className='focus:outline-none cursor-pointer'  name="" id="">
            <option className='text-black' value="">English</option>
            <option className='text-black' value="">Hindi</option>
        </select>
      </div>

      <h1>Netflix India</h1>


      </div>  
    

    </div>

  )
}

export default Footer
