import React from 'react'
import { motion } from "framer-motion"

const Transition = (Page) => {
    return () => (
        <>
            <Page />
            <motion.div
                className="slideIn fixed top-o left-0 w-full h-full bg-white"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.25, 0.45, 0.85, 1] }} />

            <motion.div
                className="slideOut fixed top-o left-0 w-full h-full bg-white"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.45, 0.85, 1] }} />
        </>
    )
}

export default Transition;

