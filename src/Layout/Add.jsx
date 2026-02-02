import React, { useState } from 'react'
import Sign from '../Components/Sign'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Trending from '../Components/Trending'

function Add() {

    const [addmovie, setAddmovie] =useState()
    const [movie, setMovie] = useState()

    const onadd=(e)=>{

        e.preventDefault()
        setMovie(addmovie)
    }

   
  return (

    <div>
     <div className='relative'>

<div className=' bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs)]  h-screen  '>

<div className='bg-black opacity-60 h-screen'/>

    <div className='absolute top-10 left-10'>
     <Link to={'/hero'}> <h1 className='text-3xl lg:text-5xl md:text-4xl text-red-700 font-bold'>NETFLIX</h1></Link>
      </div> 

                <form onSubmit={onadd}  className='z-50 text-white bg-gray-700 p-2 text-xl absolute top-50 mx-2 md:right-2/9 lg:right-2/5  flex  flex-col items-center gap-3 rounded'>

                 <h1 >Search Movies <input value={addmovie} onChange={(e)=>setAddmovie(e.target.value)}  className='border-1 p-2 sm:w-full border-dotted rounded ' type="text" placeholder='Enter the Movie name' /></h1>
                 <button type='submit' className='bg-red-600 p-2 rounded-lg w-fit cursor-pointer hover:bg-red-500 transition duration-700'>Submit</button>
                </form>

    
  
</div>


<div className='bg-gradient-to-b from-blue-950 to-gray-950'>

<div className=''>
        <Trending movie={movie}/>
    </div>

<div className=' pt-20 lg:pt-0'>
        <Footer/>            
    </div>

    </div>



</div>  
    </div>

  )
}

export default Add
