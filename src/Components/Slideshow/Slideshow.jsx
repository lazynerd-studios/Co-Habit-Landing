import React, { useState } from "react";
import Bungalow1 from "../../assets/bungalow-1.png"
import Bungalow2 from "../../assets/bungalow-2.png"
import Bungalow3 from "../../assets/bungalow-3.png"
import BathIcon from "../../assets/u_bath.svg"
import BedIcon from "../../assets/u_bed-double.svg"
import "./styles.css"

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="laptop:hidden block overflow-hidden w-[80%] mx-0 mt-8">
            <div
                className="slideshowSlider whitespace-nowrap"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className="slide inline-block w-[100%] h-[400px] rounded-t-[40px]"
                        key={index}
                        style={{ backgroundColor }}
                    ></div>
                ))}
            </div>

            <div className="slideshowDots text-center">
                {colors.map((_, idx) => (
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