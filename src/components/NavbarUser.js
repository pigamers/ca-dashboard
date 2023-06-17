import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiAlertCircle } from "react-icons/fi";
import { BsCalendarEvent } from "react-icons/bs";
import { TbHammer } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import logo from "../logo.png";
import hero from "../dashHero.png";

export default function NavbarUser() {
  const [close, setClose] = useState(false);
  function handleClose() {
    console.log("close", close);
    setClose(!close);
  }


  return (
    <div>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={handleClose}
      >
        <i className="rounded-md text-black">
          <GiHamburgerMenu className="p-2 rounded-md" size={50} />
        </i>
      </span>
      <div
        className={`${close ? "hidden " : "block "
          } fixed top-0 bottom-0 lg:top-5 lg:bottom-5 left-0 p-2 z-50 w-[350px] md:w-[300px] text-center bg-[#3C37FF]`}
      >
        <div className="text-xl">
          <div className="p-2 mt-1 flex flex-row justify-between items-center">
            <div className="rounded-md">
              <img src={logo} alt="Logo" className="h-20 mx-20" />
            </div>
            <i className="cursor-pointer" onClick={handleClose}>
              <GrClose className="" size={30} />
            </i>
          </div>
        </div>
          {/* Dashboard */}
        <div>
        <a href="/home-user">
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 text-white cursor-pointer hover:bg-blue-300 text-center"
        >
            <span className="flex flex-row gap-2">
              <MdSpaceDashboard size={30} />
              <h1 className="text-xl">
                Dashboard
              </h1>
            </span>
        </div>
          </a>
        </div>
          {/* Profile */}
        <div>
        <a href="/home-user/profile">
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 text-white cursor-pointer hover:bg-blue-300 text-center"
        >
            <span className="flex flex-row gap-2">
              <CgProfile size={30} />
              <h1 className="text-xl">
                Profile
              </h1>
            </span>
        </div>
          </a>
        </div>
          {/* Open Issue Tracker */}
        <div>
        <a href="/home-user/issuetracker">
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 text-white cursor-pointer hover:bg-blue-300 text-center"
        >
            <span className="flex flex-row gap-2">
              <FiAlertCircle size={30} />
              <h1 className="text-xl">
                Open Issue Tracker
              </h1>
            </span>
        </div>
          </a>
        </div>
          {/* Laws and Amendments */}
        <div>
        <a href="/">
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 text-white cursor-pointer hover:bg-blue-300 text-center"
        >
            <span className="flex flex-row gap-2">
              <TbHammer size={30} />
              <h1 className="text-xl">
                Laws and Amendments
              </h1>
            </span>
        </div>
          </a>
        </div>
          {/* Calendar */}
        <div>
        <a href="/home-user/calender">
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 text-white cursor-pointer hover:bg-blue-300 text-center"
        >
            <span className="flex flex-row gap-2">
              <BsCalendarEvent size={30} />
              <h1 className="text-xl">
                Calender
              </h1>
            </span>
        </div>
          </a>
        </div>
          {/* Logout */}
        <div>
        <a href="/">
        <div
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 text-white cursor-pointer hover:bg-blue-300 text-center"
        >
            <span className="flex flex-row gap-2">
              <IoMdLogOut size={30} />
              <h1 className="text-xl">
                Logout
              </h1>
            </span>
        </div>
          </a>
        </div>
        
        <div>
          <img src={hero} className="h-40 m-auto" alt="hero" />
        </div>
      </div>
    </div>
  );
}
