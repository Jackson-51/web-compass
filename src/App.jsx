import { motion } from "framer-motion"
import { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [slide, setSlide] = useState(false);
  const clients = [
    {
      icon: "fa-solid fa-person-walking-luggage", 
      name: "New Student?",
      caption: "Get familiar with campus locations, lecture halls, and essential facilities in minutes."
    },
    {
      icon: "fa-solid fa-person-hiking", 
      name: "Visitors?",
      caption: "Navigate our campus effortlessly with clear directions to any building or landmark."
    },
    {
      icon: "fa-solid fa-bolt", 
      name: "Need Fast Directions?",
      caption: "Find the quickest route to your destination with real-time navigation assistance."
    }
  ]
  return(
    <div className="relative w-screen h-screen flex flex-col">
        <nav className="bg-white sticky z-100 top-0 w-full flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <img src="/logoMap.png" alt="map logo" className="size-10"/>
            <h1>UNILAG COMPASS</h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm text-gray-600">Features</Link>
            <Link to="/" className="text-sm text-gray-600">Maps</Link>
            <Link to="/" className="text-sm text-gray-600">Testimonials</Link>
            <Link to="/" className="text-sm text-gray-600">Contact</Link>
            <button className="cursor-pointer px-8 py-2 bg-(--baseColor) rounded-3xl text-gray-50">Sign Up</button>
          </div>
          <span 
          onClick={() => setSlide(prev => !prev)}
          className="flex md:hidden justify-center items-center bg-(--gray1) text-(--gray4) size-10 rounded-lg">
            <i className="fa-solid fa-bars text-xl"></i>
          </span>

          {/* sidebar for mobile */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={slide ? { x: 20 } : { x: '-100%' }}
            transition={{ type: 'spring', duration: 0.35 }}
            className="absolute left-0 top-20 flex md:hidden flex-col rounded-2xl overflow-hidden bg-[#00000063] backdrop-blur-3xl z-40"
            aria-hidden={!slide}
          >
            <Link to="/" className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#0000002d]"><i className="fa-solid fa-person-chalkboard"></i>Features</Link>
            <Link to="/" className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#0000002d]"><i className="fa-solid fa-location-dot"></i>Maps</Link>
            <Link to="/" className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#0000002d]"><i className="fa-regular fa-comment"></i>Testimonials</Link>
            <Link to="/" className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#0000002d]"><i className="fa-regular fa-address-book"></i>Contact</Link>
          </motion.div>
        </nav>

        <section className="w-full h-max bg-red-50 p-5 flex flex-col gap-5 md:flex-row justify-center items-center">
          <div className="flex flex-col gap-5 md:pl-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl/15 font-bold ">
                <p className="text-(--baseColor)">Explore the</p>
                University of Lagos Campus
                <p className="text-(--baseColor)">with Ease </p>
              </h1>
              <small className="text-(--gray4)">Find buildings, faculties, hostels, and landmarks instantly. Navigate UNILAG like never before.</small>
            </div>
            <div className="w-full relative">
              <input 
              type="text" 
              name="search" 
              placeholder="search"
              className="p-4 rounded-2xl w-full text-gray-700 border border-(--gray2) focus:border-(--gray4) outline-none"/>
              <i className="fa-solid fa-search text-(--gray2) absolute right-3 top-1/2 -translate-y-1/2"></i>
            </div>

            <div className="flex items-center gap-5">
              <button className="cursor-pointer px-5 md:px-8 py-2 md:py-4.5 bg-(--baseColor) rounded-3xl text-gray-50 font-bold flex items-center gap-1 md:gap-2">
                Get Started 
                <i className="fa-solid fa-angle-right"></i>
              </button>
              <button className="cursor-pointer px-5 md:px-8 py-2 md:py-4.5 border border-(--baseColor) text-(--baseColor) rounded-3xl font-bold">
                View Map
              </button>
            </div>
          </div>

          <div className="relative w-full h-max">
            <img src="/mapUnilag.png" alt="" className="mask brightness-75"/>
            <div className="absolute right-0 -bottom-5 bg-white p-5 rounded-2xl flex items-center gap-3 shadow-2xl">
                <span className="size-10 flex justify-center items-center bg-red-50 rounded-2xl text-gray-700">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span>
                  <h1>20+ locations</h1>
                  <small className="text-gray-500">mapped & ready</small>
                </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center w-full h-max py-10 gap-5">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Having Trouble Finding<br/> Your Way
            <p className="text-(--baseColor)">Around UNILAG?</p>
          </h1>

          <div className="flex flex-col w-full p-3 gap-5 md:flex-row items-center justify-center">
            {clients.map((item, i) => (
              <div key={i} className="flex flex-col gap-3 p-5 border border-gray-300 hover:border-(--baseColor) hover:shadow-2xl hover:scale-102 transition duration-100 bg-red-50 rounded-2xl">
                <i className={item.icon + " text-5xl text-gray-800"}></i>
                <h1 className="text-2xl font-bold text-gray-800">{item.name}</h1>
                <small className="text-gray-600">{item.caption}</small>
              </div>
            ))}
          </div>
        </section>
    </div>  
  );
}
 
export default App;
