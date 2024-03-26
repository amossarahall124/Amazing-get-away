import React from 'react'
import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax2 = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center"
        >
            <motion.h1
                style={{ y: textY }}
                className="font-bold text-black text-7xl md:text-6xl relative z-10 -mt-60"
            >
                Amzing Gate Away
            </motion.h1>

            <motion.div
                className="absolute inset-0 z-0 rounded-sm broder-2 broder-blue-500"
                style={{
                    backgroundImage: `url(/hill.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />

            <div
                className="absolute inset-0 z-20 rounded-sm broder-2 broder-blue-500"
                style={{
                    backgroundImage: `url(/hillb.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    )
}

export default Parallax2
