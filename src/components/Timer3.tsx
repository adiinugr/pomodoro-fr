"use client"
import React, { useState, useEffect } from "react"
import { MdOutlineRefresh } from "react-icons/md"
import { IoMdSettings } from "react-icons/io"

const Timer: React.FC = () => {
  const [time, setTime] = useState(15 * 60) // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false) // To track if the timer is active
  const [isPaused, setIsPaused] = useState(true) // To track if the timer is paused
  const [isModalOpen, setIsModalOpen] = useState(false) // To control modal visibility

  useEffect(() => {
    let timerId: NodeJS.Timeout
    if (isActive && !isPaused && time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    }

    return () => clearInterval(timerId)
  }, [isActive, isPaused, time])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`
  }

  const handleStartPause = () => {
    setIsActive(true)
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsActive(false)
    setIsPaused(true)
    setTime(15 * 60)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-50 rounded-lg">
      <div className="text-[210px] text-white font-degular rounded-lg">
        {formatTime(time)}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleStartPause}
          className={`px-10 py-2 text-[20px] font-semibold rounded-2xl text-white ${
            isPaused
              ? "bg-[#7432ff] hover:bg-[#5517d9] hover:text-white"
              : "bg-[#7432ff] hover:bg-[#5517d9] hover:text-white"
          } focus:outline-none`}
        >
          {isPaused ? "Start" : "Pause"}
        </button>
        <div
          onClick={handleReset}
          className="focus:outline-none cursor-pointer"
        >
          <MdOutlineRefresh size={30} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default Timer
