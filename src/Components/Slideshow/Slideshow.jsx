import React, { useState, useEffect, useRef } from "react";
import Bungalow1 from "../../assets/bungalow-1.png";
import Bungalow2 from "../../assets/bungalow-2.png";
import Bungalow3 from "../../assets/bungalow-3.png";
import "./styles.css";

const slides = [
    { image: Bungalow1, house: "Bungalow" },
    { image: Bungalow2, house: "Bungalow" },
    { image: Bungalow3, house: "Bungalow" }
];
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
            <div className="slideshowSlider">
                <div className="slide">
                    <img className="inline-block w-auto rounded-t-[1rem]" src={currentSlide.image} alt={`Slide ${index + 1}`} />
                    <p>{currentSlide.house}</p>
                </div>
            </div>

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
        </div>
    );
}

export default Slideshow;
