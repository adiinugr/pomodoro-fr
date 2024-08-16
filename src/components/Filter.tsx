"use client"
import React, { useState, useEffect } from "react"
import Timer1 from "./Timer1"
import Timer2 from "./Timer2"
import Timer3 from "./Timer3"
import { GoDotFill } from "react-icons/go"

const Timer: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("pomodoro")
  const [headerText, setHeaderText] = useState<string>("Pomodoro")

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
    switch (filter) {
      case "pomodoro":
        setHeaderText("Pomodoro")
        break
      case "short":
        setHeaderText("Short Break")
        break
      case "long":
        setHeaderText("Long Break")
        break
      default:
        setHeaderText("Pomodoro")
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="">
          <p className="text-[35px] text-white font-semibold">Focustimer</p>
        </div>
        <div className="text-white text-end">
          <p className="text-[26px] font-semibold">
            &quot;Don&quot;t limit your dreams,
          </p>
          <span className="text-[26px] font-semibold text-end">
            chase them&quot;
          </span>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="p-1 md:p-2 flex justify-center py-2">
          <div className="bg-transparent p-2 flex justify-center gap-2 rounded-md">
            <div
              className={`p-2 px-8 py-2 cursor-pointer ${
                activeFilter === "pomodoro"
                  ? "bg-[#7432ff] text-white font-semibold rounded-md border-2 border-[#7432ff]"
                  : " text-white border-2 border-white rounded-md hover:bg-[#7432ff] hover:border-[#7432ff] font-semibold"
              }`}
              onClick={() => handleFilterClick("pomodoro")}
            >
              <p className="text-[20px] font-monop-6">Focus</p>
            </div>
            <div
              className={`p-2 px-8 py-2 cursor-pointer ${
                activeFilter === "short"
                  ? "bg-[#7432ff] text-white font-semibold rounded-md border-2 border-[#7432ff]"
                  : " text-white border-2 border-white rounded-md hover:bg-[#7432ff] hover:border-[#7432ff] font-semibold"
              }`}
              onClick={() => handleFilterClick("short")}
            >
              <p className="text-[20px] font-monop-6">Short Break</p>
            </div>
            <div
              className={`p-2 px-8 py-2 cursor-pointer ${
                activeFilter === "long"
                  ? "bg-[#7432ff] text-white font-semibold rounded-md border-2 border-[#7432ff]"
                  : " text-white border-2 border-white rounded-md hover:bg-[#7432ff] hover:border-[#7432ff] font-semibold"
              }`}
              onClick={() => handleFilterClick("long")}
            >
              <p className="text-[20px] font-monop-6">Long break</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[500px] flex items-center">
        <GoDotFill className="text-white" />
        <GoDotFill className="text-[#959096]" />
        <GoDotFill className="text-[#959096]" />
        <GoDotFill className="text-[#959096]" />
      </div>
      <div className=" container mx-auto w-full">
        <div className="">
          {/* Content based on active filter */}
          {activeFilter === "pomodoro" && <Timer1 />}
          {activeFilter === "short" && (
            <div className="">
              {" "}
              <Timer2 />{" "}
            </div>
          )}
          {activeFilter === "long" && (
            <div className="">
              {" "}
              <Timer3 />{" "}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Timer