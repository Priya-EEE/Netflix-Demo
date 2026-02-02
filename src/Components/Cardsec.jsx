import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';

function Cardsec({ movies ,onClick}) {
  // Create a reference for the movie container
  const scrollContainerRef = useRef(null);
 
  const [shows, setShows] = useState(false)
  const [id , setId] = useState()

  
  // Function to scroll the container to the left
 const handleLeftClick=()=>{

    // console.log("scrollContainerRef",scrollContainerRef);
    scrollContainerRef.current.scrollBy({
      left:-300,
      behavior:'smooth'
    })
 }

  // Function to scroll the container to the right
  const handleRightClick = () => {
    console.log("scrollContainerRef",scrollContainerRef);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Scroll 300px to the right
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative'>
      {/* Left scroll button */}
      <button
        className='absolute -left-5 top-1/2 transform -translate-y-1/2 z-50 '
        onClick={handleLeftClick}
      >
        <i className='fa-solid fa-chevron-left text-white'></i>
      </button>

      {/* Movie list container */}
      <div
        ref={scrollContainerRef}
        className='flex overflow-x-scroll card'
      >
        {movies?.map((items, index) => (
            <div>
          <div key={index} className='w-50 relative m-10 cursor-pointer hover:scale-105 transition duration-700'>
            <button onClick={()=>{setShows(!shows),setId(items.imdbID)}} to={`/detail/${items.imdbID}`}><img 
              className='rounded-lg cursor-pointer'
              src={items?.Poster || 'https://m.media-amazon.com/images/I/91aoBs3V74L._AC_UF1000,1000_QL80_.jpg'}
              alt={`movie-${index}`}
            /></button>
            <h1 className='text-2xl font-bold bg-amber-800 text-white rounded-full w-fit px-2 absolute bottom-0 right-0'>
              {index + 1}
            </h1>
          </div>
          </div>
        ))}
      </div>

      {/* Right scroll button */}
      <button
        className='absolute -right-5 top-1/2 transform -translate-y-1/2'
        onClick={handleRightClick}
      >
        <i className='fa-solid fa-chevron-right text-white'></i>
      </button>

      <div className={`fixed flex items-center justify-center inset-0 z-50 ${!shows?'hidden':''}`} >
          <Details pass={shows} setpass={setShows} id={id}/>
        </div>

        {/* <div className={`fixed  top-1/2 z-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${!shows?'hidden':''}`} >
          <Details pass={shows} setpass={setShows} id={id}/>
        </div> */}

        

    </div>
  );
}

export default Cardsec;
