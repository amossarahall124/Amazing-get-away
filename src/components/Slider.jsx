import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { motion } from "framer-motion"
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
    const slides = [
        {
            url: '/gallery/Picture4.jpg',
        },
        {
            url: '/gallery/Picture5.jpg',
        },
        {
            url: '/gallery/Picture6.jpg',
        },

        {
            url: '/gallery/Picture7.jpg',
        },
        {
            url: '/gallery/Picture8.jpg',
        },
        {
            url: '/gallery/Picture9.jpg',
        },
        {
            url: '/gallery/Picture10.jpg',
        },
        {
            url: '/gallery/Picture11.jpg',
        },
        {
            url: '/gallery/Picture12.jpg',
        },
        {
            url: '/gallery/Picture13.jpg',
        },
        {
            url: '/gallery/Picture14.jpg',
        },
        {
            url: '/gallery/Picture15.jpg',
        },
        {
            url: '/gallery/Picture16.jpg',
        },
        {
            url: '/gallery/Picture17.jpg',
        },
        {
            url: '/gallery/Picture18.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div>
            <motion.div className='w-full bg-black-100 m-auto px-4 py-12'
                initial="hidden"
                animate="visible"
                viewport={{ once: true, }}
                transition={{ duration: 3.0, }}
                variants={{
                    hidden: { opacity: 0, x: -80, scale: 0 },
                    visible: { opacity: 1, x: 0, scale: "100%" },
                }}>
                <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>

                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                    ></div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>

                </div>
            </motion.div>
        </div>
    );
}

export default Slider;