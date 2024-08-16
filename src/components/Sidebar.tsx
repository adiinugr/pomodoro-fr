import React, { useState } from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import clsxm from '@/lib/clsxm';
import { RiFocusFill, RiTimerFill } from "react-icons/ri";
import { FaCloudShowersHeavy } from "react-icons/fa6";
import FocusTheme from "./sidebar/FocusTheme"
import FocusTimer from './sidebar/FocusTimer';
import Sounds from './sidebar/Sounds';

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("focus-theme");
  const [headerText, setHeaderText] = useState<string>("focus-theme");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    switch (filter) {
      case "focus-theme":
        setHeaderText("Short Break");
        break;
      case "focus-timer":
        setHeaderText("Short Break");
        break;
      case "sounds":
        setHeaderText("Short Break");
        break;
      default:
        setHeaderText("focus-theme");
    }
  };

  return (
    <>
      <div
        onClick={() => setNav(!nav)}
        className='p-1 px-2 rounded-md bg-[#2e2446] text-white hover:bg-[#7432ff] cursor-pointer'
      >
        {nav ? (
          <IoMdClose size={30} className="mt-[2px]" />
        ) : (
          <IoSettingsSharp size={30} className="mt-[2px]" />
        )}
      </div>

      <div
        className={clsxm(
          "fixed top-0 right-0 w-[949px] bg-black h-full transform transition-transform duration-300 ease-in-out z-50",
          nav ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="relative pt-16 px-6">
          {nav && (
            <div
              onClick={() => setNav(false)}
              className="absolute top-2 left-2 p-1 rounded-full bg-[#2e2446] text-white cursor-pointer hover:bg-[#7432ff]"
            >
              <IoMdClose size={25} />
            </div>
          )}
          <div className='flex gap-6'>
          <div className='w-[300px]'>
            <div
              className={`p-2 mb-1 ${
                activeFilter === "focus-theme"
                  ? "bg-[#343434] text-white font-semibold rounded-md"
                  : " text-white font-semibold hover:bg-[#343434] rounded-md"
              }`}
              onClick={() => handleFilterClick("focus-theme")}
            >
              <p className="text-[14px] flex items-center gap-3">
                <RiFocusFill size={20}/>
                Focus Theme
              </p>
            </div>
            <div
              className={`p-2 mb-2 ${
                activeFilter === "focus-timer"
                  ? "bg-[#343434] text-white font-semibold rounded-md"
                  : " text-white font-semibold hover:bg-[#343434] rounded-md"
              }`}
              onClick={() => handleFilterClick("focus-timer")}
            >
              <p className="text-[14px] flex items-center gap-3">
                <RiTimerFill size={20}/>
                Focus Timer
              </p>
            </div>
            <div
              className={`p-2 mb-2 ${
                activeFilter === "sounds"
                  ? "bg-[#343434] text-white font-semibold rounded-md"
                  : " text-white font-semibold hover:bg-[#343434] rounded-md"
              }`}
              onClick={() => handleFilterClick("sounds")}
            >
              <p className="text-[14px] flex items-center gap-3">
                <FaCloudShowersHeavy size={20}/>
                Sounds
              </p>
            </div>
          </div>
          
          <div className="h-64 w-[1px] bg-gray-700"></div>
          <div className="w-full h-[calc(100vh-6rem)] overflow-auto mb-10">
              <div className="">
                {activeFilter === "focus-theme" && (
                  <div className="">
                    {" "}
                    <FocusTheme />{" "}
                  </div>
                )}
                {activeFilter === "focus-timer" && (
                  <div className="">
                    {" "}
                    <FocusTimer />{" "}
                  </div>
                )}
                {activeFilter === "sounds" && (
                  <div className="">
                    {" "}
                    <Sounds />{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
