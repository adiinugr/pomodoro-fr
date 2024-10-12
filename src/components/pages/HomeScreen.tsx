"use client"

import React, { useState, useEffect } from "react"

// ** Third Party
import { MdTimer } from "react-icons/md"
import { GiTomato } from "react-icons/gi"
import { IoIosRefresh, IoMdCreate, IoMdTrash } from "react-icons/io"
import { IoSettings } from "react-icons/io5"
import { FaPlus } from "react-icons/fa"

// ** Components
import Timer from "@/components/timer/Timer"

// ** Context
import { useTimerSetting } from "@/context/TimerSettingContext"

// ** Hooks
import useLocalStorage from "@/hooks/useLocalStorage"

import EditTask from "@/components/task/EditTask"
import AddTask from "@/components/task/AddTask"
import Sidebar from "@/components/sidebar/Sidebar"
import { useSidebar } from "@/context/SidebarContext"
import Image from "next/image"
import { useGlobalSetting } from "@/context/GlobalSettingContext"

const PlayPauseButton = ({
  stopwatchState,
  handlePlay,
  handlePause
}: {
  stopwatchState: string
  handlePlay: () => void
  handlePause: () => void
}) => {
  if (stopwatchState === "play") {
    return (
      <button
        onClick={handlePause}
        className={`h-full px-7 text-[20px] font-semibold rounded-xl text-white bg-[#756f67] hover:bg-[#b24040] focus:outline-none`}
      >
        Pause
      </button>
    )
  }

  return (
    <button
      onClick={handlePlay}
      className={`h-full px-7 text-[20px] font-semibold rounded-xl text-white bg-[#756f67] hover:bg-[#b24040] focus:outline-none`}
    >
      Start
    </button>
  )
}

