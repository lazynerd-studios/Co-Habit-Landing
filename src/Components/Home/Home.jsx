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

      <div className="hero min-h-screen bg-[#f8f8fd]">
        <motion.div
          variants={animationConfiguration}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 3 }}
        >

          <div className="hero-content text-center laptop:mx-[8rem]">
            <div className="w-full laptop:mt-[5rem]">
              <h1 className="text-[3.125rem] leading-[3.4375rem] font-bold uppercase text-[#25324B]">FIND YOUR PERFECT</h1>
              <span className="laptop:flex">
                <img src={Left} className=" w-[15%] p-0 hidden laptop:flex" alt="left" />
                <h1 className="mx-auto text-[3rem] font-bold leading-[3.4375rem] text-[#010886]">SHARED APARTMENT</h1>
                <img src={Right} className="w-[15%] p-0 hidden laptop:flex" alt="right" />
                {/* mx-auto w-[30%] */}
              </span>

              <div className="flex mt-8">
                <span className="">
                  <img src={HeroImage} className="laptop:max-w-[80%] z-10 w-full mx-auto" alt="Hero Image" />
                </span>

                {/* search */}
                <div className="absolute -mt-8 laptop:flex laptop:ml-[11rem] w-[50%] rounded-md bg-white px-2 py-2 border-none">
                  <input type="text"
                    className="border-b-[#7C8493] mr-[2rem] p-2 border-2 border-t-white border-x-white text-[#7C8493]"
                    placeholder="Apartment/Workspace" autoComplete="true"
                  />

                  <span className="flex">
                    <img src={Location} className="w-[13%] p-1 mr-1" alt="location" />
                    <select className="w-full p-2 border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493]"
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

                  <button
                    className="btn ml-4 rounded-none normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">
                    Search
                  </button>
                </div>
                {/* end of search */}

              </div>

              {/* <img src={Ellipse} className="mx-auto z-[2] -mt-12 w-[8%]" alt="Ellipse" /> */}

            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Home;