import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Layout/Layout'
import About from './Pages/About'
import Herosec from './Components/Herosec'
import Cardsec from './Components/Cardsec'
import Trending from './Components/Trending'
import Reasons from './Components/Reasons'
import Asked from './Components/Asked'
import GetStarted from './Components/GetStarted'
import Footer from './Layout/Footer'
import Sign from './Components/Sign'
import Signpage from './Layout/Signpage'
import Details from './Components/Details'
import Add from './Layout/Add'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
     <div >
     <Routes>

  <Route path='/layout' element={<Layout/>}></Route>
  <Route path='/Card' element={<Cardsec/>}></Route>
  <Route path='/Trending' element={<Trending/>}></Route>
  <Route path='/' element={<Herosec/>}></Route>
  <Route path='/Reasons' element={<Reasons/>}></Route>
  <Route path='/Asked' element={<Asked/>}></Route>
  <Route path='/Get' element={<GetStarted/>}></Route>
  <Route path='/footer' element={<Footer/>}></Route>
  <Route path='/Sign' element={<Sign/>}></Route>
  <Route path='/page' element={<Signpage/>}></Route>
  <Route path='/detail/:id' element={<Details/>}></Route>
  <Route path='/add' element={<Add/>}></Route>
     
   
     </Routes>

     {/* <Herosec/> */}


     

     </div>
    
    </>
  )
}

export default App