const HomeScreen: React.FC = () => {
  const { timerSetting, setTimerSetting } = useTimerSetting()
  const { setIsOpenSidebar } = useSidebar()
  const { background, timerOption, sound } = useGlobalSetting()

  const [activeFilter, setActiveFilter] = useState<string>("pomodoro")

  const [stopwatchState, setStopWatchState] = useState<string>("stop")
  const [currentTime, setCurrentTime] = useState<number>(timerSetting.value)
  const [resetState, setResetState] = useState({ status: "", type: "" })

  const [repeatTime, setRepeatTime] = useState<number>(0)
  const [value, setValue] = useLocalStorage("task", "")
  const [task, setTask] = useState([])

  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false)
  const [openUpdateTaskModal, setOpenUpdateTaskModal] = useState<boolean>(false)
  const [updateSelectedId, setUpdateSelectedId] = useState("")

  useEffect(() => {
    setTask(value)
  }, [value])

  const handleSave = () => {
    setTimerSetting({
      ...timerSetting,
      pomodoro: {
        ...taskType.pomodoro,
        value: timerOption.pomodoro
      },
      short: {
        ...taskType.short,
        value: timerOption.short
      },
      long: {
        ...taskType.long,
        value: timerOption.short
      }
    })
    handleSelectTimeType(activeFilter) // Apply changes immediately to the selected task type
  }

  useEffect(() => {
    handleSave()
  }, [timerOption.long, timerOption.pomodoro, timerOption.short])

  const taskType = {
    pomodoro: {
      timeType: "minute",
      value: timerOption.pomodoro,
      sound: sound.soundPath,
      color: "#F25D52"
    },
    short: {
      timeType: "minute",
      value: timerOption.short,
      sound: sound.soundPath,
      color: "#7684ff"
    },
    long: {
      timeType: "minute",
      value: timerOption.long,
      sound: sound.soundPath,
      color: "#3d3d3d"
    }
  }

  const handlePlay = () => {
    setStopWatchState("play")
    setResetState({ ...resetState, status: "no-reset" })
  }

  const handlePause = () => {
    setResetState({ ...resetState, status: "no-reset" })
    setStopWatchState("pause")
  }

  const handleReset = (type: string) => {
    setStopWatchState("stop")
    if (type === "pomodoro") {
      setResetState({
        status: "reset",
        type: "pomodoro"
      })
      return
    }
    if (type === "short") {
      setTimerSetting(taskType.short)
      setResetState({
        status: "reset",
        type: "short"
      })
      return
    }
    if (type === "long") {
      setTimerSetting(taskType.long)
      setResetState({
        status: "reset",
        type: "long"
      })
      return
    }

    return
  }

  const handleSelectTimeType = (type: string) => {
    if (type === "pomodoro") {
      setActiveFilter("pomodoro")
      setStopWatchState("stop")
      setResetState({ ...resetState, status: "no-reset" })
      setTimerSetting(taskType.pomodoro)
      return
    }

    if (type === "short") {
      setActiveFilter("short")
      setStopWatchState("stop")
      setResetState({ ...resetState, status: "no-reset" })
      setTimerSetting(taskType.short)
      return
    }

    if (type === "long") {
      setActiveFilter("long")
      setStopWatchState("stop")
      setResetState({ ...resetState, status: "no-reset" })
      setTimerSetting(taskType.long)
      return
    }

    return
  }

  const handleDeleteTask = (id: any) => {
    const filteredData = value.filter((val: { id: any }) => val.id !== id)
    setValue(filteredData)
  }

  const handleUpdateTask = (id: any) => {
    setUpdateSelectedId(id)
    setOpenUpdateTaskModal(true)
  }

  return (
    <div className="w-full h-screen p-6 py-10 md:py-10 isolate">
      <Image
        src={background}
        fill
        alt="background"
        className="absolute object-cover z-[-1]"
      />

      <div className="w-full">
        <div>
          <div>
            <Timer
              timerSetting={timerSetting}
              setTimerSetting={setTimerSetting}
              stopwatchState={stopwatchState}
              currentTime={currentTime}
              setStopWatchState={setStopWatchState}
              resetState={resetState}
              repeatTime={repeatTime}
              setRepeatTime={setRepeatTime}
            />{" "}
          </div>

          <div className="flex justify-center mt-10">
            <div className="bg-[#2e2446] rounded-full flex items-center gap-2 p-2">
              {[1, 2, 3, 4].map((item, index) => (
                <GiTomato
                  key={item}
                  size={25}
                  className={`${
                    repeatTime > index ? "text-[#ff5c5c]" : "text-[#fff3e2]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="p-1 md:p-2 flex justify-center py-2">
          <div className="p-2 flex justify-center rounded-md gap-2">
            <button
              onClick={() => handleSelectTimeType("pomodoro")}
              className={`p-3 py-4 px-5 cursor-pointer ${
                activeFilter === "pomodoro"
                  ? "bg-[#ff5c5c] text-[#fff3e2] font-semibold rounded-md border-2 border-[#fff3e2]"
                  : "text-[#ff5c5c] bg-white border-2 border-[#fff3e2] font-semibold rounded-md"
              }`}
            >
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-md">Focus</p>
                </div>
                <div className="flex items-center gap-10">
                  <MdTimer size={25} />
                  <div className="flex items-center gap-2">
                    <p
                      className={`text-[25px] ${
                        activeFilter === "pomodoro"
                          ? "text-[#fff3e2]"
                          : "text-black"
                      }`}
                    >
                      {taskType.pomodoro.value}
                    </p>
                    <span
                      className={`text-md ${
                        activeFilter === "pomodoro"
                          ? "text-[#fff3e2]"
                          : "text-black"
                      }`}
                    >
                      {taskType.pomodoro.timeType}
                    </span>
                  </div>
                </div>
              </div>
            </button>
            <button
              onClick={() => handleSelectTimeType("short")}
              className={`p-3 py-4 px-5 cursor-pointer ${
                activeFilter === "short"
                  ? "bg-[#7684ff] text-[#fff3e2] font-semibold rounded-md border-2 border-[#fff3e2]"
                  : "text-[#7684ff] bg-white border-2 border-[#fff3e2] font-semibold rounded-md"
              }`}
            >
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-md">Short Break</p>
                </div>
                <div className="flex items-center gap-10">
                  <MdTimer size={25} />
                  <div className="flex items-center gap-2">
                    <p
                      className={`text-[25px] ${
                        activeFilter === "short"
                          ? "text-[#fff3e2]"
                          : "text-black"
                      }`}
                    >
                      {taskType.short.value}
                    </p>
                    <span
                      className={`text-md ${
                        activeFilter === "short"
                          ? "text-[#fff3e2]"
                          : "text-black"
                      }`}
                    >
                      {taskType.short.timeType}
                    </span>
                  </div>
                </div>
              </div>
            </button>
            <button
              onClick={() => handleSelectTimeType("long")}
              className={`p-3 py-4 px-5 cursor-pointer ${
                activeFilter === "long"
                  ? "bg-[#3d3d3d] text-[#fff3e2] font-semibold rounded-md border-2 border-[#fff3e2]"
                  : "text-[#3d3d3d] bg-white border-2 border-[#fff3e2] font-semibold rounded-md"
              }`}
            >
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-md">Long Break</p>
                </div>
                <div className="flex items-center gap-10">
                  <MdTimer size={25} />
                  <div className="flex items-center gap-2">
                    <p
                      className={`text-[25px] ${
                        activeFilter === "long"
                          ? "text-[#fff3e2]"
                          : "text-black"
                      }`}
                    >
                      {taskType.long.value}
                    </p>
                    <span
                      className={`text-md ${
                        activeFilter === "long"
                          ? "text-[#fff3e2]"
                          : "text-black"
                      }`}
                    >
                      {taskType.long.timeType}
                    </span>
                  </div>
                </div>
              </div>
            </button>
            <div className="h-full flex gap-6 items-center justify-center">
              <PlayPauseButton
                stopwatchState={stopwatchState}
                handlePlay={handlePlay}
                handlePause={handlePause}
              />
              <button
                onClick={() => handleReset(activeFilter)}
                className="grid place-content-center text-white"
              >
                <IoIosRefresh size={34} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddTask
        closeModal={() => setOpenAddTaskModal(false)}
        isOpen={openAddTaskModal}
      />

      <EditTask
        isOpen={openUpdateTaskModal}
        closeModal={() => setOpenUpdateTaskModal(false)}
        id={updateSelectedId}
      />

      <div className="mt-10 max-w-3xl mx-auto p">
        <p className="text-2xl font-semibold text-white mb-2">Task</p>
        <hr className="text-white" />

        <div className="mt-4 grid grid-cols-1 gap-2">
          {task.length > 0
            ? value.map((task: { id: string; title: string }) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between text-lg bg-gray-200 px-5 py-3 border-l-[6px] border-l-gray-900"
                >
                  <p>{task.title}</p>

                  <div>
                    <button
                      onClick={() => handleUpdateTask(task.id)}
                      className="text-tm-violet rounded-full p-2"
                    >
                      <IoMdCreate size={22} />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="text-tm-red rounded-full p-2"
                    >
                      <IoMdTrash size={22} />
                    </button>
                  </div>
                </div>
              ))
            : null}
        </div>
        <button
          onClick={() => setOpenAddTaskModal(true)}
          className="w-full bg-white/20 hover:bg-white/35 mt-6 p-4 border-2 border-dashed border-white/35 rounded-xl"
        >
          <div className="mx-auto text-white font-medium flex items-center justify-center gap-2">
            <FaPlus size={16} /> Add Task
          </div>
        </button>
      </div>

      <Sidebar />

      <button
        onClick={() => setIsOpenSidebar(true)}
        className="fixed bottom-10 right-10 text-white hover:text-gray-200 text-4xl"
      >
        <IoSettings />
      </button>
    </div>
  )
}

export default HomeScreen
