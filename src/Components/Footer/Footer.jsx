import React from "react";
import CoHabit from "../../assets/Cohabit Logo B 1.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  return (
    <div className="bg-[#010886] text-[#D6DDEB] ">
      <footer className="footer laptop:p-10 p-6 laptop:mx-[8rem] mx-0">
        <div className="laptop:-mr-[5rem] laptop:-ml-10">
          <img src={CoHabit} className="laptop:-ml-5" alt="web-logo" />
          <p className="w-[23rem] text-[1rem] font-normal">
            Our mission is to help people find affordable homes <br className="hidden laptop:flex" />
            with a seamless and rewarding shared experiences.
          </p>
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
            The latest news, articles, sent to your inbox weekly.
          </p>
          <div className="form-control w-80">
            <div className="relative">
              <input type="email" placeholder="Email Address" className="input input-bordered w-full bg-white pr-16" />
              <button className="btn hover:bg-[#DF8026] bg-[#df7f26f2] text-black font-bold text-[1.125rem] normal-case absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>




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



{/* <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer> */}