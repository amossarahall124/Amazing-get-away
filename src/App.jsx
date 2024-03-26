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

          <motion.div className=''
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 3.0, ease: 'easeInOut' }}
            variants={{
              hidden: { opacity: 0, x: -80, scale: 0 },
              visible: { opacity: 1, x: 0, scale: "100%" },
            }}>
            <Slider />
          </motion.div>

          <motion.div className=''
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 3.0, ease: 'easeInOut' }}
            variants={{
              hidden: { opacity: 0, x: -80, scale: 0 },
              visible: { opacity: 1, x: 0, scale: "100%" },
            }}>
            <Prices />
          </motion.div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
