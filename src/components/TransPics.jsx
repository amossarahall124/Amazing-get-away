import React from 'react'
import Picture4 from "/gallery/Picture4.jpg"
import Picture5 from "/gallery/Picture5.jpg"
import { motion } from "framer-motion"


const TransPics = () => {
    return (
        <div>
            {/* <div className=" flex">
                <motion.div
                    className="' w-[200px] h-[200px] relative mt-[100px] ml-[300px]'"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 3.0, ease: "easeInOut" }}
                    variants={{
                        hidden: { scale: 0, opacity: 0, },
                        visible: { scale: 0, opacity: 1, },
                    }}>
                    <img
                        className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'
                        src={Picture4}
                        alt='bike delivery'
                    />
                </motion.div >
                <motion.div
                    className="' w-[200px] h-[200px] relative mt-[50px] mr-[300px]'"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 3.0, ease: "easeInOut" }}
                    variants={{
                        hidden: { scale: 0, opacity: 0, },
                        visible: { scale: 0, opacity: 1, },
                    }}>
                    <img
                        className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'
                        src={Picture5}
                        alt='bike delivery'
                    />
                </motion.div >
            </div > */}
        </div>

    )
}

export default TransPics
