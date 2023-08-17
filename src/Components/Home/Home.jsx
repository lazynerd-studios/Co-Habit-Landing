import React from "react";
import { motion } from "framer-motion";
import Left from "../../assets/left.svg"
import Right from "../../assets/right.svg"

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
          <div className="hero-content text-center">
            <div className="w-full">
              <h1 className=" text-[3.125rem] leading-[3.4375rem] font-bold uppercase text-[#25324B]">FIND YOUR PERFECT</h1>
              <span className="laptop:flex">
                <img src={Left} className="laptop:mr-8 hidden laptop:flex" alt="left" />
                <h1 className="text-5xl font-bold leading-[3.4375rem] text-[#010886]">SHARED APARTMENT</h1>
                <img src={Right} className="laptop:ml-8 hidden laptop:flex" alt="right" />
                {/* mx-auto w-[30%] */}
              </span>
              <button className="btn rounded-none normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">Search</button>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Home;