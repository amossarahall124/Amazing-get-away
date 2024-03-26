import React from 'react'

const NavBar = () => {
    return (
        <div className=" w-screen h-screeen  max-h-[800px] max-w-[800] bg-main-500">
            <div className='Flex  justify-between items-center mx-auto w-fulll h-full' >
                <div>
                    <img src="/logo.png" alt="logo" width={10} height={10} className='w-[120px] h[120px] justify-center items-center ml-32 ' />
                </div>
                <div className='flex space-x-4 items-center justify-center text-[28px] text-second-100 font-serif '>
                    <p>HOME</p>
                    <p>HERO</p>
                    <p>PROMOTIONS</p>
                    <p>PRICES</p>
                </div>
            </div>


        </div>
    )
}

export default NavBar
