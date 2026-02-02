import React from 'react'

function Reasons() {

  const card = [
    {
      head: 'Enjoy on your TV',
      para: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      image: 'src/assets/images/svgviewer-png-output.png'
    },
    {
      head: 'Download your shows to watch offline',
      para: 'Save your favourites easily and always have something to watch.',
      image: 'src/assets/images/DownArrow.png',
    },
    {
      head: 'Watch everywhere',
      para: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
      image: 'src/assets/images/svgviewer-png-output (1).png'
    },
    {
      head: 'Create profiles for kids',
      para: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
      image: 'src/assets/images/svgviewer-png-output (2).png'
    }
  ]

  return (

    <div className='  '>
      <h1 className='text-white text-3xl font-semibold px-15 p-5 '>More reasons to join </h1>

       

       <div className='flex flex-wrap justify-center gap-2 '>

       {card.map(items=>(
          
          <div className='w-75 border-1 bg-gradient-to-b from-blue-600 to-violet-700 text-white py-5 px-3  flex  flex-col gap-5 rounded-2xl relative h-90 '>
          <h1 className='text-3xl font-bold '>{items.head}</h1> 
          <p className='opacity-80 text-md font-semibold '>{items.para}</p>
          <img className='size-30 absolute bottom-0 right-0' src={items.image} alt="" />
        </div>

        ))}


      </div>


      
    </div>



  )
}

export default Reasons