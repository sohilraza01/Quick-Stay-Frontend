import React from 'react'
import Navbar from './components/Nabar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRooms from './Pages/AllRooms';
import RoomDetails from './Pages/RoomDetails';

const App = () => {
  const isOwner = useLocation().pathname.includes("owner");
  return (
    <div>
     {!isOwner && <Navbar />}
     <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<AllRooms/>} />
        <Route path='/rooms/:id' element={<RoomDetails/>} />
      </Routes>
     </div>
     <Footer />
    </div>
  )
}

export default App
