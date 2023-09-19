import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Left from "../../assets/left.svg"
import Right from "../../assets/right.svg"
import MobileLines from "../../assets/Mobile lines.png"
import HeroImage from "../../assets/hero-image.png"
import ScrollToExplore from "../../assets/Scroll to explore.png"
import Search from "../../assets/Search.svg"
import Location from "../../assets/Location.svg"
import StyledRectangle from "../../assets/curved-edge rectangle.svg"
import SmallStyledRectangle from "../../assets/small-styled-rectangle.svg"
import LocationPin from "../../assets/u_location-pin-alt.svg"
import MoneyStack from "../../assets/u_money-stack.svg"
import Users from "../../assets/u_users-alt.svg"
import ArrowUp from "../../assets/Arrow up.svg"
import ArrowDown from "../../assets/Arrow down.svg"
import Bungalow1 from "../../assets/bungalow-1.png"
import Bungalow2 from "../../assets/bungalow-2.png"
import Bungalow3 from "../../assets/bungalow-3.png"
import BathIcon from "../../assets/u_bath.svg"
import BedIcon from "../../assets/u_bed-double.svg"
import Slideshow from "../Slideshow/Slideshow";
import { slides } from "../Slideshow/slides";
import Line from "../../assets/Line 9.svg"
import Building11 from "../../assets/building11.png"
import Building12 from "../../assets/building12.png"
import Building13 from "../../assets/building13.png"
import BlueCircle from "../../assets/blue-circle.svg"
import ArrowLeft from "../../assets/u_angle-left-b.png"
import TemitopeWilliams from "../../assets/temitope williams.png"
import Stars from "../../assets/Stars.png"
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const currentSlide = slides[index];

  return (
    <section className="">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >

        <div className="hero min-h-screen bg-[#f8f8fd]">
          {/* hero section */}
          <div className="hero-content text-center mt-10 laptop:mt-auto laptop:mx-[8rem]">
            <div className="w-auto laptop:mt-[7rem]">
              <h1 className="laptop:text-[3.125rem] tablet:text-[2.125rem] tablet:text-center laptop:text-center leading-[3.3rem] text-[3rem] text-left laptop:leading-[3.4375rem] font-bold uppercase text-[#25324B]">
                FIND YOUR PERFECT
              </h1>
              <span className="laptop:flex">
                <span className="laptop:flex gap-[31.7rem] mt-2 ml-[6.5rem] absolute hidden">
                  <img src={Left} className=" w-[25%]" alt="left" />
                  <img src={Right} className="w-[25%]" alt="right" />
                </span>
                <h1 className="mx-auto laptop:text-[3rem] text-[2rem] text-left leading-[2.4rem] tablet:text-center laptop:text-center laptop:mb-6 font-bold laptop:leading-[3.4375rem] text-[#010886]">
                  SHARED APARTMENT
                </h1>
              </span>

              <div className="laptop:flex mt-8">
                <span className="mb-6 relative">
                  <img src={HeroImage} className="laptop:max-w-[75rem] hidden tablet:flex laptop:flex laptop:mb-8 z-10 w-full mx-auto" alt="Hero Image" />

                  <a href="#reviews" className="">
                    {/* come back here to make the icon center on wider devices */}
                    {/* wider:mx-[32.4rem] laptop:mx-[31.3rem] */}
                    <img src={ScrollToExplore} className="laptop:max-w-[3.9rem] mx-auto -mt-[6rem] z-10 hidden laptop:flex" alt="scroll-to-explore" />
                  </a>
                </span>
                <img src={MobileLines} className="laptop:hidden tablet:hidden" alt="Mobile lines" />

                {/* full search bar */}
                {/* search */}
                <div className="laptop:absolute w-auto mt-9 laptop:-mt-8 laptop:flex laptop:mx-[10rem] laptop:w-[53%] rounded-md bg-white px-2 py-2 border-none">
                  {/* laptop:w-[65%] laptop:mx-[5rem] */}
                  <span className="flex">
                    {/* <img src={Search} className="laptop:w-[13%] p-1 mr-1" alt="search" /> */}
                    <span className="my-3 mx-2">
                      <BiSearch size={25} />
                    </span>
                    <input type="text"
                      className="border-b-[#7C8493] laptop:w-auto w-[77%] outline-none mr-[2rem] p-2 border-2 border-t-white border-x-white text-[#7C8493]"
                      placeholder="Apartment/Workspace" autoComplete="true"
                    />
                  </span>

                  {/* location */}
                  <span className="flex ">
                    {/* <img src={Location} className="laptop:w-[13%] p-1 mr-1" alt="location" /> */}
                    <span className="my-3 mx-2">
                      <GrLocation size={25} />
                    </span>
                    <select className="laptop:w-auto laptop:mr-[] w-[78%] p-2 outline-none border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493]"
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
                    className="btn laptop:ml-4 tablet:-ml-20 -ml- rounded-none w-[80%] mt-3 laptop:w-auto laptop:mt-auto normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">
                    Search
                  </button>
                </div>
                {/* end of search */}

              </div>

            </div>
          </div>
          {/* end of hero section */}
        </div>

        {/* how it works */}
        <div className="w-auto bg-white my-8">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            {/* heading */}
            <h1 className="text-[1.5rem] pt-6 mx-2 text-left tablet:text-center laptop:text-center mb-4 font-bold">
              How It Works ?
            </h1>
            <p className="laptop:mb-[2.5rem] mx-2 text-left tablet:text-center laptop:text-center tablet:mb-8 laptop:w-auto">
              We build and maintain transparency, professionalism, and integrity throughout these processes to build trust with our clients and establish <br className="laptop:flex hidden" />
              a positive reputation in the industry
            </p>

            {/* text-in-shapes */}
            <div className="grid grid-cols-1 gap-2 tablet:gap-8 laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-8">
              {/* styled rectangle 1 */}
              <div className="laptop:relative">
                <p className="absolute laptop:w-[90%] laptop:px-8 tablet:w-[18rem] w-[68%] ml-[2rem] mt-[10.5rem] tablet:mt-[12rem] tablet:ml-[2.5rem] laptop:ml-[1.1rem] laptop:mt-[10.5rem] text-[0.875rem] font-medium">
                  The apartment appeared to be well-cared-
                  for and professionally managed. The
                  overall maintenance of the house and the
                  surrounding landscape reflected a high
                  level of attention to detail.
                </p>
                <h2 className="absolute w-auto ml-[2rem] laptop:px-8 mt-[8.3rem] laptop:ml-[1.1rem] tablet:mt-[9.5rem] tablet:ml-[2.5rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                  List your property
                </h2>
                <img src={LocationPin} className="absolute laptop:w-[2.5rem] tablet:w-[2rem] tablet:mt-[5.5rem] w-[10%] ml-[1.5rem] tablet:ml-[2rem] mt-[4.5rem] laptop:ml-[2.5rem] laptop:mt-[3.5rem]" alt="location-pin" />

                <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="w-[95%] laptop:w-full mx-2">
                  <path d="M0.5 0.5H290C322.861 0.5 349.5 27.1391 349.5 60V349.5H60C27.1391 349.5 0.5 322.861 0.5 290V0.5Z" fill="white" stroke="#B8C9C9" />
                  <path d="M277 1H289C322.137 1 349 27.8629 349 61V92H337C303.863 92 277 65.1371 277 32V1Z" fill="#EEF4FD" />
                  <path d="M310.44 44.216C311.059 43.9707 311.677 43.656 312.296 43.272C312.925 42.888 313.48 42.4347 313.96 41.912H315.32V53H313.384V44.504C313.096 44.728 312.733 44.9467 312.296 45.16C311.859 45.3733 311.437 45.5493 311.032 45.688L310.44 44.216Z" fill="black" />
                </svg>
              </div>
              {/* end of styled rectangle 1 */}

              {/* arrow up */}
              {/* <svg width="60" height="64" viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="-my-10 -py- mx-auto tablet:mx-0 tablet:hidden laptop:hidden" alt="arrow-up">
                <path id="Vector 1" d="M54.3333 3.5C54.3333 4.97276 55.5272 6.16667 57 6.16667C58.4728 6.16667 59.6667 4.97276 59.6667 3.5C59.6667 2.02724 58.4728 0.833333 57 0.833333C55.5272 0.833333 54.3333 2.02724 54.3333 3.5ZM1.12127 63.4851C46.1722 52.2223 57.5 18.8656 57.5 3.5H56.5C56.5 18.4678 45.4278 51.3777 0.878732 62.5149L1.12127 63.4851Z" fill="#92BFEB" />
              </svg> */}

              {/* <img src={ArrowUp} className="-my-10 -py- mx-auto tablet:mx-0 tablet:hidden laptop:hidden" alt="arrow-up" /> */}

              {/* styled rectangle 2 */}
              <div className="relative">
                <div className=" h-[5.6875rem] w-[4.5rem] absolute justify-end z-50 bg-[#EEF4FD] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                  <p className="p-8 font-semibold">
                    2
                  </p>
                </div>
                <div className="h-[21.875rem] w-[21.875rem] border border-[#B8C9C9] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                  <img src={Users} className="mt-14 mb-10 mx-4 w-[2.5rem]" alt="location-pin" />
                  <h2 className=" px-4 mb-4 text-[1.125rem] font-medium">
                    Find Your Flatmate
                  </h2>
                  <p className="px-4 text-[0.875rem] font-medium">
                    The apartment appeared to be well-cared-
                    for and professionally managed. The
                    overall maintenance of the house and the
                    surrounding landscape reflected a high
                    level of attention to detail.
                  </p>
                </div>
              </div>

              {/* arrow up */}
              {/* <svg width="64" height="60" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="-my-10 laptop:hidden tablet:hidden tablet:mx-0 mx-auto" alt="arrow-down">
                <path id="Vector 2" d="M60.4277 54.0833C58.9549 54.0833 57.761 55.2772 57.761 56.75C57.761 58.2228 58.9549 59.4167 60.4277 59.4167C61.9005 59.4167 63.0944 58.2228 63.0944 56.75C63.0944 55.2772 61.9005 54.0833 60.4277 54.0833ZM0.514893 0.871129C11.7639 45.9218 45.0801 57.25 60.4277 57.25V56.25C45.4788 56.25 12.6089 45.1782 1.4851 0.628871L0.514893 0.871129Z" fill="#92BFEB" />
              </svg> */}

              {/* <img src={ArrowDown} className="-my-10 laptop:hidden tablet:hidden tablet:mx-0 mx-auto" alt="arrow-down" /> */}

              {/* styled rectangle 3 */}
              <div className="relative">
                <div className=" h-[5.6875rem] w-[4.5rem] absolute justify-end z-50 bg-[#EEF4FD] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                  <p className="p-8 font-semibold">
                    3
                  </p>
                </div>
                <div className="h-[21.875rem] w-[21.875rem] border border-[#B8C9C9] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                  <img src={MoneyStack} className="mt-14 mb-10 mx-4 w-[2.5rem]" alt="location-pin" />
                  <h2 className=" px-4 mb-4 text-[1.125rem] font-medium">
                    Close The Deal
                  </h2>
                  <p className="px-4 text-[0.875rem] font-medium">
                    The apartment appeared to be well-cared-
                    for and professionally managed. The
                    overall maintenance of the house and the
                    surrounding landscape reflected a high
                    level of attention to detail.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className=" h-[5.6875rem] w-[4.5rem] absolute justify-end z-50 bg-[#EEF4FD] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                  <p className="p-8 font-semibold">
                    1
                  </p>
                </div>
                <div className="h-[21.875rem] w-[21.875rem] border border-[#B8C9C9] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                  <img src={LocationPin} className="mt-14 mb-10 mx-3 w-[2.5rem]" alt="location-pin" />
                  <h2 className=" px-4 mb-4 text-[1.125rem] font-medium">
                    List your property
                  </h2>
                  <p className="px-4 text-[0.875rem] font-medium">
                    The apartment appeared to be well-cared-
                    for and professionally managed. The
                    overall maintenance of the house and the
                    surrounding landscape reflected a high
                    level of attention to detail.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
        {/* end of 'how it works' */}


        {/* 'recently uploaded' */}
        <div className="bg-[#f8f8fd]">
          <div className="w-auto my-8 mx-2 pb-8">
            <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
              <h1 className="text-[1.5rem] mx-2 text-left tablet:text-center laptop:text-center pt-6 mb-4 font-bold">
                Recently Uploaded
              </h1>
              <p className="mx-2 text-left tablet:text-center laptop:text-center laptop:mb-[2.5rem] tablet:mb-[2.5rem] mb-[2.5rem] laptop:w-full">
                Take a deep dive and browse apartment for rent, original neighborhood photos, resident reviews and local insights to <br className="laptop:flex hidden" />
                find what is right for you.
              </p>

              {/* mobile slideshow */}
              <Slideshow />
              {/* end of mobile slideshow */}

              {/* wider screen */}
              {/* <div className="laptop:flex tablet:flex hidden gap-4"> */}
              {/* {slides.map((item, index) => ( */}
              <div key={index}
                className="laptop:grid tablet:mx-4 laptop:mx-0 tablet:grid laptop:grid-cols-3 grid-cols-1 tablet:grid-cols-2 tablet:gap-6 laptop:gap-8 ">
                {/* 01 */}
                <div className="slide bg-white p-0 rounded-[1rem] mb-4">
                  <img src={Bungalow1} className=" w-full" alt="bungalow-1" />
                  <span className="flex mt-4 mx-2 justify-between">
                    <p className="text-[1rem]">
                      {currentSlide.house}
                    </p>
                    <p className="text-[1rem] text-[#010886] font-bold">
                      {currentSlide.price}
                    </p>
                  </span>

                  <span className="flex laptop:gap- gap-[0.125rem] mt-4 px-2 justify-between">
                    <span className=" flex">
                      <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />
                      <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                        {currentSlide.rooms}
                      </p>
                    </span>

                    <span className=" flex">
                      <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />
                      <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                        {currentSlide.baths}
                      </p>
                    </span>

                    <span className="flex">
                      <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />
                      <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                        {currentSlide.measurement}
                      </p>
                    </span>
                  </span>

                  <img src={Line} className="mt-5 mb-4 w-full" alt="line" />

                  <span className="flex justify-between mr-2">
                    <span className="flex">
                      <img src={LocationPin} className="pb-6 ml-3 laptop:w-[12%] tablet:w-[12%] w-[12%] opacity-50" alt="location-pin" />
                      <p className="text-[#515B6F] ml-4 text-[0.875rem] font-normal">
                        {currentSlide.area}
                      </p>
                    </span>
                    <span>
                      <a className="inline-block cursor-pointer px-6 py-1 rounded-md border-none normal-case font-normal ml-[rem] laptop:ml-[rem] hover:bg-[#010886] bg-[#010886eb]  text-[white] text-[0.875rem]">
                        View
                      </a>
                    </span>
                  </span>
                </div>
                {/* end of 01 */}

                {/* 02 */}
                <div className="slide bg-white p-0 rounded-[1rem] mb-4">
                  <img src={Bungalow2} className=" w-full" alt="bungalow-2" />
                  <span className="flex mt-4 mx-2 justify-between">
                    <p className="text-[1rem]">
                      {currentSlide.house}
                    </p>
                    <p className="text-[1rem] text-[#010886] font-bold">
                      {currentSlide.price}
                    </p>
                  </span>

                  <span className="flex laptop:gap- gap-[0.125rem] mt-4 px-2 justify-between">
                    <span className=" flex">
                      <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />
                      <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                        {currentSlide.rooms}
                      </p>
                    </span>

                    <span className=" flex">
                      <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />
                      <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                        {currentSlide.baths}
                      </p>
                    </span>

                    <span className="flex">
                      <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />
                      <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                        {currentSlide.measurement}
                      </p>
                    </span>
                  </span>

                  <img src={Line} className="mt-5 mb-4 w-full" alt="line" />

                  <span className="flex justify-between mr-2">
                    <span className="flex">
                      <img src={LocationPin} className="pb-6 ml-3 laptop:w-[12%] tablet:w-[12%] w-[12%] opacity-50" alt="location-pin" />
                      <p className="text-[#515B6F] ml-4 text-[0.875rem] font-normal">
                        {currentSlide.area}
                      </p>
                    </span>
                    <span>
                      <a className="inline-block cursor-pointer px-6 py-1 rounded-md border-none normal-case font-normal ml-[rem] laptop:ml-[rem] hover:bg-[#010886] bg-[#010886eb]  text-[white] text-[0.875rem]">
                        View
                      </a>
                    </span>
                  </span>
                </div>
                {/* end of 02 */}

                {/* 03 */}
                <div className="slide w-auto bg-white p-0 rounded-[1rem] mb-4">
                  <img src={Bungalow3} className=" w-full" alt="bungalow-3" />
                  <span className="flex mt-4 mx-2 justify-between">
                    <p className="text-[1rem]">
                      {currentSlide.house}
                    </p>
                    <p className="text-[1rem] text-[#010886] font-bold">
                      {currentSlide.price}
                    </p>
                  </span>

                  <span className="flex laptop:gap- gap-[0.125rem] mt-4 px-2 justify-between">
                    <span className=" flex">
                      <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />
                      <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                        {currentSlide.rooms}
                      </p>
                    </span>

                    <span className=" flex">
                      <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />
                      <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                        {currentSlide.baths}
                      </p>
                    </span>

                    <span className="flex">
                      <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />
                      <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                        {currentSlide.measurement}
                      </p>
                    </span>
                  </span>

                  <img src={Line} className="mt-5 mb-4 w-full" alt="line" />

                  <span className="flex justify-between mr-2">
                    <span className="flex">
                      <img src={LocationPin} className="pb-6 ml-3 laptop:w-[12%] tablet:w-[12%] w-[12%] opacity-50" alt="location-pin" />
                      <p className="text-[#515B6F] ml-4 text-[0.875rem] font-normal">
                        {currentSlide.area}
                      </p>
                    </span>
                    <span>
                      <a className="inline-block cursor-pointer px-6 py-1 rounded-md border-none normal-case font-normal ml-[rem] laptop:ml-[rem] hover:bg-[#010886] bg-[#010886eb]  text-[white] text-[0.875rem]">
                        View
                      </a>
                    </span>
                  </span>
                </div>
                {/* end of 03 */}

              </div>
              {/* ))} */}
              {/* end of wide screen */}

              <button
                className="btn  normal-case laptop:hidden tablet:hidden mx-auto w-full text-[#010886] font-bold leading-[1.8rem] rounded-none border-none bg-transparent hover:bg-transparent hover:" >
                Show all apartment
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none"
                  className="my-1" >
                  <path d="M16.75 7.72559L1.75 7.72559" stroke="#010886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.7002 1.70124L16.7502 7.72524L10.7002 13.7502" stroke="#010886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

            </div>
          </div>
        </div>
        {/* end of 'recently uploaded' */}


        {/* find by location */}
        <div className="w-full bg-white">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            <h1 className="text-[1.5rem] pt-6 mx-2 text-left tablet:text-center laptop:text-center mb-4 font-bold">
              Find By Location
            </h1>
            <p className="mx-2 text-left tablet:text-center laptop:text-center mb-8 laptop:w-auto">
              Take a deep dive and browse apartment for rent, original neighborhood photos, resident reviews and local insights to <br className="laptop:flex hidden" />
              find what is right for you.
            </p>

            <div className="grid grid-cols-1 gap-6 laptop:grid-cols-3 tablet:grid-cols-2 tablet:mx-3 laptop:mx-0 laptop:gap-8">

              {/* <div className="laptop:flex gap-8"> */}
              {/* 01 */}
              <div className="border-2 rounded-md laptop:mt-0 p-4 laptop:w-auto tablet:w-full w-[97%] mx-auto laptop:mx-0 tablet:mx-0">
                <img src={Building11} className="laptop:w-[] w-full" alt="building-2" />

                <div className="flex pt-4 justify-between">
                  <span className="laptop:mr-[rem] mr-[rem]">
                    <p className="text-[#010886] font-normal leading-[1.6rem]">
                      Surulere, Lagos
                    </p>
                    <p className="text-[#010886] font-normal leading-[1.4rem] text-[0.875rem]">
                      823 Properties
                    </p>
                  </span>
                  <span className="laptop:ml-[]">
                    <img src={ArrowLeft} className="absolute laptop:ml-3 my-3 mx-3 laptop:w-[] w-[]" alt="arrow-left" />
                    <img src={BlueCircle} className="laptop:w-[] w-[]" alt="blue-circle" />
                  </span>
                </div>
              </div>

              {/* 02 */}
              <div className="border-2 rounded-md laptop:mt-0 p-4 laptop:w-auto tablet:w-full w-[97%] mx-auto laptop:mx-0 tablet:mx-0">
                <img src={Building12} className="laptop:w-[] w-full" alt="building-2" />

                <div className="flex pt-4 justify-between">
                  <span className="laptop:mr-[rem] mr-[rem]">
                    <p className="text-[#010886] font-normal leading-[1.6rem]">
                      Yaba, Lagos
                    </p>
                    <p className="text-[#010886] font-normal leading-[1.4rem] text-[0.875rem]">
                      823 Properties
                    </p>
                  </span>
                  <span className="laptop:ml-[]">
                    <img src={ArrowLeft} className="absolute laptop:ml-3 my-3 mx-3 laptop:w-[] w-[]" alt="arrow-left" />
                    <img src={BlueCircle} className="laptop:w-[] w-[]" alt="blue-circle" />
                  </span>
                </div>
              </div>

              {/* 03 */}
              <div className="border-2 rounded-md laptop:mt-0 p-4 laptop:w-auto tablet:w-full w-[97%] mx-auto laptop:mx-0 tablet:mx-0">
                <img src={Building13} className="laptop:w-[] w-full" alt="building-2" />

                <div className="flex pt-4 justify-between">
                  <span className="laptop:mr-[rem] mr-[rem]">
                    <p className="text-[#010886] font-normal leading-[1.6rem]">
                      Lekki, Lagos
                    </p>
                    <p className="text-[#010886] font-normal leading-[1.4rem] text-[0.875rem]">
                      823 Properties
                    </p>
                  </span>
                  <span className="laptop:ml-[]">
                    <img src={ArrowLeft} className="absolute laptop:ml-3 my-3 mx-3 laptop:w-[] w-[]" alt="arrow-left" />
                    <img src={BlueCircle} className="laptop:w-[] w-[]" alt="blue-circle" />
                  </span>
                </div>
              </div>

            </div>

            <button
              className="btn my-6 w-auto normal-case laptop:left-1/2 tablet:left-1/2 mx-[8rem] laptop:mx-[0rem] tablet:mx-[0rem] relative text-[#010886] font-bold leading-[1.8rem] rounded-none border border-[#B8C9C9] bg-[#e7faf4e5] hover:bg-[#E7FAF4] hover:border">
              Browse More locations
            </button>

            {/* old */}
            {/* <button
              className="btn my-6 normal-case laptop:mx-[28.5rem] tablet:mx-[19rem] mx-[5rem] text-[#010886] font-bold leading-[1.8rem] rounded-none border border-[#B8C9C9] bg-[#e7faf4e5] hover:bg-[#E7FAF4] hover:border">
              Browse More locations
            </button> */}



          </div>
        </div>

        {/* end of 'find by location' */}

        {/* good reviews by customers */}
        <div id="reviews" className="w-auto bg-[#DF802633] mt-8 pb-8">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            <h1 className="text-[1.5rem] pt-6 mx-2 text-left tablet:text-center laptop:text-center mb-4 font-bold">
              Good Reviews By Customers
            </h1>
            <p className="mx-2 text-left tablet:text-center laptop:text-center laptop:mb-[2.5rem] laptop:w-auto">
              Customer reviews play a crucial role in today's interconnected world, influencing the decisions of consumers and <br className="laptop:flex hidden" />
              shaping the reputation of businesses.
            </p>

            {/* <div className="laptop:flex gap-5"> */}
            <div className="grid grid-cols-1 gap-6  laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-8">
              {/* 01 */}
              <div className="bg-white border-none mx-2 laptop:mx-0 rounded-md laptop:mt-0 mt-8 p-4 laptop:w- w-[]">
                <img src={TemitopeWilliams} className="laptop:w-[] w-[] mx-auto" alt="building-3" />

                <div className="pt-4">

                  <p className="text-[#010886] text-center font-medium leading-[1.6rem]">
                    Temitope Williams
                  </p>
                  <p className="text-[#16DD97] font-normal text-center leading-[1.4rem] text-[0.875rem]">
                    CEO Of Property-pro
                  </p>
                  <img src={Stars} className="laptop:w-[] my-3 w-[] mx-auto" alt="stars" />
                  <p className="text-[#616A6A] text-center font-normal leading-[1.2rem] text-[0.75rem]">
                    I recently had the pleasure of using Co-habit, and I must
                    say it was an exceptional experience from start to finish.
                    I wanted to take a moment to share my thoughts and
                    express my gratitude for the fantastic service and
                    unforgettable moments.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="bg-white border-none mx-2 laptop:mx-0 rounded-md laptop:mt-0 mt-8 p-4 laptop:w- w-[]">
                <img src={TemitopeWilliams} className="laptop:w-[] w-[] mx-auto" alt="building-3" />

                <div className="pt-4">

                  <p className="text-[#010886] text-center font-medium leading-[1.6rem]">
                    Temitope Williams
                  </p>
                  <p className="text-[#16DD97] font-normal text-center leading-[1.4rem] text-[0.875rem]">
                    CEO Of Property-pro
                  </p>
                  <img src={Stars} className="laptop:w-[] my-3 w-[] mx-auto" alt="stars" />
                  <p className="text-[#616A6A] text-center font-normal leading-[1.2rem] text-[0.75rem]">
                    I recently had the pleasure of using Co-habit, and I must
                    say it was an exceptional experience from start to finish.
                    I wanted to take a moment to share my thoughts and
                    express my gratitude for the fantastic service and
                    unforgettable moments.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="bg-white border-none mx-2 laptop:mx-0 rounded-md laptop:mt-0 mt-8 p-4 laptop:w- w-[]">
                <img src={TemitopeWilliams} className="laptop:w-[] w-[] mx-auto" alt="building-3" />

                <div className="pt-4">

                  <p className="text-[#010886] text-center font-medium leading-[1.6rem]">
                    Temitope Williams
                  </p>
                  <p className="text-[#16DD97] font-normal text-center leading-[1.4rem] text-[0.875rem]">
                    CEO Of Property-pro
                  </p>
                  <img src={Stars} className="laptop:w-[] my-3 w-[] mx-auto" alt="stars" />
                  <p className="text-[#616A6A] text-center font-normal leading-[1.2rem] text-[0.75rem]">
                    I recently had the pleasure of using Co-habit, and I must
                    say it was an exceptional experience from start to finish.
                    I wanted to take a moment to share my thoughts and
                    express my gratitude for the fantastic service and
                    unforgettable moments.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
        {/* end of 'good reviews by customers' */}

      </motion.div >
    </section >
  );
};

export default Home;