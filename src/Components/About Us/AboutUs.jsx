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
  <section className="bg-[#EFEFEF]">

    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >

      <div className="hero min-h-screen ">
        <div className="hero-content w-full mt-10 bg-[#010886] laptop:mt-auto laptop:mx-[8rem]">
          {/* <div className="max-w-lg"> */}
          <div className="w-full laptop:mx-[8rem] top-0 laptop:mt-[7rem]">
            <img src={BreadCrumb} className='' alt="Breadcrumb" />
            <h1
              className="text-[3rem] leading-[3.4375rem] font-bold text-[#fff] mt-12">
              About Us
            </h1>

          </div>
        </div>
      </div>

      <div className='h-[20rem]'>

      </div>

      <div className='py-8 bg-[#010886] text-white'>
        <div className='laptop:mx-[8rem]'>
          <h2>
            BENEFIT OF USING CO-HABIT
          </h2>
        </div>
      </div>



    </motion.div>


  </section >
)

export default AboutUs