import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./styles.css"

const NotFoundPage = () => {
    return (
        <div className='w-full'>
            {/* <h1 className=" text-4xl">
                404 Page NotFound
            </h1>
            <p>
                The page you are looking for does not exist.
            </p> */}

            <section className="page_404 mx-[5rem]">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>
                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <Link to="/" className="btn text-white bg-[#010886] border-none hover:bg-[#010886]/75 ">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default NotFoundPage