import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import logo from "../logo.png";
import hero from "../dashHero.png";

export default function NavbarUser() {
  const [close, setClose] = useState(false);
  function handleClose() {
    console.log("close", close);
    setClose(!close);
  }

  function handleLogout() {
    
  }

  return (
    <div className="z-50">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={handleClose}
      >
        <i className="rounded-md text-black">
          <GiHamburgerMenu className="px-2 rounded-md" size={50} />
        </i>
      </span>
      <div
        className={`${close ? "hidden " : "block "
          } fixed top-0 bottom-0 lg:top-5 lg:bottom-5 left-0 p-2 w-[350px] md:w-[300px] text-center bg-[#3C37FF]`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2 mt-1 flex flex-row justify-between items-center">
            <div className="rounded-md">
              <img src={logo} alt="Logo" className="h-20 mx-20" />
            </div>
            <i className="cursor-pointer" onClick={handleClose}>
              <GrClose className="" size={30} />
            </i>
          </div>
        </div>
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center"
        >
          <span className="flex flex-row">
            <MdSpaceDashboard size={30}/>
            <h1 className="text-xl">
            Dashboard
            </h1>
          </span>
        </div>
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-center"
        >
          <span className="flex flex-row">
            <MdSpaceDashboard size={30}/>
            <h1 className="text-xl">
            <a href="/home/profile">
            Profile
            </a>
            </h1>
          </span>
        </div>
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-center"
        >
          <span className="flex flex-row">
            <MdSpaceDashboard size={30}/>
            <h1 className="text-xl">
            Open Issue Tracker
            </h1>
          </span>
        </div>
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center"
        >
          <span className="flex flex-row">
            <MdSpaceDashboard size={30}/>
            <h1 className="text-xl">
            Laws and Amendments
            </h1>
          </span>
        </div>
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center"
        >
          <span className="flex flex-row">
            <MdSpaceDashboard size={30}/>
            <h1 className="text-xl">
            Calender
            </h1>
          </span>
        </div>
          <div className="">
            <div>
              <img src={hero} className="h-40 m-auto" alt="hero" />
            </div>
        <div
          onClick={handleLogout}
          className="p-2.5 flex mt-3 justify-center items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center"
        >
          <span className="text-xl ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}
