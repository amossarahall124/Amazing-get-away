import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { motion } from "framer-motion"
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
    const slides = [
        {
            url: '/src/assets/gallery/Picture4.jpg',
        },
        {
            url: '/src/assets/gallery/Picture5.jpg',
        },
        {
            url: '/src/assets/gallery/Picture6.jpg',
        },

        {
            url: '/src/assets/gallery/Picture7.jpg',
        },
        {
            url: '/src/assets/gallery/Picture8.jpg',
        },
        {
            url: '/src/assets/gallery/Picture9.jpg',
        },
        {
            url: '/src/assets/gallery/Picture10.jpg',
        },
        {
            url: '/src/assets/gallery/Picture11.jpg',
        },
        {
            url: '/src/assets/gallery/Picture12.jpg',
        },
        {
            url: '/src/assets/gallery/Picture13.jpg',
        },
        {
            url: '/src/assets/gallery/Picture14.jpg',
        },
        {
            url: '/src/assets/gallery/Picture15.jpg',
        },
        {
            url: '/src/assets/gallery/Picture16.jpg',
        },
        {
            url: '/src/assets/gallery/Picture17.jpg',
        },
        {
            url: '/src/assets/gallery/Picture18.jpg',
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
    );
}

export default Slider;