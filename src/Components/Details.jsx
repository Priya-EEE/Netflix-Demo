import React, { useEffect, useState } from 'react'
import Cardsec from './Cardsec'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Signpage from '../Layout/Signpage'

function Details({pass, setpass, id}) {

  const [filmdata, setFilmdata] = useState('')
  
  const live=async()=>{
    try {
      
      const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=86fe3cf3`)
  
      const data = res.data
      setFilmdata(data)
    
    } catch (error) {
      console.log("Error",error);
      
    }
  }

  useEffect(()=>{live()},[id])

  return (

        <div>


    <div className={`bg-gradient-to-r from-[#00e6b8]  flex flex-col  flex-wrap to-gray-950 w-full  text-white mx-auto  rounded-xl relative  ${!pass?'hidden':''}`}>
    
        <div className='rounded-xl  w-full'>
            <img className='rounded-xl w-70 h-60' src={filmdata.Poster} alt="" />
            <div className='bg-gradient-to-b from-green-950 to-black  absolute w-full h-full top-0 opacity-20'/>
   
        </div>

        <div className=' text-lg break-words max-w-lg md:p-3'>
                <h1 className='  font-bold text-white text-3xl pl-1 rounded w-fit break-words max-w-xs'>{filmdata.Title}</h1>

                <p className='break-words max-w-xs' >Year: {filmdata.Year}</p>
                <p className='break-words max-w-xs'>Released: {filmdata.Released}</p>
                <p className='break-words max-w-xs'>Rated: {filmdata.Rated}</p>
                <p className='break-words max-w-xs'>Genre: {filmdata.Genre}</p>
                <p className='break-words max-w-xs'>Runtime: {filmdata.Runtime}</p>
                {/* <p>Director: {filmdata.Director}</p>
                <p>BoxOffice: {filmdata.BoxOffice}</p> */}


       <Link to={'/page'}> <button className='bg-red-600 my-2 cursor-pointer p-2 text-lg font-semibold lg:p-3 rounded hover:bg-red-500 '>Get Started <i className="fa-solid fa-chevron-right"></i></button></Link>

                    </div>

            <i onClick={()=>{setpass(!pass)}} className="fa-solid fa-xmark text-2xl  hover:bg-gray-400 cursor-pointer hover:ring-1 rounded-full px-1  absolute top-2 right-2"></i>
    </div>

     
    </div>

  )
}

export default Details
