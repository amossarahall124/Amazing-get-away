import { useState } from 'react'
import Parallax2 from './components/Parallax2'
import Main from "./components/Main"
import Promotions from "./components/Promotions"
import Prices from "./components/Prices"
import Slider from './components/Slider'
import { motion } from 'framer-motion'
import Footer from "./components/Footer"
import './App.css'

function App() {


  return (
    <>
      <div >
        <div className='w-5/6 h-full ml-[150px]'>
          <Parallax2 />
        </div>
        <div className='w-4/6 h-full   ml-[250px]'>
          <Main />
          <Promotions />
          <Slider />
          <Prices />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
