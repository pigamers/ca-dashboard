import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { GrAnnounce } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";

import logo from "../logo.png";
import hero from "../dashHero.png";

export default function NavbarAdmin() {
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
        <div>
          <a href="/">
          <div
            className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-center"
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
        
        <div>
          <a href="/">
          <div
            className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-center"
          >
            <span className="flex flex-row gap-2">
              <AiFillCalendar size={30} />
              <h1 className="text-xl">
                Calender
              </h1>
            </span>
          </div>
        </a>
        </div>

        <div>
          <a href="/home-admin/employees">
          <div
            className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-center"
          >
            <span className="flex flex-row gap-2">
              <BsPersonFill size={30} />
              <h1 className="text-xl">
                Employee
              </h1>
            </span>
          </div>
        </a>
        </div>
        
        <div>
          <a href="/home-admin/clients">
          <div
            className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-center"
          >
            <span className="flex flex-row gap-2">
              <RxPerson size={30} />
              <h1 className="text-xl">
                Clients
              </h1>
            </span>
          </div>
        </a>
        </div>

        <div>
          <a href="/home-admin/announcements">
          <div
            className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-center"
          >
            <span className="flex flex-row gap-2">
              <GrAnnounce size={30} />
              <h1 className="text-xl">
                Announcements
              </h1>
            </span>
          </div>
        </a>
        </div>

          <div>
            <img src={hero} className="h-40 m-auto" alt="hero" />
          </div>
          <div
            onClick={handleLogout}
            className="p-2.5 flex mt-3 justify-center items-center px-4 cursor-pointer"
          >
            <span className="flex items-center gap-3 text-xl m-auto text-gray-200 font-bold hover:text-black">
              <LuLogOut size={20} />
              Logout
            </span>
          </div>
      </div>
    </div>
  );
}
