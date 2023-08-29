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
  <section className=" bg-[#010886]">

    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >
      {/* <div className='min-h-screen'> */}
      <div className="hero place-content-start ">
        <div className="hero-content w-full mt-10 mb-8  bg-[#010886] laptop:mt- laptop:mx-[8rem]">
          {/* <div className="max-w-lg"> */}
          <div className="w-full laptop:mx-[8rem] top-0 laptop:mt-[3rem]">
            <img src={BreadCrumb} className='' alt="Breadcrumb" />
            <h1
              className="text-[3rem] leading-[3.4375rem] font-bold text-[#fff] mt-12">
              About Us
            </h1>
          </div>

        </div>
      </div>

      <div className='bg-white p-4 absolute w-auto hidden laptop:block -mt-9 h-auto mx-[8rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        {/* <div className='grid grid-cols-2 gap-0'> */}
        <div class="flex justify-between">


          <span className='px-8 border-2 py-0 h-12 rounded-full w-full'>
            <button className='py-2'>
              Hi there
            </button>
          </span>

          <div className='px-4'>
            <h1 className=''>
              OUR STORY
            </h1>

            <p className='text-[1rem]'>
              A ground-breaking platform that transforms the way
              we think about living arrangements is Co-Habit.
              In addition to simplifying the apartment search process,
              Co-Habit additionally creates a cutting-edge method for matching
              up compatible roommates. This is a dual-purpose technology that is
              unique in its design. Co-Habit simplifies this process by providing a
              user-friendly interface that
              enables people to find their ideal living place with ease.
              Co-Habit makes sure the flat search process is simple and effective
              with advanced search filters, interactive maps, and real-time updates
              This concept becomes a reality thanks to Co-Habit. The platform wants
              to improve its members' quality of life by cultivating a peaceful living
              environment and encouraging gratifying connections and shared experiences.
              Welcome to Co-Habit, the place where your quest for the ideal flat and your
              quest for the ideal flatmate collide. Discover new opportunities for cohabitation,
              and open the doors to shared experiences, shared places, and shared aspirations.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className='h-[10rem] bg-[#EFEFEF]'>

      </div>

      <div className='py-8 bg-[#010886] text-white'>
        <div className='laptop:mx-[8rem]'>
          <h2>
            BENEFIT OF USING CO-HABIT
          </h2>
        </div>
      </div>

      <div className='bg-[#EFEFEF] h-[10rem]'>
      </div>


    </motion.div>


  </section >
)

export default AboutUs