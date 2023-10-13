/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import MobileLines from "../../assets/Mobile lines.png";
import HeroImage from "../../assets/hero-image.png";
import ScrollToExplore from "../../assets/Scroll to explore.png";
import LocationPin from "../../assets/u_location-pin-alt.svg";
import MoneyStack from "../../assets/u_money-stack.svg";
import Users from "../../assets/u_users-alt.svg";

import { ReviewDetails } from "./content";

import Stars from "../../assets/Stars.png";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import RecentlyUploaded from "./RecentlyUploaded";
import {
  useGetFindByLocationQuery,
  useGetRecentlyUploadedQuery,
} from "../../api/listingApi";
import FindByLocation from "./FindByLocation";
import { BsArrowRight } from "react-icons/bs";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [recentUploadData, setRecentUploadData] = useState();
  const { data, error, isLoading, isSuccess, isError } =
    useGetRecentlyUploadedQuery();

  const [findByLocationData, setFindByLocationData] = useState();
  const {
    data: findByData,
    error: findByError,
    isLoading: findByLoading,
    isSuccess: findBySuccess,
    isError: findByisError,
  } = useGetFindByLocationQuery();

  useEffect(() => {
    if (isSuccess) {
      setRecentUploadData(data?.data);
    }
    if (findBySuccess) {
      setFindByLocationData(findByData?.data);
    }
    if (isError || findByisError) {
      console.error(error || findByError);
    }
  }, [
    isSuccess,
    data?.data,
    error,
    isError,
    findBySuccess,
    findByData?.data,
    findByisError,
    findByError,
  ]);

  console.log(findByLocationData);
  return (
    <section className=" top-0">
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
            <div className="w-auto laptop:mt-[7rem] tablet:mt-8">
              <h1 className="laptop:text-[3.125rem] tablet:text-[2.125rem] tablet:text-center laptop:text-center leading-[3.3rem] text-[3rem] text-left laptop:leading-[3.4375rem] font-bold uppercase text-[#25324B]">
                FIND YOUR PERFECT
              </h1>
              <span className="laptop:flex">
                <h1 className="mx-auto laptop:text-[3rem] text-[2rem] text-left leading-[2.4rem] tablet:text-center laptop:text-center laptop:mb-6 font-bold laptop:leading-[3.4375rem] text-[#010886]">
                  SHARED APARTMENT
                </h1>
              </span>

              <div className="laptop:flex mt-8 justify-center">
                <span className="mb-6 relative">
                  <img
                    src={HeroImage}
                    className="laptop:max-w-[75rem] hidden tablet:flex laptop:flex laptop:mb-8 z-10 w-full mx-auto"
                    alt="Hero Image"
                  />

                  <a href="#reviews" className="">
                    {/* come back here to make the icon centered on wider devices */}
                    {/* wider:mx-[32.4rem] laptop:mx-[31.3rem] */}
                    <img
                      src={ScrollToExplore}
                      className="laptop:max-w-[3.9rem] mx-auto -mt-[6rem] z-10 hidden laptop:flex"
                      alt="scroll-to-explore"
                    />
                  </a>
                </span>
                <img
                  src={MobileLines}
                  className="laptop:hidden tablet:hidden"
                  alt="Mobile lines"
                />

                {/* full search bar */}
                <div className="laptop:absolute place-content-center w-full laptop:w-auto laptop:mx-0 mt-9 laptop:-mt-8 laptop:flex rounded-md bg-white px-4 py-2">
                  <span className="flex">
                    <span className="my-3 mr-2">
                      <BiSearch size={25} />
                    </span>
                    <input
                      type="text"
                      className="border-b-[#7C8493] laptop:w-auto w-full outline-none mr-[2rem] p-2 border-2 border-t-white border-x-white text-[#7C8493]"
                      placeholder="Apartment/Workspace"
                      autoComplete="true"
                    />
                  </span>

                  {/* location */}
                  <span className="flex">
                    <span className="my-3 mr-2">
                      <GrLocation size={25} />
                    </span>
                    <select
                      className="laptop:w-auto laptop:mr-[] w-[100%] px-2 outline-none border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493]"
                      name="Location"
                    >
                      <option value="Apartment/Workspace">Lagos/Abuja</option>
                      <option value="Apartment/Workspace">Ogun/Oyo</option>
                      <option value="Apartment/Workspace">
                        Port-Harcourt/Delta
                      </option>
                      <option value="Apartment/Workspace">Ibadan/Abuja</option>
                      <option value="Apartment/Workspace">Edo/Minna</option>
                    </select>
                  </span>

                  {/* search button */}
                  <button className="btn laptop:ml-4 rounded-none w-full laptop:mt-0 mt-3 laptop:w-auto normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">
                    Search
                  </button>
                </div>
                {/* end of search */}
              </div>
            </div>
          </div>
        </div>
        {/* end of hero section */}

        {/* how it works */}
        <div className="w-auto bg-white my-8">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            {/* heading */}
            <h1 className="text-[1.5rem] pt-6 mx-2 text-left tablet:text-center laptop:text-center mb-4 font-bold">
              How It Works ?
            </h1>
            <p className="laptop:mb-[2.5rem] mx-2 text-left tablet:text-center laptop:text-center tablet:mb-8 laptop:w-auto">
              We build and maintain transparency, professionalism, and integrity
              throughout these processes to build trust with our clients and
              establish <br className="laptop:flex hidden" />a positive
              reputation in the industry
            </p>

            {/* text-in-shapes */}
            <div className="grid grid-cols-1 gap-2 tablet:gap-8 laptop:grid-cols-3 mt-8 tablet:grid-cols-2 laptop:gap-8">
              {/* styled rectangle 1 */}
              <div className=" mb-6 mx-2 relative bg-white border border-[#B8C9C9] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                <div className=" h-[5.6875rem] w-[4.5rem] absolute right-0 top-0 z-50 bg-[#EEF4FD] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                  <p className="p-8 font-semibold">1</p>
                </div>
                <img
                  src={LocationPin}
                  className="mt-14 mb-10 mx-3 w-[2.5rem]"
                  alt="location-pin"
                />
                <h2 className=" px-4 mb-4 text-[1.125rem] font-medium">
                  List your property
                </h2>
                <p className="px-4 text-[0.875rem] mb-20 font-medium">
                  The apartment appeared to be well-cared- for and
                  professionally managed. The overall maintenance of the house
                  and the surrounding landscape reflected a high level of
                  attention to detail.
                </p>
              </div>

              {/* end of styled rectangle 1 */}

              {/* styled rectangle 2 */}
              <div className=" mb-6 mx-2 relative bg-white border border-[#B8C9C9] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                <div className=" h-[5.6875rem] w-[4.5rem] absolute right-0 top-0 z-50 bg-[#EEF4FD] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                  <p className="p-8 font-semibold">2</p>
                </div>
                <img
                  src={Users}
                  className="mt-14 mb-10 mx-4 w-[2.5rem]"
                  alt="users"
                />
                <h2 className=" px-4 mb-4 text-[1.125rem] font-medium">
                  Find Your Flatmate
                </h2>
                <p className="px-4 text-[0.875rem] mb-20 font-medium">
                  The apartment appeared to be well-cared- for and
                  professionally managed. The overall maintenance of the house
                  and the surrounding landscape reflected a high level of
                  attention to detail.
                </p>
              </div>

              {/* styled rectangle 3 */}
              <div className=" mb-6 mx-2 relative bg-white border border-[#B8C9C9] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                {/* h-[21.875rem] tablet:w-[18.875rem] w-[20.475rem] mx-2 laptop:w-[20.875rem] */}
                <div className=" h-[5.6875rem] w-[4.5rem] absolute right-0 top-0 z-50 bg-[#EEF4FD] rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
                  <p className="p-8 font-semibold">3</p>
                </div>
                <img
                  src={MoneyStack}
                  className="mt-14 mb-10 mx-4 w-[2.5rem]"
                  alt="money-stack"
                />
                <h2 className=" px-4 mb-4 text-[1.125rem] font-medium">
                  Close The Deal
                </h2>
                <p className="px-4 text-[0.875rem] mb-20 font-medium">
                  The apartment appeared to be well-cared- for and
                  professionally managed. The overall maintenance of the house
                  and the surrounding landscape reflected a high level of
                  attention to detail.
                </p>
              </div>
            </div>
            {/* end of text-in-shapes */}
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
                Take a deep dive and browse apartment for rent, original
                neighborhood photos, resident reviews and local insights to{" "}
                <br className="laptop:flex hidden" />
                find what is right for you.
              </p>
              {/* mobile slideshow */}

              {/* end of mobile slideshow */}
              {isLoading ? (
                "Loading..."
              ) : (
                <RecentlyUploaded data={recentUploadData} />
              )}

              <button className="btn normal-case laptop:hidden tablet:hidden mx-auto w-full text-[#010886] font-bold leading-[1.8rem] rounded-none border-none bg-transparent hover:bg-transparent hover:">
                Show all apartment
                <span className="my-1">
                  <BsArrowRight size={20} />
                </span>
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
              Take a deep dive and browse apartment for rent, original
              neighborhood photos, resident reviews and local insights to{" "}
              <br className="laptop:flex hidden" />
              find what is right for you.
            </p>
          </div>
          {findByLoading ? (
            "Loading... "
          ) : (
            <FindByLocation data={findByLocationData} />
          )}
        </div>
        {/* end of 'find by location' */}

        {/* good reviews by customers */}
        <div id="reviews" className="w-auto bg-[#DF802633] mt-8 pb-8">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            <h1 className="text-[1.5rem] pt-6 mx-2 text-left tablet:text-center laptop:text-center mb-4 font-bold">
              Good Reviews By Customers
            </h1>
            <p className="mx-2 text-left tablet:text-center laptop:text-center laptop:mb-[2.5rem] laptop:w-auto">
              Customer reviews play a crucial role in today's interconnected
              world, influencing the decisions of consumers and
              <br className="laptop:flex hidden" />
              shaping the reputation of businesses.
            </p>

            <div className="grid grid-cols-1 gap-6  laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-8">
              {ReviewDetails.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white border-none mx-2 laptop:mx-0 rounded-md laptop:mt-0 mt-8 p-4 laptop:w- w-[]"
                  >
                    <img
                      src={item.image}
                      className="laptop:w-[] w-[] mx-auto"
                      alt="building-3"
                    />

                    <div className="pt-4">
                      <p className="text-[#010886] text-center font-medium leading-[1.6rem]">
                        {item.fullname}
                      </p>
                      <p className="text-[#16DD97] font-normal text-center leading-[1.4rem] text-[0.875rem]">
                        {item.position}
                      </p>
                      <img
                        src={Stars}
                        className="laptop:w-[] my-3 w-[] mx-auto"
                        alt="stars"
                      />
                      <p className="text-[#616A6A] text-center font-normal leading-[1.2rem] text-[0.75rem]">
                        {item.review}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* end of 'good reviews by customers' */}
      </motion.div>
    </section>
  );
};

export default Home;
