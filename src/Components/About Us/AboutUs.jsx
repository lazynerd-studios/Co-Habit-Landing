//<br className="hidden laptop:block" />
import React from 'react'
import { motion } from "framer-motion";
import BreadCrumb from "../../assets/Breadcrumb.png"

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const AboutUs = () => (
  <section>

    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >

      <div className="hero min-h-screen bg-[#EFEFEF]">
        <div className="hero-content  mt-10 laptop:mt-auto laptop:mx-[8rem]">
          {/* <div className="max-w-lg"> */}
          <div className="w-auto laptop:mt-[7rem]">
            <img src={BreadCrumb} className='' alt="Breadcrumb" />
            <h1 className=" text-[3.125rem] leading-[3.4375rem] font-bold uppercase text-[#25324B]">ABOUT US</h1>

          </div>
        </div>
      </div>



    </motion.div>


  </section >
)

export default AboutUs