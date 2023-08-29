//<br className="hidden laptop:block" />
import React from 'react'
import { motion } from "framer-motion";
import BreadCrumb from "../../assets/Breadcrumb.png"
import SeparatingLine from "../../assets/Separating Line.png"
import ThinnerSeparatingLine from "../../assets/ThinnerSeparatingLine.png"
import LocationPin from "../../assets/u_location-pin-alt.svg"
import MoneyStack from "../../assets/u_money-stack.svg"
import Users from "../../assets/u_users-alt.svg"
import ArrowUp from "../../assets/Arrow up.svg"
import ArrowDown from "../../assets/Arrow down.svg"

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
        <div className="hero-content w-full mt-10 mb-12 h-[16.1875rem] bg-[#010886] laptop:mt- laptop:mx-[8rem]">
          {/* <div className="max-w-lg"> */}
          <div className="w-full laptop:mx-[8rem] top-0 laptop:mt-[3rem]">
            <img src={BreadCrumb} className='' alt="Breadcrumb" />
            <h1
              className="text-[3rem] leading-[3.4375rem] font-bold text-[#fff] mt-8">
              About Us
            </h1>
          </div>

        </div>
      </div>

      <div className='bg-white px-6 py-12 absolute w-auto hidden laptop:block -mt-[4.5rem] h-auto mx-[8rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        {/* <div className='grid grid-cols-2 gap-0'> */}
        <div class="flex justify-between">

          <span className='px-8 border-2 py-0 h-12 rounded-[6.25rem] text-[#999999] border-[#999999] w-[35%] max-w-[40%] mr-10'>
            <button className='py-2 font-bold text-[1rem] leading-[1.6rem]'>
              EXPLORE WITH CO-HABIT
            </button>
          </span>

          <div className='px-4 w-full '>
            <h1 className='text-[#1A1A1A] text-[2.5rem] font-bold leading-[2.75rem] mb-4'>
              OUR STORY
            </h1>

            <p className='text-[1rem] text-[#7C8493] leading-[1.6rem]'>
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

      <div className='h-[30rem] bg-[#EFEFEF]'>

      </div>

      <div className='py-8 bg-[#010886] text-white'>
        <div className='laptop:mx-[8rem] laptop:pt-4'>
          <span className='px-8 border-2 py-4 rounded-[6.25rem] border-[#999999] w-[35%] max-w-[40%] mr-10'>
            <button className='py-2 font-bold text-[1rem] leading-[1.6rem]'>
              BENEFIT OF USING CO-HABIT
            </button>
          </span>

          <img src={SeparatingLine} className='py-8' alt='separating-line' />

          <h1 className='laptop:w-[39.75rem] text-[2.5rem] font-bold leading-[2.75rem]'>
            Finding Your Ideal Space: Easy Apartment Search
          </h1>

          {/* text-in-shapes */}
          <div className="grid grid-cols-1 gap-4 tablet:gap-8 laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-[4rem] laptop:-ml-">

            {/* styled rectangle 1 */}
            <div className="laptop:relative">
              <p className="absolute laptop:w-[%] text-[#515B6F] laptop:px-1 tablet:w-[rem] w-[%] ml-[2rem] mt-[10.5rem] tablet:mt-[12rem] tablet:ml-[2.5rem] laptop:ml-[1.1rem] laptop:mt- text-[0.875rem] font-medium">
                The apartment appeared to be well-cared-
                for and professionally managed. The
                overall maintenance of the house and the
                surrounding landscape reflected a high
                level of attention to detail.
              </p>
              <h2 className="absolute text-[#25324B] w-auto ml-[2rem] laptop:px-1 mt-[8.3rem] laptop:ml-[1.1rem] tablet:mt-[9.5rem] tablet:ml-[2.5rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                Save money with friend
              </h2>
              <img src={LocationPin} className="absolute laptop:w-[2.5rem] tablet:w-[2rem] tablet:mt-[5.5rem] w-[10%] ml-[1.5rem] tablet:ml-[2rem] mt-[4.5rem] laptop:ml-[1rem] laptop:mt-[3.5rem]" alt="location-pin" />

              {/* className="w-[95%] laptop:w-full mx-2 */}

              <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-[95%] laptop:w-full mx-2">
                <path d="M0.5 0.5H290C322.861 0.5 349.5 27.1391 349.5 60V349.5H60C27.1391 349.5 0.5 322.861 0.5 290V0.5Z" fill="#EEF4FD" stroke="#B8C9C9" />
                <path d="M277 1H289C322.137 1 349 27.8629 349 61V92H337C303.863 92 277 65.1371 277 32V1Z" fill="white" />
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

            <span className='hidden laptop:block w-[] absolute z-50 mx-[19rem] mt-32'>
              <svg width="428" height="65" viewBox="0 0 488 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* width="488" height="65" */}
                <path d="M54.3333 3.5C54.3333 4.97276 55.5272 6.16667 57 6.16667C58.4728 6.16667 59.6667 4.97276 59.6667 3.5C59.6667 2.02724 58.4728 0.833333 57 0.833333C55.5272 0.833333 54.3333 2.02724 54.3333 3.5ZM1.12127 63.4851C46.1722 52.2223 57.5 18.8656 57.5 3.5H56.5C56.5 18.4678 45.4278 51.3777 0.878732 62.5149L1.12127 63.4851Z" fill="#92BFEB" />
                <path d="M484.428 59.0833C482.955 59.0833 481.761 60.2772 481.761 61.75C481.761 63.2228 482.955 64.4167 484.428 64.4167C485.9 64.4167 487.094 63.2228 487.094 61.75C487.094 60.2772 485.9 59.0833 484.428 59.0833ZM424.515 5.87113C435.764 50.9218 469.08 62.25 484.428 62.25V61.25C469.479 61.25 436.609 50.1782 425.485 5.62887L424.515 5.87113Z" fill="#92BFEB" />
              </svg>

            </span>

            {/* styled rectangle 2 */}
            <div className="laptop:relative">
              <p className="absolute laptop:w-[%] text-[#515B6F] laptop:px-1 tablet:w-[rem] w-[%] ml-[2rem] mt-[10.5rem] tablet:mt-[12rem] tablet:ml-[2.5rem] laptop:ml-[1.1rem] laptop:mt- text-[0.875rem] font-medium">
                The apartment appeared to be well-cared-
                for and professionally managed. The
                overall maintenance of the house and the
                surrounding landscape reflected a high
                level of attention to detail.
              </p>
              <h2 className="absolute text-[#25324B] w-auto ml-[2rem] laptop:px-1 mt-[8.3rem] laptop:ml-[1.1rem] tablet:mt-[9.5rem] tablet:ml-[2.5rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                Find Verified Partners
              </h2>
              <img src={Users} className="absolute laptop:w-[2.5rem] tablet:w-[2rem] tablet:mt-[5.5rem] w-[10%] ml-[2rem] tablet:ml-[2.5rem] mt-[4.5rem] laptop:ml-[1.5rem] laptop:mt-[3.5rem]" alt="location-pin" />

              <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-[95%] laptop:w-full mx-2">
                <path d="M0.5 0.5H290C322.861 0.5 349.5 27.1391 349.5 60V349.5H60C27.1391 349.5 0.5 322.861 0.5 290V0.5Z" fill="#EEF4FD" stroke="#B8C9C9" />
                <path d="M277 1H289C322.137 1 349 27.8629 349 61V92H337C303.863 92 277 65.1371 277 32V1Z" fill="white" />
                <path d="M316.696 44.792C316.696 45.176 316.616 45.5547 316.456 45.928C316.296 46.2907 316.088 46.648 315.832 47C315.587 47.3413 315.304 47.6773 314.984 48.008C314.664 48.328 314.344 48.6427 314.024 48.952C313.853 49.112 313.661 49.304 313.448 49.528C313.235 49.752 313.032 49.976 312.84 50.2C312.648 50.424 312.483 50.6427 312.344 50.856C312.205 51.0587 312.131 51.2293 312.12 51.368H317.048V53H309.992C309.981 52.9147 309.976 52.8133 309.976 52.696C309.976 52.568 309.976 52.472 309.976 52.408C309.976 51.896 310.056 51.4267 310.216 51C310.387 50.5627 310.605 50.1573 310.872 49.784C311.139 49.4107 311.437 49.0587 311.768 48.728C312.099 48.3973 312.429 48.072 312.76 47.752C313.016 47.5067 313.261 47.2667 313.496 47.032C313.731 46.7973 313.933 46.568 314.104 46.344C314.285 46.1093 314.429 45.8747 314.536 45.64C314.643 45.3947 314.696 45.144 314.696 44.888C314.696 44.3333 314.536 43.9387 314.216 43.704C313.896 43.4693 313.507 43.352 313.048 43.352C312.749 43.352 312.472 43.3947 312.216 43.48C311.96 43.5653 311.731 43.6667 311.528 43.784C311.336 43.9013 311.165 44.024 311.016 44.152C310.867 44.2693 310.755 44.3653 310.68 44.44L309.72 43.08C310.168 42.6533 310.691 42.312 311.288 42.056C311.896 41.7893 312.547 41.656 313.24 41.656C314.424 41.656 315.293 41.9387 315.848 42.504C316.413 43.0587 316.696 43.8213 316.696 44.792Z" fill="black" />
              </svg>

            </div>

            {/* arrow up */}
            {/* <svg width="64" height="60" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="-my-10 laptop:hidden tablet:hidden tablet:mx-0 mx-auto" alt="arrow-down">
                <path id="Vector 2" d="M60.4277 54.0833C58.9549 54.0833 57.761 55.2772 57.761 56.75C57.761 58.2228 58.9549 59.4167 60.4277 59.4167C61.9005 59.4167 63.0944 58.2228 63.0944 56.75C63.0944 55.2772 61.9005 54.0833 60.4277 54.0833ZM0.514893 0.871129C11.7639 45.9218 45.0801 57.25 60.4277 57.25V56.25C45.4788 56.25 12.6089 45.1782 1.4851 0.628871L0.514893 0.871129Z" fill="#92BFEB" />
              </svg> */}

            {/* <img src={ArrowDown} className="-my-10 laptop:hidden tablet:hidden tablet:mx-0 mx-auto" alt="arrow-down" /> */}

            {/* styled rectangle 3 */}
            <div className="laptop:relative">
              <p className="absolute laptop:w-[%] text-[#515B6F] laptop:px-1 tablet:w-[rem] w-[%] ml-[2rem] mt-[10.5rem] tablet:mt-[12rem] tablet:ml-[2.5rem] laptop:ml-[1.1rem] laptop:mt- text-[0.875rem] font-medium">
                The apartment appeared to be well-cared-
                for and professionally managed. The
                overall maintenance of the house and the
                surrounding landscape reflected a high
                level of attention to detail.
              </p>
              <h2 className="absolute text-[#25324B] w-auto ml-[2rem] laptop:px-1 mt-[8.3rem] laptop:ml-[1.1rem] tablet:mt-[9.5rem] tablet:ml-[2.5rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                Close The Deal
              </h2>
              <img src={MoneyStack} className="absolute laptop:w-[2.5rem] tablet:w-[2rem] tablet:mt-[5.5rem] w-[10%] ml-[2rem] tablet:ml-[2.5rem] mt-[4.5rem] laptop:ml-[1.5rem] laptop:mt-[3.5rem]" alt="location-pin" />

              <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-[95%] laptop:w-full mx-2">
                <path d="M0.925293 0.5H290C322.861 0.5 349.5 27.1391 349.5 60V349.5H60.4252C27.5643 349.5 0.925293 322.861 0.925293 290V0.5Z" fill="#EEF4FD" stroke="#B8C9C9" />
                <path d="M277.089 1H289.001C322.138 1 349.001 27.8629 349.001 61V92H337.089C303.952 92 277.089 65.1371 277.089 32V1Z" fill="white" />
                <path d="M312.826 53.24C312.538 53.24 312.239 53.2187 311.93 53.176C311.631 53.144 311.343 53.096 311.066 53.032C310.799 52.9787 310.554 52.92 310.33 52.856C310.106 52.7813 309.935 52.712 309.818 52.648L310.202 51C310.426 51.1067 310.751 51.2293 311.178 51.368C311.604 51.496 312.132 51.56 312.762 51.56C313.604 51.56 314.212 51.4 314.586 51.08C314.959 50.7493 315.146 50.312 315.146 49.768C315.146 49.416 315.071 49.1227 314.922 48.888C314.783 48.6533 314.586 48.4667 314.33 48.328C314.084 48.1787 313.796 48.0773 313.466 48.024C313.146 47.96 312.804 47.928 312.442 47.928H311.786V46.36H312.586C312.831 46.36 313.076 46.3387 313.322 46.296C313.578 46.2427 313.807 46.1573 314.01 46.04C314.212 45.912 314.378 45.7467 314.506 45.544C314.634 45.3413 314.698 45.08 314.698 44.76C314.698 44.504 314.65 44.2853 314.554 44.104C314.458 43.9227 314.33 43.7733 314.17 43.656C314.02 43.5387 313.844 43.4533 313.642 43.4C313.439 43.3467 313.226 43.32 313.002 43.32C312.522 43.32 312.095 43.3947 311.722 43.544C311.348 43.6827 311.018 43.8427 310.73 44.024L310.026 42.584C310.175 42.488 310.356 42.3867 310.57 42.28C310.783 42.1733 311.018 42.072 311.274 41.976C311.54 41.88 311.823 41.8053 312.122 41.752C312.42 41.688 312.735 41.656 313.066 41.656C313.684 41.656 314.218 41.7307 314.666 41.88C315.114 42.0293 315.482 42.2427 315.77 42.52C316.068 42.7867 316.287 43.1067 316.426 43.48C316.575 43.8427 316.65 44.2427 316.65 44.68C316.65 45.192 316.506 45.6507 316.218 46.056C315.94 46.4613 315.578 46.7707 315.13 46.984C315.706 47.1867 316.18 47.5227 316.554 47.992C316.938 48.4613 317.13 49.064 317.13 49.8C317.13 50.2907 317.044 50.7493 316.874 51.176C316.703 51.592 316.442 51.9547 316.09 52.264C315.738 52.5627 315.29 52.8027 314.746 52.984C314.212 53.1547 313.572 53.24 312.826 53.24Z" fill="black" />
              </svg>

            </div>

          </div>
          {/* end of 'how it works' */}

        </div>
      </div>

      <div className='py-8 bg-[#EFEFEF] h-auto text-[#333333]'>
        <div className='laptop:mx-[8rem] laptop:pt-4'>
          <span className='px-8 border-2 py-4 rounded-[6.25rem] border-[#999999] w-[35%] max-w-[40%] mr-10'>
            <button className='py-2 font-bold text-[1rem] leading-[1.6rem]'>
              OUR STORY
            </button>
          </span>

          <img src={SeparatingLine} className='py-8' alt='separating-line' />

          <h1 className='laptop:w-[39.75rem] text-[2.5rem] font-bold leading-[2.75rem]'>
            Although founded in 2023, our story
            dates farther than that.
          </h1>

          <img src={ThinnerSeparatingLine} className='py-8' alt='thinner-separating-line' />



          <img src={EvenThinnerSeparatingLine} className='py-8' alt='even-thinner-separating-line' />

        </div>
      </div>


    </motion.div>


  </section>
)

export default AboutUs