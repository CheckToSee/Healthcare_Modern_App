import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { BiSupport, BiLogoInstagram } from "react-icons/bi";
import { BsShieldLockFill, BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex flex-[3] bg-[#5F37EF] w-full justify-center items-center">
        <div className="w-full h-full max-w-[1000px] flex lg:flex-row flex-col">
          <div className="w-full h-full flex flex-[4] justify-center items-center">
            <h2 className="font-normal text-4xl text-white p-4 lg:text-left text-center">
              InstantRX - the
              <span className="font-bold pl-2 pr-1">
                most trusted online healthcare platform
              </span>{" "}
              for
              <span className="font-bold pl-2 pr-1">your needs.</span>
            </h2>
          </div>
          <div className="w-full h-full flex flex-[1] justify-center items-center">
            <button className="border-white border-[2px] py-5 px-12 rounded-full text-sm text-white font-semibold hover:bg-[#4d2ebf] lg:mb-0 mb-4">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-[13] bg-[#7854F7] justify-center">
        <div className="w-full max-w-[1500px] flex flex-col justify-center">
          <div className="flex flex-row w-full h-48">
            <div className="flex items-center justify-center w-full lg:pl-0 pl-4">
              <GiCheckMark className="text-white mr-3" size={40} />
              <h3 className="text-white text-xl font-medium">
                30 day
                <span className="font-bold pl-1">money back guarantee</span>
              </h3>
            </div>
            <div className="flex items-center justify-center w-full">
              <BiSupport className="text-white mr-3" size={40} />
              <h3 className="text-white text-xl font-medium">
                Support teams
                <span className="font-bold pl-1">across the world</span>
              </h3>
            </div>
            <div className="flex items-center justify-center w-full lg:pr-0 pr-4">
              <BsShieldLockFill className="text-white mr-3" size={35} />
              <h3 className="text-white text-xl font-medium">
                <span className="font-bold pr-1">Safe & Secure</span>
                online payment
              </h3>
            </div>
          </div>
          <div className="w-full h-[50%] flex items-end justify-center border-b-[1px] border-[#9A7DFF]">
            <h2 className="text-4xl font-semibold text-white pb-12">Instant
              <span className="text-black pl-[1px]">RX</span>
            </h2>
          </div>
          <div className="w-full h-full flex justify-center text-white">
            <div className="w-full h-full max-w-[1300px] flex flex-row pt-5 px-12">
              <div className="w-full h-full flex flex-col">
                <h4 className="lg:text-sm text-xs font-bold py-5 lg:px-0 px-4">WHO WE ARE</h4>
                <p className="text-xs pb-2 lg:px-0 px-4">About</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Team</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Work With Us</p>
              </div>
              <div className="w-full h-full flex flex-col">
                <h4 className="lg:text-sm text-xs font-bold py-5">INSTANTRX</h4>
                <p className="text-xs pb-2 lg:px-0 px-4">Features</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Payments</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Marketing</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Shipping</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Store</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Doctor's Blog</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Patient's Blog</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Ideas board</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Mobile App</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Community</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Email Newsletter</p>
              </div>
              <div className="w-full h-full flex flex-col">
                <h4 className="lg:text-sm text-xs font-bold py-5 lg:px-0 px-4">OTHER PRODUCTS</h4>
                <p className="text-xs pb-2 lg:px-0 px-4">Storefront</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Lorem</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Dolor sit amet</p>
              </div>
              <div className="w-full h-full flex flex-col">
                <h4 className="lg:text-sm text-xs font-bold py-5 lg:px-0 px-4">SUPPORT</h4>
                <p className="text-xs pb-2 lg:px-0 px-4">Documentation</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Support Policy</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Contact</p>
                <p className="text-xs pb-2 lg:px-0 px-4">COVID-19 Resources</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Privacy Notice for California Users</p>
              </div>
              <div className="w-full h-full flex flex-col">
                <h4 className="lg:text-sm text-xs font-bold py-5 lg:px-0 px-4">WE RECOMMEND</h4>
                <p className="text-xs pb-2 lg:px-0 px-4">Experts</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Success Stories</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Solutions</p>
                <p className="text-xs pb-2 lg:px-0 px-4">Design Feedback Group</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1] bg-white flex-row">
        <div className="w-full h-full flex flex-[1] items-center justify-start">
          <BsTwitter className="ml-20 mr-8" size={25} />
          <BsFacebook className="mx-8" size={25} />
          <BiLogoInstagram className="mx-8" size={25} />
          <BsYoutube className="mx-8" size={25} />
        </div>
        <div className="w-full h-full flex flex-[2] items-center justify-center">
          <h4 className="text-sm text-black">COPYRIGHT INSTANTRX 2022  •  TERMS & CONDITIONS  •  PRIVACY POLICY</h4>
        </div>
        <div className="w-full h-full flex flex-[1]"></div>
      </div>
    </div>
  );
};

export default Footer;
