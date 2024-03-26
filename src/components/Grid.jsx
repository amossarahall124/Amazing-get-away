import React, { useState } from 'react';
import { houses } from '/src/data/house';
import { motion } from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai';



const Grid = (props) => {
  const [house, setHouse] = useState(houses);
  const [details, setDetails] = useState(false)
  const [pic, setpic] = useState()

  return (

    <motion.div className='w-full bg-black-100 m-auto px-4 py-12'
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 3.0, ease: 'easeInOut' }}
      variants={{
        hidden: { opacity: 0, x: -100, scale: 0 },
        visible: { opacity: 1, x: 0, scale: "100%" },
      }}>
      <h1 className='text-white-100 font-bold text-4xl text-center'>
        Top Rated Bookings
      </h1>

      <div className={details ? "grid grid-cols-1 pt-4 grid-rows-1 justify-center items-center" : 'grid grid-cols-2 grid-row-1 lg:grid-cols-2 gap-6 pt-4'}>
        {house.map((item, index) => {


          return (


            <div key={index} onClick={() => setDetails(!details)} className={details ? " w-[1000px] h-[700px] mb-12 ml-[80px]  Hover:scale-125 hover:mb-40 hover:mr-40  shadow-lg shadow-stone-800 border-[4px] border-main-500  bg-black-100 rounded-lg cursor-pointer " : ' shadow-lg border-[2px] border-main-500  bg-black-100 rounded-lg cursor-pointer hover:scale-105  duration-300 relative '}>

              {details ? <div className='bg-black/20 fixed w-full h-screen z-10 top-0 left-0 right-0 bottom-0'></div> : ''}
              <motion.div className={details ? 'hidden ' : "absolute w-full h-full flex items-end justify-start bg-black/40 rounded-xl text-second-100"}
                initial="hidden"
                animate="visible"
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 3.0, ease: 'easeInOut' }}
                variants={{
                  hidden: { opacity: 0, x: -100, scale: 0 },
                  visible: { opacity: 1, x: 0, scale: "100%" },
                }}>
                <p className='font-bold text-2xl  px-2 pt-4'>{item.name}</p>
              </motion.div>

              <img
                src={item.image}
                alt={item.name}
                className='w-full  h-[300px] object-cover rounded-t-lg  '
              />
              <motion.div className={details ? 'flex  flex-col justify-center items-center text-center px-2 py-4 gap-2 ' : "hidden"}
                initial="hidden"
                animate="visible"
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 3.0, ease: 'easeInOut' }}
                variants={{
                  hidden: { opacity: 0, x: 100, scale: 0 },
                  visible: { opacity: 1, x: 0, scale: "100%" },
                }}>
                <p className='font-bold text-white-100 text-center text-[34px] '>{item.name}</p>
                <div className='flex  flex-col justify-between items-start  px-2  gap-2 '>
                  <div className="flex flex-row justify-between items-start space-x-[400px]">
                    <p className='font-bold text-white-100 text-[30px]'>{item.parish}</p>
                    <p className='font-bold text-white-100 text-[30px] '>{item.country}</p>

                  </div>
                  <p>
                    <span className='flex justify-center items-center p-2 text-second-100 cursor-pointer text-[34px] text-center ml-[250px]'>$
                      {item.price}
                    </span>
                  </p>
                </div>
                <div>
                  <p className='flex justify-center items-center p-2 font-bold text-white-100 text-[24px] '>{item.discrip}</p>
                </div>


              </motion.div>
            </div >
          )
        })}
      </div >
    </motion.div >
  )
}

export default Grid
