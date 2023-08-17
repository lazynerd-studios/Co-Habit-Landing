import React from "react";
import { motion } from "framer-motion";
import Left from "../../assets/left.svg"
import Right from "../../assets/right.svg"
import HeroImage from "../../assets/hero-image.png"
import Search from "../../assets/Search.svg"
import Location from "../../assets/Location.svg"

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
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
            <div className="w-full laptop:mt-[5rem]">
              <h1 className="laptop:text-[3.125rem] text-[2.125rem] laptop:leading-[3.4375rem] font-bold uppercase text-[#25324B]">
                FIND YOUR PERFECT
              </h1>
              <span className="laptop:flex">
                <img src={Left} className=" w-[15%] p-0 hidden laptop:flex" alt="left" />
                <h1 className="mx-auto laptop:text-[3rem] text-[2rem] font-bold laptop:leading-[3.4375rem] text-[#010886]">
                  SHARED APARTMENT
                </h1>
                <img src={Right} className="w-[15%] p-0 hidden laptop:flex" alt="right" />
                {/* mx-auto w-[30%] */}
              </span>

              <div className="laptop:flex mt-8">
                <span className="">
                  <img src={HeroImage} className="laptop:max-w-[75rem] laptop:mb-8 z-10 w-full mx-auto" alt="Hero Image" />
                </span>

                {/* full search bar */}
                {/* search */}
                <div className="laptop:absolute w-full mt-12 laptop:-mt-8 laptop:flex laptop:mx-[5rem] laptop:w-[65%] rounded-md bg-white px-2 py-2 border-none">
                  <span className="flex">
                    <img src={Search} className="laptop:w-[13%] p-1 mr-1" alt="search" />
                    <input type="text"
                      className="border-b-[#7C8493] laptop:w-full w-[77%] mr-[2rem] p-2 border-2 border-t-white border-x-white text-[#7C8493]"
                      placeholder="Apartment/Workspace" autoComplete="true"
                    />
                  </span>

                  {/* location */}
                  <span className="flex">
                    <img src={Location} className="laptop:w-[13%] p-1 mr-1" alt="location" />
                    <select className="laptop:w-full w-[78%] p-2 border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493]"
                      name="Location">
                      <option className="py-4" value='Apartment/Workspace'>
                        Lagos/Abuja
                      </option>
                      <option value='Apartment/Workspace'>
                        Ogun/Abuja
                      </option>
                      <option value='Apartment/Workspace'>
                        Port-Harcourt/Abuja
                      </option>
                      <option value='Apartment/Workspace'>
                        Ibadan/Abuja
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

              </div>

              {/* <img src={Ellipse} className="mx-auto z-[2] -mt-12 w-[8%]" alt="Ellipse" /> */}

            </div>
          </div>
          {/* end of hero section */}
        </div>
        <div className="w-full bg-white my-8">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            <h1 className="text-[1.5rem] text-center mb-4 font-bold">How It Works ?</h1>
            <p className="text-center laptop:w-[100%]">
              We build and maintain transparency, professionalism, and integrity throughout these processes to build trust with our clients and establish a <br className="laptop:flex hidden" />
              positive reputation in the industry
            </p>
            <img src={HeroImage} className="laptop:max-w-[75rem] laptop:mb-8 z-10 w-full mx-auto" alt="Hero Image" />
          </div>
        </div>
      </motion.div>
    </section >
  );
};

export default Home;