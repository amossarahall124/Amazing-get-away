import React from 'react'
import Parallax2 from '../components/Parallax2'
import Main from "../components/Main"
import Promotions from "../components/Promotions"
import Prices from "../components/Prices"
import Slider from '../components/Slider'
import Footer from "../components/Footer"
import Transition from "../pages/Transition"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 3.0, ease: "easeInOut" }}
            variants={{
                hidden: { scale: 0, opacity: 0, },
                visible: { scale: 0, opacity: 1, },
            }}>
            <Parallax2 />
            <div className='w-4/6 h-full   ml-[250px]'>
                <Main />
                <Promotions />
                <Slider />
                <Prices />
                <Footer />
            </div>
        </motion.div>
    )
}

export default Transition(Home)
