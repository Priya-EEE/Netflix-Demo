import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Hero from './Hero'

function Layout() {
  return (
    <div className=' flex flex-col lg:gap-25 md:gap-5'>

        <div>
      <Navbar/>
      </div>

    <div>
      <Hero/>
      </div>

    </div>
  )
}

export default Layout
