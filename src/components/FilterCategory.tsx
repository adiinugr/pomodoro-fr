"use client"
import React, { useState } from "react"
import { RiFocusFill } from "react-icons/ri"
import Sidebar from "./Sidebar"
import FilterCategory2 from "@/components/FilterCategory2"
import { useTimerSetting } from "@/context/TimerSettingContext"

const Booking: React.FC = () => {
  const [activeFilter] = useState<string>("long")
 

  const getBackgroundImage = () => {
    switch (activeFilter) {
      case "short":
        return `url('/images/bg.jpg')`
      case "long":
        return `url('/images/bg.jpg')`
      case "pomodoro":
      default:
        return `url('/images/bg-1.jpg')`
    }
  }

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center w-full p-6 py-10 md:py-10"
        style={{ backgroundImage: getBackgroundImage() }}
      >
        <div className="w-full">
          <div className="w-full mb-10">
            <div className="">              
              {activeFilter === "long" && (
                <div className="mb-[62px]">
                  {" "}
                  <FilterCategory2 />
                </div>
              )}
            </div>
          </div>
          <div className=" flex justify-end py-2 gap-2">
            <div>
              <div className="bg-[#2e2446] flex rounded-full border-2 border-white">
                <div
                  className={`p-2 cursor-pointer ${
                    activeFilter === "long"
                      ? "bg-gradient-to-r from-[#BCA0FF] to-[#6C37ED] text-white rounded-full"
                      : " text-white"
                  }`}
                >
                  <RiFocusFill size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking
