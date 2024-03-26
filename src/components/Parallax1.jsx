import React from 'react'
import { useState, useRef, } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax1 = () => {
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
                className="font-bold text-white text-7xl md:text-6xl relative z-10"
            >
                Amzing Gate Away
            </motion.h1>

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/src/assets/night.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(/src/assets/nightB.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    )
}

export default Parallax1
