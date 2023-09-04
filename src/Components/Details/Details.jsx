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


                {/* <div className="hero-content mt-10 laptop:mt-auto laptop:mx-[8rem]"> */}
                <div className="laptop:mx-[8rem]">
                    <div className="">

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

                        <div className="w-1/2">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M15.0377 11.6667C14.5454 11.6699 14.0598 11.7822 13.6161 11.9955C13.1723 12.2087 12.7812 12.5176 12.4711 12.9L8.22106 10.9417C8.42088 10.3298 8.42088 9.67021 8.22106 9.05833L12.4711 7.1C12.9724 7.70497 13.6713 8.1134 14.4445 8.2532C15.2177 8.393 16.0154 8.25519 16.6968 7.86409C17.3783 7.47298 17.8997 6.85373 18.169 6.11562C18.4383 5.37751 18.4383 4.56799 18.1688 3.82992C17.8994 3.09186 17.3778 2.4727 16.6963 2.08172C16.0148 1.69075 15.2171 1.55308 14.4439 1.69302C13.6708 1.83296 12.9719 2.24152 12.4707 2.84658C11.9694 3.45164 11.698 4.21432 11.7044 5C11.7069 5.19853 11.7264 5.39647 11.7627 5.59167L7.36272 7.61667C6.89362 7.15798 6.29959 6.84793 5.65506 6.72536C5.01053 6.60278 4.34416 6.67314 3.73943 6.92761C3.13471 7.18208 2.61852 7.60935 2.25556 8.15589C1.89259 8.70242 1.69897 9.34392 1.69897 10C1.69897 10.6561 1.89259 11.2976 2.25556 11.8441C2.61852 12.3907 3.13471 12.8179 3.73943 13.0724C4.34416 13.3269 5.01053 13.3972 5.65506 13.2746C6.29959 13.1521 6.89362 12.842 7.36272 12.3833L11.7627 14.4083C11.7264 14.6035 11.7069 14.8015 11.7044 15C11.7044 15.6593 11.8999 16.3037 12.2662 16.8519C12.6324 17.4001 13.153 17.8273 13.7621 18.0796C14.3712 18.3319 15.0414 18.3979 15.688 18.2693C16.3346 18.1407 16.9286 17.8232 17.3947 17.357C17.8609 16.8908 18.1784 16.2969 18.307 15.6503C18.4356 15.0037 18.3696 14.3335 18.1173 13.7244C17.865 13.1153 17.4378 12.5947 16.8896 12.2284C16.3415 11.8622 15.697 11.6667 15.0377 11.6667ZM15.0377 3.33333C15.3674 3.33333 15.6896 3.43108 15.9637 3.61422C16.2378 3.79735 16.4514 4.05765 16.5775 4.3622C16.7037 4.66674 16.7367 5.00185 16.6724 5.32515C16.6081 5.64845 16.4493 5.94543 16.2162 6.17851C15.9831 6.4116 15.6862 6.57033 15.3629 6.63464C15.0396 6.69895 14.7045 6.66595 14.3999 6.5398C14.0954 6.41365 13.8351 6.20003 13.6519 5.92595C13.4688 5.65187 13.3711 5.32964 13.3711 5C13.3711 4.55797 13.5467 4.13405 13.8592 3.82149C14.1718 3.50893 14.5957 3.33333 15.0377 3.33333ZM5.03772 11.6667C4.70809 11.6667 4.38585 11.5689 4.11177 11.3858C3.83769 11.2026 3.62407 10.9424 3.49792 10.6378C3.37178 10.3333 3.33877 9.99815 3.40308 9.67485C3.46739 9.35155 3.62612 9.05458 3.85921 8.82149C4.0923 8.5884 4.38927 8.42967 4.71257 8.36536C5.03587 8.30105 5.37099 8.33406 5.67553 8.4602C5.98007 8.58635 6.24037 8.79997 6.42351 9.07405C6.60664 9.34813 6.70439 9.67037 6.70439 10C6.70439 10.442 6.5288 10.866 6.21623 11.1785C5.90367 11.4911 5.47975 11.6667 5.03772 11.6667ZM15.0377 16.6667C14.7081 16.6667 14.3859 16.5689 14.1118 16.3858C13.8377 16.2026 13.6241 15.9424 13.4979 15.6378C13.3718 15.3333 13.3388 14.9982 13.4031 14.6749C13.4674 14.3515 13.6261 14.0546 13.8592 13.8215C14.0923 13.5884 14.3893 13.4297 14.7126 13.3654C15.0359 13.3011 15.371 13.3341 15.6755 13.4602C15.9801 13.5863 16.2404 13.8 16.4235 14.074C16.6066 14.3481 16.7044 14.6704 16.7044 15C16.7044 15.442 16.5288 15.866 16.2162 16.1785C15.9037 16.4911 15.4798 16.6667 15.0377 16.6667Z" fill="#010886" />
                                </svg>
                                <p className="">
                                    Share
                                </p>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="h-[10rem]">

                </div>




            </motion.div>
        </section>
    )
}

export default Details