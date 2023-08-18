import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { slides } from "./slides"
import BathIcon from "../../assets/u_bath.svg"
import BedIcon from "../../assets/u_bed-double.svg"
import LocationPin from "../../assets/u_location-pin-altt.svg"
import Line from "../../assets/Line 9.svg"

const delay = 2500;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, delay);

        return () => {
            resetTimeout();
        };
    }, [index]);

    const currentSlide = slides[index];

    return (
        <div className="laptop:hidden block overflow-hidden w-[95%] mx-auto mt-8">
            <div className="slideshowSlider whitespace-nowrap">
                <div className="slide bg-white p-0 rounded-[1rem]">

                    <img className="inline-block w-auto rounded-t-[1rem]" src={currentSlide.image} alt={`Slide ${index + 1}`} />

                    <span className="flex mt-4 mx-3 gap-[9.3rem]">
                        <p className="text-[1rem]">
                            {currentSlide.house}
                        </p>
                        <p className="text-[1rem] text-[#010886] font-bold">
                            {currentSlide.price}
                        </p>
                    </span>

                    <span className="flex gap-4 mt-4 mx-2">
                        <span className="mx-1 flex">
                            <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />
                            <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                                2 Rooms
                            </p>
                        </span>

                        <span className="mx-1 flex">
                            <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />
                            <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                                2 Baths
                            </p>
                        </span>

                        <span className="mx-1 flex">
                            <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />
                            <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                                1200sqft
                            </p>
                        </span>
                    </span>

                    <img src={Line} className="mt-5 mb-4" alt="line" />

                    <span className="flex">
                        <img src={LocationPin} className="pb-6 ml-3" alt="location-pin" />
                        <p className="text-[#515B6F] ml-4 text-[0.875rem] font-normal">
                            Surulere, Lagos
                        </p>
                        <a className="inline-block absolute px-6 py-1 rounded-md border-none normal-case font-normal ml-[15.8rem] hover:bg-[#010886] bg-[#010886eb]  text-[white] text-[0.875rem]">
                            View
                        </a>
                    </span>

                </div>
            </div>

            {/* slide dots/'controls' */}
            <div className="slideshowDots text-center">
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " bg-[#010886]" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
            {/* end of slide dots */}

        </div>
    );
}

export default Slideshow;
