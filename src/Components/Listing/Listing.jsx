import React from 'react'
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { IoRemoveOutline } from "react-icons/io5";
import { BsChevronUp } from "react-icons/bs";
import Scribble from "../../assets/scribble-lines.svg"


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const Listings = () => {
  return (
    <section className=''>
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >
        <div className="hero min-h-screen bg-[#f8f8fd]">

          <div className=" laptop:mt-auto laptop:mx-[8rem]">

            <div className="text-center">

              <h1 className=" text-[2.125rem] laptop:leading-[3.3rem] font-bold text-[#25324B]">
                <span className="text-5xl">
                  Find your &nbsp;
                </span>
                <span className="block laptop:inline ">
                  <span className="text-5xl text-[#010886] leading-[3.4375rem]">
                    Shared Apartment
                  </span>
                  <img src={Scribble}
                    className='absolute laptop:mx-[18rem] mx-8 laptop:w-auto w-[80%]'
                    alt='scribble-lines' />
                </span>
              </h1>

              <p className=' leading-[1.6rem] mt-6 mb-10'>
                Our mission is to help people find affordable homes with a seamless and rewarding shared experiences
              </p>
              {/* <button className="py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">Search</button> */}
            </div>

            {/* search */}
            <div className="mt-[] laptop: laptop:flex justify-between laptop:mx-[] rounded-md bg-white p-2 px-4 border-2 border-none">
              {/* laptop:w-[65%] laptop:mx-[5rem] */}
              <span className="flex">

                <span className="my-3 mx-2">
                  <BiSearch size={25} />
                </span>

                <input type="text"
                  className="border-b-[#7C8493] w-full  mr-[2rem] laptop:px-0 px-2 py-2 border-2 border-t-white border-x-white outline-none text-[#7C8493]"
                  placeholder="Apartment/Workspace"
                  autoComplete="true"
                  size={40}
                />
              </span>

              {/* <span className=' rotate-90 px-2'>
              <IoRemoveOutline size={25} />
            </span> */}

              {/* location */}
              <span className="flex ">

                <span className="my-3 mx-2">
                  <GrLocation size={25} />
                </span>

                {/* <img src={Location} className="laptop:w-[13%] p-1 mr-1" alt="location" /> */}
                <select
                  className="laptop:w-full pr-[12rem] w-[78%] py-2 border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493]"
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

              <button
                className="btn laptop:ml-4 ml-4 rounded-none w-[80%] mt-3 laptop:w-auto laptop:mt-auto normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">
                Search
              </button>
            </div>
            {/* end of search */}
            <p className="text-[#515B6F] py-4 mx-5">
              Popular : Apartment, Bungalow, 2 Bedroom
            </p>
          </div>





          {/* sidebar */}
          {/* <div className="bg-white p-8 w-full">
            <span className="flex ">
              <p className="">
                Property Type
              </p>
              <span className="px-4">
                <BsChevronUp />
              </span>
            </span>
          </div> */}



        </div>

      </motion.div>
    </section >
  )
}

export default Listings