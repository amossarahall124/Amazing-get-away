import React from 'react'
import { useLocation, Routes, Route, } from "react-router-dom"
import Loading from "../pages/Loading"
import Home from "../pages/Home"
import { AnimatePresence } from "framer-motion"


const AnimatedPages = () => {
    const location = useLocation();
    return (
        <div>
            <AnimatePresence mode='wait' >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Loading />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedPages
