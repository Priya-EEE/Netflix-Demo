import React, { useEffect, useState } from 'react'
import Cardsec from './Cardsec'
import axios from 'axios';

function Trending({movie}) {

    const [film, setFilm]=useState([])

    console.log(movie);
    
    
    const live=async(e)=>{


        try {

            const res = await axios.get(`https://www.omdbapi.com/?s=${movie?movie:'batman'}&apikey=86fe3cf3`)

            setFilm(res.data.Search)
            console.log(res.data.Search);
            

            
            
        } catch (error) {
            
            console.log("Error", error);
            
        }

    }

    useEffect(()=>{live()},[movie])

 

    
    

  return (

    <div className=' px-10 md:px-15 lg:px-25 py-15 '  >

      <h1 className='text-3xl  text-white font-semibold'>Trending Now</h1>

        <Cardsec movies={film}  />

        

    </div>

    

  )
}

export default Trending
