"use client";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-center bg-white bg-opacity-70 top-0 sticky z-50">
      <nav className="h-16 w-full max-w-[1400px] flex items-center">
        <div className="flex flex-[1.2] flex-row">
          <h1 className="font-bold text-3xl w-full h-16 flex items-center ml-8 mr-8 my-auto cursor-pointer">
            Instant
            <span className="font-extrabold text-[#7854F7]">RX</span>
          </h1>
          <ul className="hidden lg:flex flex-row items-center text-sm text-[#272D4E] font-bold">
            <li className="px-4 hover:text-[#4e599c] cursor-pointer">
              Doctors
            </li>
            <li className="px-4 hover:text-[#4e599c] cursor-pointer">
              Conditions
            </li>
            <li className="px-4 hover:text-[#4e599c] cursor-pointer">
              Testimonials
            </li>
            <li className="px-4 hover:text-[#4e599c] cursor-pointer">
              Resources
            </li>
            <li className="px-4 hover:text-[#4e599c] cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex flex-[1] flex-row items-center justify-end h-12">
          <button className="px-4 py-[8px] rounded-md font-medium hover:bg-[#d4d4d4]">
            Log in
          </button>
          <button className="px-3 py-[8px] mx-2 text-white bg-[#7854F7] rounded-md font-bold hover:bg-[#A186FF]">
            Get Started
          </button>
          <AiOutlineSearch size={25} className="mr-8 ml-4 cursor-pointer" />
        </div>
        <div onClick={handleNav} className="block lg:hidden">
          {!nav ? (
            <AiOutlineClose size={30} className="mr-4 cursor-pointer" />
          ) : (
            <AiOutlineMenu size={30} className="mr-4 cursor-pointer" />
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
