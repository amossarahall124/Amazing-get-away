import React from 'react'
import serPool from '../assets/serPool.jpg'
import serBeach from '../assets/serBeach.jpg'
import serBar from '../assets/serBar.jpg'
import { motion } from "framer-motion";

const Cardes = () => {
    return (
        < section className=" p-6 bg-black-100 ">

            <h1 className=" items-center text-second-500 bg-black-100 font-bold text-4xl text-center ">OUR SERICES  </h1>
            <div className='w-full bg-black-100 mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
                <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 3.0, ease: "easeInOut" }}
                    variants={{
                        hidden: { opacity: 0, x: -80 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <div className=' text-center rounded-xl relative hover:block hover:text-white-100 hover:scale-105 hover:rounded-xl text-second-100 shadow-sm hover:shadow-lg shadow-stone-800 duration-300'>

                        <div className='absolute w-full  h-full  bg-black/40 hover:bg-black/60  '>
                            <p className='font-bold text-4xl px-2 pt-4 hover:scale-105'>Pools</p>
                            <p className='px-2 text-main-950   hover:translate-x-5'>The Airbnb has two pools, one on the rooftop and the other on the ground floor outside. </p>
                        </div>
                        <img
                            className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'
                            src={serPool}
                            alt='bike delivery'
                        />
                    </div>
                </motion.div>

                <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 3.0 }}
                    variants={{
                        hidden: { opacity: 0, y: -80 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    <div className='text-center rounded-xl relative hover:block hover:text-white-100 hover:scale-105 hover:rounded-xl text-second-100 shadow-sm hover:shadow-lg shadow-stone-800 duration-300'>

                        <div className='absolute w-full h-full bg-black/40 rounded-xl text-second-100 hover:bg-black/60 hover:text-white-100 hover:scale-105 shadow-sm hover:shadow-lg shadow-stone-800 duration-300 '>
                            <p className='font-bold text-2xl  px-2 pt-4'>Beaches</p>
                            <p className='px-2 text-main-950  hover:translate-x-5'> Amazing Gateway has private beaches that our guests can enjoy with limited access to individuals. </p>

                        </div>
                        <img
                            className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'
                            src={serBeach}
                            alt='woman odering'
                        />
                    </div>
                </motion.div>

                <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 3.0 }}
                    variants={{
                        hidden: { opacity: 0, x: 80 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <div className='text-center rounded-xl relative hover:block hover:text-white-100 hover:scale-105 hover:rounded-xl text-second-100 shadow-sm hover:shadow-lg shadow-stone-800 duration-300'>

                        <div className='absolute w-full h-full bg-black/40 rounded-xl text-second-100 hover:bg-black/60 hover:text-white-100 hover:scale-105 shadow-sm hover:shadow-lg shadow-stone-800 duration-300'>
                            <p className='font-bold text-2xl px-2 pt-4'>Bar Spaces & Cocktails</p>
                            <p className='px-2 text-main-950  hover:translate-x-5'> Amazing Gateway provides happy hour for our adults 18 years and over to relax at our beautiful poolside bar </p>
                        </div>
                        <img
                            className='max-h-[180px] md:max-h-[250px] w-full object-cover rounded-xl'
                            src={serBar}
                            alt='open doors'
                        />
                    </div>
                </motion.div>
            </div>

        </section>
    )
}

export default Cardes
