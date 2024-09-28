"use client"

import React, { useEffect, useState } from "react"
import Pie from "./Pie"

type Props = {
  timerSetting: any
  setTimerSetting: (value: any) => void
  repeatTime: number
  setRepeatTime: (value: number) => void
  currentTime: number
  stopwatchState: string
  setStopWatchState: (value: string) => void
  resetState: {
    status: string
    type: string
  }
}

const Timer = ({
  stopwatchState,
  timerSetting,
  repeatTime,
  setRepeatTime,
  setTimerSetting,
  setStopWatchState,
  resetState
}: Props) => {
  const [isMinutes, setIsMinutes] = useState<boolean>(
    timerSetting.timeType === "minute"
  )

  const [currentTime, setCurrentTime] = useState<number>(timerSetting.value)

  const secondValue = isMinutes ? timerSetting.value * 60 : timerSetting.value

  const [currentSecondValue, setCurrentSecondValue] = useState(secondValue)

  const divisorForMinutes = currentSecondValue % (60 * 60)
  const minutes = Math.floor(divisorForMinutes / 60)

  const divisorForSeconds = divisorForMinutes % 60
  const seconds = Math.ceil(divisorForSeconds)

  useEffect(() => {
    if (stopwatchState === "play" && currentTime > 0) {
      const interval = setInterval(() => {
        setCurrentSecondValue(currentSecondValue - 1)
      }, 1000)
      return () => clearInterval(interval)
    }

    if (currentTime === 0) {
      setStopWatchState("stop")

      if (repeatTime < 4) {
        setRepeatTime(repeatTime + 1)
      } else {
        setRepeatTime(0)
      }
    }
  }, [
    currentSecondValue,
    currentTime,
    repeatTime,
    setRepeatTime,
    setStopWatchState,
    stopwatchState
  ])

  useEffect(() => {
    setCurrentSecondValue(secondValue)
  }, [secondValue])

  useEffect(() => {
    setCurrentTime(timerSetting.value)
    setIsMinutes(timerSetting.timeType === "minute")
  }, [timerSetting.timeType, timerSetting.value])

  const setTime = (val: number) => {
    setTimerSetting({
      timeType: isMinutes ? "minute" : "second",
      value: val,
      sound: timerSetting.sound,
      color: timerSetting.color
    })
  }

  useEffect(() => {
    if (resetState.status == "reset" && resetState.type == "short") {
      setCurrentSecondValue(5 * 60)
    }

    if (resetState.status == "reset") {
      if (resetState.type == "pomodoro") {
        setCurrentSecondValue(25 * 60)
      } else if (resetState.type == "short") {
        setCurrentSecondValue(5 * 60)
      } else if (resetState.type == "long") {
        setCurrentSecondValue(15 * 60)
      }
    }
  }, [resetState.status, resetState.type])

  const [isOpenModal, setisOpenModal] = useState<boolean>(false)
  const [description, setDescription] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="">
          <p className="text-[35px] text-white font-semibold">
            Pomodorotimer.fr
          </p>
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
      <div className="flex justify-center">
        <div className="w-[340px] aspect-square flex flex-col items-center justify-center isolate">
          <div className="clock z-[-1] text-white">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="number-hours">
                <span style={{ transform: `rotate(calc(${(i + 1) * 30}deg))` }}>
                  <p style={{ transform: `rotate(calc(${(i + 1) * -30}deg))` }}>
                    {(i + 1) * 5}
                  </p>
                </span>
              </div>
            ))}
            <div className="diallines">
              {Array.from({ length: 60 }).map((_, i) => (
                <span
                  key={i}
                  style={{ transform: `rotate(calc(${(i + 1) * 6}deg))` }}
                >
                  <p></p>
                </span>
              ))}
            </div>

            <div className="circle">
              <span>
                <Pie
                  time={timerSetting.value}
                  setTime={setTime}
                  currentTime={currentTime}
                  setCurrentTime={setCurrentTime}
                  secondValue={secondValue}
                  setCurrentSecondValue={setCurrentSecondValue}
                  stopwatchState={stopwatchState}
                  setStopWatchState={setStopWatchState}
                  isMinutes={isMinutes}
                  color={timerSetting.color}
                />
              </span>
            </div>
            <div className="bg-white/80 px-4 py-2 font-semibold text-4xl text-gray-600 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span>{minutes}</span>:<span>{seconds}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timer
