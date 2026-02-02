import React, { useEffect, useState, useRef } from 'react'
import Layout from '../Layout/Layout'
import Trending from './Trending'
import Reasons from './Reasons'
import Asked from './Asked'
import GetStarted from './GetStarted'
import Footer from '../Layout/Footer'
import Details from './Details'
import { Link } from 'react-router-dom'



function Herosec() {

  const reasonRef = useRef(null)
  const askedRef = useRef(null)
  const [showin, setShowin] = useState(false)

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((entry) => entry.isIntersecting)
        setShowin(anyVisible)
      },
      {
        threshold: 0.2
      }
    )
    if (reasonRef.current) observer.observe(reasonRef.current)
    if (askedRef.current) observer.observe(askedRef.current) 

      return () => observer.disconnect()
  },[])

  return (

    <div className='bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs)] h-screen relative' >

        <div className='bg-gradient-to-b from-gray-950  to-black opacity-80 h-screen'>

        </div>


        <div className=' bg-gradient-to-b from-black via-blue-950  to-gray-950'>

        <div className='absolute top-0 w-full'>
            <Layout/>
        </div>
        <div className=''>
          <Trending/>
        </div>

        <div ref={reasonRef}>
          <Reasons/>
        </div>

        <div ref={askedRef}>
          <Asked/>
        </div>

        <div>
          <GetStarted/>
        </div>

        <div>
          <Footer/>
        </div>
       
        </div>
        {showin && (
        <div>
          <Link to={'/page'}> <button className='bg-red-600 text-white p-2 w-full md:hidden fixed bottom-0 '> Get started</button></Link>
        </div>
)}
    </div>
  )
}

export default Herosec
