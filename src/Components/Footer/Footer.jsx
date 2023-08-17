import React from "react";
import CoHabit from "../../assets/Cohabit Logo C 1.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  // <a href="#">
  //   <LinkedInIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
  // </a>

  return (
    <div className="bg-[#010886]">

      <div className=" text-[#D6DDEB] laptop:mx-[8rem]">

        {/* copyright */}
        <p className="p-4 copyright laptop:justify-start text-center">
          <span>{theDate} </span>
          @
          Co-habit.
          All rights reserved.
        </p>

      </div>
    </div>

  );
};

export default Footer;
