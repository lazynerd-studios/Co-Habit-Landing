import React from "react";
import { motion } from "framer-motion";

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
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className=" text-[3.125rem] font-bold uppercase text-[#25324B]">FIND YOUR PERFECT</h1>
              <h1 className="text-5xl font-bold uppercase text-[#010886]">Shared APARTMENT</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn bg-[#010886f1] hover:bg-[#010886] hover:scale-105 text-white hover:text-white">Search</button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;