import React from "react";
import CoHabit from "../../assets/Cohabit Logo B 1.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  return (
    <div className="bg-[#010886] text-[#D6DDEB] ">
      <footer className="footer laptop:p-10 p-6 max-w-[90%] laptop:mx-[8rem] mx-0">
        <div className="laptop:-mr-[9rem] laptop:-ml-10">
          <img src={CoHabit} className="-ml-5" alt="web-logo" />
          <p className="w-[21rem] text-[1rem] font-normal leading-[1.6rem] laptop:mt-5">
            Our mission is to help people find <br className="hidden laptop:flex" />
            affordable homes
            with a seamless and <br className="hidden laptop:flex" />
            rewarding shared experiences.
          </p>
          {/* <br className="hidden laptop:flex" /> */}
        </div>
        <div className="laptop:ml-[6rem]">
          <span className="font-medium text-[1.125rem] laptop:mb-4">About</span>
          <a className="link link-hover leading-[1.6rem]">Companies</a>
          <a className="link link-hover leading-[1.6rem]">Pricing</a>
          <a className="link link-hover leading-[1.6rem]">Terms</a>
          <a className="link link-hover leading-[1.6rem]">Advice</a>
          <a className="link link-hover leading-[1.6rem]">Privacy Policy</a>
        </div>
        <div>
          <span className="font-medium text-[1.125rem] laptop:mb-4">Resources</span>
          <a className="link link-hover leading-[1.6rem]">Help Docs</a>
          <a className="link link-hover leading-[1.6rem]">Guide</a>
          <a className="link link-hover leading-[1.6rem]">Updates</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <span className="font-medium text-[1.125rem] laptop:mb-4">Get notifications</span>
          <p className="leading-[1.6rem]">
            The latest news, articles, sent to your <br className="hidden laptop:flex" />
            inbox weekly.
          </p>
          <div className="flex-col w-[18rem]">
            <div className="relative">
              <input type="email"
                placeholder="Email Address"
                // required
                className="input input-bordered text-[#A8ADB7] w-full bg-white pr-16 mr-6" />
              <button className="btn hover:bg-[#DF8026] bg-[#df7f26f2] text-black font-bold text-[1.125rem] normal-case absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>

      <div className="laptop:flex laptop:mx-[8rem] mx-auto">
        <div className="flex laptop:hidden py-2">
          <a href="#" className="mr-4">
            <LinkedInIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </a>
          <a href="#" className="mr-4">
            <LinkedInIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </a>
          <a href="#" className="">
            <FacebookIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </a>
        </div>

        {/* copyright */}
        <p className="p-4 copyright text-center">
          <span>{theDate} </span>
          @
          Co-habit.
          All rights reserved.
        </p>
        {/* end of copyright */}

        <div className="py-2 laptop:flex hidden">
          <a href="#" className="">
            <FacebookIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </a>
          <a href="#" className="mr-4">
            <InstagramIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </a>
          <a href="#" className="mr-4">
            <LinkedInIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </a>

        </div>
      </div>


      {/* <div className=" text-[#D6DDEB] laptop:mx-[8rem] mx-6">

        <div className="pt-4">
          <a href="#" className="mr-4">
            <LinkedInIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </a>
          <a href="#" className="mr-4">
            <LinkedInIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </a>
          <a href="#">
            <FacebookIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </a>
        </div>

        <p className="p-4 copyright">
          <span>{theDate} </span>
          @
          Co-habit.
          All rights reserved.
        </p>

      </div> */}
    </div>

  );
};

export default Footer;