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
    <div className="">

      {/* copyright */}
      <p className="pt-3 pb-4 copyright laptop:float-right tablet:float-right lg:float-right text-center">
        Copyright
        @
        <span>{theDate} </span>
        Atlantic Marine & Oilfield Services Limited. All rights reserved
      </p>

    </div>

  );
};

export default Footer;
