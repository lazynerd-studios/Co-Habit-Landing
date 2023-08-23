import React from 'react'
import { motion } from "framer-motion";
import Search from "../../assets/Search.svg"
import Location from "../../assets/Location.svg"
import Scribble from "../../assets/scribble-lines.svg"


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const Listings = () => {
  return (
    <section>

      <div className="hero min-h-screen bg-[#f8f8fd]">
        <motion.div
          variants={animationConfiguration}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 3 }}
        >
          <div className="hero-content text-center laptop:mt-auto laptop:mx-[8rem]">

            <div className="w-auto">

              <h1 className="laptop:text-[3.125rem] text-[2.125rem] laptop:leading-[3.3rem] font-bold text-[#25324B]">
                <span className="text-5xl">
                  Find your &nbsp;
                </span>
                <span className="block laptop:inline ">
                  <span className="text-5xl text-[#010886] leading-[3.4375rem]">
                    Shared Apartment
                  </span>
                  <img src={Scribble}
                    className=''
                    alt='scribble-lines' />
                </span>
              </h1>

              <p className=' leading-[1.6rem] mt-6 mb-10'>
                Our mission is to help people find affordable homes with a seamless and rewarding shared experiences
              </p>
              {/* <button className="py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">Search</button> */}
            </div>
          </div>


          {/* search */}
          <div className="w-auto mt-[] laptop: laptop:flex laptop:mx-[] laptop:w-auto rounded-md bg-white px-2 py-2 border-2 border-none">
            {/* laptop:w-[65%] laptop:mx-[5rem] */}
            <span className="flex">
              <img src={Search} className="laptop:w-[13%] p-1 mr-1" alt="search" />
              <input type="text"
                className="border-b-[#7C8493] laptop:w-auto w-[77%] mr-[2rem] p-2 border-2 border-t-white border-x-white text-[#7C8493]"
                placeholder="Apartment/Workspace"
                autoComplete="true"
              />
            </span>

            {/* location */}
            <span className="flex ">
              <img src={Location} className="laptop:w-[13%] p-1 mr-1" alt="location" />
              <select className="laptop:w-full laptop:mr-[] w-[78%] p-2 border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493]"
                name="Location">
                <option className="py-4" value='Apartment/Workspace'>
                  Lagos/Abuja
                </option>
                <option value='Apartment/Workspace'>
                  Ogun/Oyo
                </option>
                <option value='Apartment/Workspace'>
                  Port-Harcourt/Delta
                </option>
                <option value='Apartment/Workspace'>
                  Ibadan/Abuja
                </option>
                <option value='Apartment/Workspace'>
                  Edo/Minna
                </option>
              </select>
            </span>

            {/* search button */}
            <button
              className="btn laptop:ml-4 -ml-4 rounded-none w-[80%] mt-3 laptop:w-auto laptop:mt-auto normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">
              Search
            </button>
          </div>
          {/* end of search */}

          <p className="text-[#515B6F] py-4">
            Popular : Apartment, Bungalow, 2 Bedroom
          </p>



        </motion.div>
      </div>

    </section>
  )
}

export default Listings