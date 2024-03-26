import React from 'react'
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../assets/logo.png"
import Transition from "../pages/Transition"

const Loading = () => {
    const navigate = useNavigate();

    return (

        <div className='bg-black-100
         w-screen h-screen items-center justify-center flex text-white '>
            <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 3.0, ease: "easeInOut" }}
                variants={{
                    hidden: { scale: 0, opacity: 0, x: -100 },
                    visible: { scale: 0, opacity: 1, x: 0 },
                }}>
                <div className='flex justify-center items-center text-slate-200 '>
                    <img src={logo} alt="logo" width={10} height={10} className='w-[320px] h[320px] justify-center items-center ' />
                    <button onClick={() => { navigate("/home") }} className='p-4 flex items-center justify-center border-4 border-second-300 text-6xl text-second-100 bg-main-500 hover:border-blue-300 hover:bg-black-200 hover:text-blue-300 hover:scale-1.5 duration-300 ease-in-out'> Continue</button>
                </div>
            </motion.div>

        </div>
    )
}

export default Transition(Loading)
