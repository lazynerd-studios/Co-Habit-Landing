import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
// import { IoRemoveOutline } from "react-icons/io5";
// import { BsChevronUp } from "react-icons/bs";
// import { BsChevronDown } from "react-icons/bs";
// import Scribble from "../../assets/scribble-lines.svg"
// import DivideLine from "../../assets/line-Divider.png"
import Bungalow01 from "../../assets/Bungalow 01.png"
import BathIcon from "../../assets/u_bath.svg"
import BedIcon from "../../assets/u_bed-double.svg"
// import Line from "../../assets/Line 9.svg"
import { slides } from "../Slideshow/slides";
import "./styles.css"
// import { SidebarWithContentSeparator } from "../SideBar/SideBar";
// import { FiFilter } from "react-icons/fi";
import HeaderBg from "../../assets/header-BG.png"
import HouseBg01 from "../../assets/HouseBg01.png"
import HouseBg02 from "../../assets/HouseBg02.png"
import Half01 from "../../assets/Half01.png"
import Half02 from "../../assets/Half02.png"
// import MobileLines from "../../assets/Mobile lines.png"



const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};


const Details = () => {
    const [index, setIndex] = useState(0);
    const [showFilter, setshowFilter] = useState(false)
    const currentSlide = slides[index];


    return (
        <section className="">
            <motion.div
                variants={animationConfiguration}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 3 }}
            >
                {/* bg-[#f8f8fd] */}
                {/* <div
                    className="hero laptop:min-h-[screen] min-h-screen bg-center bg-contain"> */}
                {/* style={{ backgroundImage: `url(${HeaderBg})` }} */}

                {/* </div> */}

                <div className="laptop:flex hidden laptop:mt-">
                    <img src={Half01} className="" alt="" />
                    <img src={HouseBg01} className="" alt="" />
                    <img src={HouseBg02} className="" alt="" />
                    {/* <img src={Half02} className="" alt="" /> */}
                </div>

                <div className="laptop:absolute w-auto mt-9 laptop:-mt-[10.5rem] laptop:flex laptop:mx-[8rem] laptop:w-[85%] rounded-md bg-white p-2 border-2">
                    {/* laptop:w-[65%] laptop:mx-[5rem] */}
                    <div className="flex">
                        <span className="my-3 mx-3">
                            <img src={Bungalow01} className="rounded-[0.5rem] w-[70%]" alt="" />
                        </span>

                        <span className="-ml-[3rem]">
                            <p className=" text-[#F6513B] my-3 bg-[#FEECE5] p-2 rounded-[0.625rem] w-[80%] px-6">
                                Avaliable for rent
                            </p>
                            <p className="text-[#616A6A] font-bold leading-[1.6rem] different-font">
                                Bungalow
                            </p>
                            <p className="flex gap-4 my-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 10.8C12.3956 10.8 12.7822 10.6827 13.1111 10.4629C13.44 10.2432 13.6964 9.93082 13.8478 9.56537C13.9991 9.19991 14.0387 8.79778 13.9616 8.40982C13.8844 8.02186 13.6939 7.66549 13.4142 7.38579C13.1345 7.10608 12.7781 6.9156 12.3902 6.83843C12.0022 6.76126 11.6001 6.80087 11.2346 6.95224C10.8692 7.10362 10.5568 7.35996 10.3371 7.68886C10.1173 8.01776 10 8.40444 10 8.8C10 9.33043 10.2107 9.83914 10.5858 10.2142C10.9609 10.5893 11.4696 10.8 12 10.8ZM11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L16.8 13.61C17.75 12.6605 18.397 11.4507 18.6593 10.1335C18.9216 8.81623 18.7873 7.45081 18.2735 6.20989C17.7597 4.96897 16.8894 3.90831 15.7727 3.16206C14.656 2.41581 13.3431 2.01749 12 2.01749C10.6569 2.01749 9.344 2.41581 8.22731 3.16206C7.11062 3.90831 6.24033 4.96897 5.72652 6.20989C5.2127 7.45081 5.07845 8.81623 5.34073 10.1335C5.60301 11.4507 6.25005 12.6605 7.2 13.61L11.29 17.71ZM7.23 8.34C7.29833 7.62702 7.52502 6.93829 7.89352 6.32411C8.26203 5.70994 8.76305 5.18581 9.36 4.79C10.1442 4.2751 11.0619 4.00076 12 4.00076C12.9381 4.00076 13.8558 4.2751 14.64 4.79C15.233 5.18445 15.7311 5.7054 16.0987 6.31538C16.4663 6.92537 16.6942 7.60923 16.7659 8.31779C16.8376 9.02634 16.7514 9.74199 16.5135 10.4133C16.2756 11.0845 15.8919 11.6947 15.39 12.2L12 15.59L8.61 12.2C8.10752 11.6996 7.72293 11.0935 7.48421 10.4258C7.24548 9.75807 7.15864 9.04552 7.23 8.34ZM19 20H5C4.73478 20 4.48043 20.1054 4.29289 20.2929C4.10536 20.4804 4 20.7348 4 21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21C20 20.7348 19.8946 20.4804 19.7071 20.2929C19.5196 20.1054 19.2652 20 19 20Z" fill="#515B6F" />
                                </svg>

                                Lagos Mainland
                            </p>

                            <span className="flex gap-6">
                                <span className="flex gap-2 my-3">
                                    <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />

                                    <p className="py-1">
                                        2 Room
                                    </p>
                                </span>

                                <span className="flex gap-2 my-3">
                                    <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />

                                    <p className="py-1">
                                        2 Baths
                                    </p>
                                </span>
                            </span>

                        </span>

                        <span className="ml-[32rem]">
                            <p className="text-[#010886] font-bold leading-[1.8rem] text-[1.5rem] my-[5rem] ">
                                NGN150,000
                            </p>
                        </span>

                    </div>
                </div>


                <div className="hero-content mt-10 laptop:mt-auto laptop:mx-[8rem]">
                    {/* <div className="laptop:mx-[8rem] gap-8"> */}

                    <div className="w-auto border text-[1.5rem] font-bold laptop:mt-[10rem]">
                        <h1>
                            Description
                        </h1>
                        <p>
                            Welcome to your new home! This delightful 3-bedroom house,
                            nestled in a peaceful and family-friendly neighborhood,
                            offers comfort, convenience, and a warm sense of community.
                            With its appealing curb appeal and well-maintained exterior,
                            this property is sure to capture your heart from the moment you
                            step inside.
                        </p>
                    </div>

                </div>


                <div className="h-[10rem]">

                </div>




            </motion.div>
        </section>
    )
}

export default Details