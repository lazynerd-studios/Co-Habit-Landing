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
        {/* bg-[#f8f8fd] */}
        <div className="hero laptop:min-h-[screen] min-h-screen bg-header-image laptop:bg-contain bg-contain">

          <div className="laptop:mt-0 laptop:mx-[8rem]">

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
                    className='absolute laptop:mx-[26rem] mx-8 laptop:w-auto w-[80%]'
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

            <p className="text-[#515B6F] py-4 mx-1">
              Popular : Apartment, Bungalow, 2 Bedroom
            </p>
          </div>

        </div>

        {/* listings */}
        <div className="bg-white p-8 w-full">

          {/* sidebar */}
          <div className='laptop:block flex'>
            {/* 01 */}
            <section className=''>
              <span className="flex mb-6 font-semibold text-[1rem] leading-[1.6rem]">
                <p className="">
                  Property Type
                </p>
                <span className="py-1">
                  <BsChevronUp />
                </span>
              </span>

              <form className='select-none'>
                <span className='block'>
                  <input type="checkbox"
                    id="apartment"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="apartment"
                    className="text-[#515B6F] px-4">
                    Apartment (7,997)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="duplex"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="duplex"
                    className="text-[#515B6F] px-4">
                    Duplex (5)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="mini-flat"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="mini-flat"
                    className="text-[#515B6F] px-4">
                    Mini-Flat(2)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="bungalow"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="bungalow"
                    className="text-[#515B6F] px-4">
                    Bungalow (24)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="workspace"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="workspace"
                    className="text-[#515B6F] px-4">
                    Workspace (3)
                  </label>
                </span>
              </form>
            </section>

            {/* 02 */}
            <section className=''>
              <span className="flex mb-6 font-semibold text-[1rem] leading-[1.6rem]">
                <p className="">
                  Location
                </p>
                <span className="py-1">
                  <BsChevronUp />
                </span>
              </span>

              <form className='select-none'>
                <span className='block'>
                  <input type="checkbox"
                    id="abuja"
                    name=""
                    value=""
                    size={30}
                    className=""
                    checked />
                  <label for="abuja"
                    className="text-[#515B6F] px-4">
                    Abuja(24)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="lagos"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="lagos"
                    className="text-[#515B6F] px-4">
                    Lagos(3)
                  </label>
                </span>
              </form>
            </section>

            {/* 03 */}
            <section className=''>
              <span className="flex mb-6 font-semibold text-[1rem] leading-[1.6rem]">
                <p className="">
                  Areas
                </p>
                <span className="py-1">
                  <BsChevronUp />
                </span>
              </span>

              <form className='select-none'>
                <span className='block'>
                  <input type="checkbox"
                    id="abaji"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="abaji"
                    className="text-[#515B6F] px-4">
                    Abaji (57)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="bwari"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="bwari"
                    className="text-[#515B6F] px-4">
                    Bwari (3)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="Gwagwalada"
                    name=""
                    value=""
                    size={30}
                    className=""
                  />
                  <label for="Gwagwalada"
                    className="text-[#515B6F] px-4">
                    Gwagwalada(5)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="kuje"
                    name=""
                    value=""
                    size={30}
                    className=""
                    checked />
                  <label for="kuje"
                    className="text-[#515B6F] px-4">
                    Kuje (12)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="kwali"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="kwali"
                    className="text-[#515B6F] px-4">
                    Kwali (8)
                  </label>
                </span>
              </form>
            </section>

            {/* 04 */}
            <section className=''>
              <span className="flex mb-6 font-semibold text-[1rem] leading-[1.6rem]">
                <p className="">
                  Budget
                </p>
                <span className="py-1">
                  <BsChevronUp />
                </span>
              </span>

              <form className='select-none'>
                <span className='block'>
                  <input type="checkbox"
                    id="100-500k"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="100-500k"
                    className="text-[#515B6F] px-4">
                    100k -500k (4)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="600-900k"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="600-900k"
                    className="text-[#515B6F] px-4">
                    600 - 900k (6)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="1-2m"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="1-2m"
                    className="text-[#515B6F] px-4">
                    1m - 2m (10)
                  </label>
                </span>

                <span className='block'>
                  {/* <input type="checkbox"
                    id="3m-above"
                    name=""
                    value=""
                    size={30}
                    className=" checked:bg-[#010886]"
                    checked
                  />

                  <label for="3m-above"
                    className="text-[#515B6F] px-4">
                    3m or above (4)
                  </label> */}
                  <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-blue-800 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-900 dark:border-blue-500" />
                  <label for="vue-checkbox-list" class="w-full py-3 ml-2 text-sm font-semibold text-black dark:text-black">Vue JS</label>
                </span>
              </form>
            </section>

          </div>
          {/* end of sidebar */}


        </div>
        {/* end of listings */}




      </motion.div>
    </section>
  )
}

export default Listings