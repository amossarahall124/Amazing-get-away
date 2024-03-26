import React from 'react'
import { useState } from "react"
import { motion } from "framer-motion"

const Main = () => {
    const [more, setMore] = useState(false)
    return (
        <div className='text-white mt-16 w-full'>


            <div className='flex flex-col gap-2 items-center w-full f-full justify-center  text-white-100 '>
                <div className='flex flex-col gap-2 items-start justify-center'> <h1 className=' font-bold items-center justify-center text-[44px]'>Welcome to Your Amazing Give Aways</h1> <p className=' font-bold items-center justify-center  text-[36px] '>Where your dream Get away is on give away</p></div>
                <div className='flex flex-col items-center justify-center text-center text-[28px]'><p>We offer a feature called "Airbnb Experiences" thats part of our travel packages. This provides guests with unique and curated activities and tours hosted by local experts. These experiences allow our guests (tourists) to immerse themselves in the local culture, learn new skills, and explore a destination more authentically. These experiences are designed to offer tourists/guests a deeper connection to the places they visit and create memorable moments during their trip
                </p></div>
                <div className='flex items-center justify-center   text-white-100 text-center text-[28px] mt-8'><p>These two features are unique because they accommodate our guests budgets. The travel packages offer discounts and special offers for our guests<button onClick={() => setMore(!more)} className="text-blue-800 text-[26px]">More...</button></p>
                </div>
            </div>

            <div
                className={more ? "flex flex-col items-center justify-center text-center " : "hidden"}>
                <h1 className='text-[36px] mt-4 font-bold items-center justify-center text-center '>Some Other Packages Amazing Gateway offers to make our Guest Experience memorable. </h1><p className='flex items-center justify-center   text-white-100 text-center text-[28px] mt-8'>•	Long-term stay package: For guests staying for an extended period, we offer discounts or special services tailored to long-term guests.
                    •	Welcome packages: A personalized welcome package for guests, which may include local treats, maps, guides, or a bottle of wine to make guests feel welcomed and appreciated.
                    •	Wellness packages: These packages may include access to amenities such as a hot tub, sauna, yoga classes, or massage services to help guests relax and rejuvenate during their stay.
                    •	Family-friendly packages: We cater to families by offering packages that include items such as cribs, high chairs, toys, children's books, or recommendations for family-friendly activities in the area. However, we must know before booking that Children are a part of our guests.
                    •	Pet-friendly packages: For guests traveling with pets, we offer amenities such as pet beds, food bowls, treats, or information on nearby pet-friendly parks and services. Still, we must know what pets, are so we can prepare our area. Some areas are off-limits to pets.
                    •	Special occasion packages: We offer packages tailored for special occasions such as birthdays, anniversaries, or honeymoons, which may include decorations, flowers, champagne, or special experiences to celebrate the occasion.
                    •	We provide translators as a service on our website & Airbnb app. However, its best to let the host know what language as a guests your fluent in. So we may translator services when communicating with the hosty to prevent language barrier.
                    •	We provide free WI-FI connections with the available rooms of choice.
                    •	Travelling Packages- Our main package is offering Travel packages to our guests
                </p>

            </div>

        </div>
    )
}

export default Main
