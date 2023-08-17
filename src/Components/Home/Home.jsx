import React from "react";
import { motion } from "framer-motion";
import Left from "../../assets/left.svg"
import Right from "../../assets/right.svg"
import HeroImage from "../../assets/hero-image.png"
import Ellipse from "../../assets/Ellipse 1.svg"

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
            <div className="w-full laptop:mt-[6rem]">
              <h1 className="text-[3.125rem] leading-[3.4375rem] font-bold uppercase text-[#25324B]">FIND YOUR PERFECT</h1>
              <span className="laptop:flex">
                <img src={Left} className=" w-[15%] hidden laptop:flex" alt="left" />
                <h1 className="mx-auto text-5xl font-bold leading-[3.4375rem] text-[#010886]">SHARED APARTMENT</h1>
                <img src={Right} className="w-[15%] hidden laptop:flex" alt="right" />
                {/* mx-auto w-[30%] */}
              </span>
              <span className="">
                <img src={HeroImage} className="laptop:max-w-[80%] w-full mx-auto" alt="Hero Image" />
                <img src={Ellipse} className="mx-auto z-10 -mt-12 w-[7%]" alt="Ellipse" />
              </span>
              {/* <button className="btn rounded-none normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">Search</button> */}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Home;