
// import StarRating from "react-svg-star-rating";
import { useState } from "react"
import Picture2 from "../assets/gallery/Picture2.jpg"
import Picture3 from "../assets/gallery/Picture3.jpg"



export const houses = [

  {
    id: 1,
    name: 'Negiril Hights beach house',
    category: '5-star',
    adress: " 123 Ocean View Drive",
    parish: "Negril",
    country: "Jamaica",
    discrip: "Stunning beachfront property with panoramic ocean views.Spacious 3-bedroom house with a private pool.Direct access to Seven Mile Beach.Fully equipped kitchen, outdoor BBQ area.Air conditioning, Wi-Fi, and cable TV.Daily housekeeping service included.Close proximity to local restaurants and attractions",
    price: '20,000',
    image: Picture2,
    range7: '17,000-20,000',

  },
  {

    id: 2,
    name: " Dolphine Tropical Haven Beach House",
    category: '3-star',
    adress: " 456 Palm Tree Lane",
    parish: "St. Ann",
    country: "Jamaica",
    discrip: "Charming beachfront retreat with a lush tropical garden. 2-bedroom cottage with a spacious veranda overlooking the sea.Steps away from the crystal-clear waters of the Caribbean Sea. Hammocks for relaxing in the sea breeze .Fully furnished kitchen and dining area. Complimentary Wi-Fi and beach equipment, Peaceful loc",
    image: Picture3,
    images: ["/assets/Picture3.jpg", "/assets/Picture10.jpg", "/assets/Picture11.jpg", "/assets/Picture12.jpg", "/assets/Picture13.jpg", "/assets/Picture14.jpg", "/assets/Picture15.jpg", "/assets/Picture16.jpg",],
    price: '16,000',
    range: '15,000-17,000',
  },



];
