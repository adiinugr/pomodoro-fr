"use client"

import { ReactNode, createContext, useContext, useState } from "react"

const TimerSettingContext = createContext<any>({} as any)

type Props = {
  children: ReactNode
}

interface Timer {
  timeType: string
  value: number
  sound: string
  color: string
}

export const TimerSettingProvider = ({ children }: Props) => {
  const [timerSetting, setTimerSetting] = useState<Timer>({
    timeType: "minute",
    value: 25,
    sound: "/sound/case-closed.mp3",
    color: "#F25D52"
  })

  return (
    <TimerSettingContext.Provider value={{ timerSetting, setTimerSetting }}>
      {children}
    </TimerSettingContext.Provider>
  )
}

export const useTimerSetting = () => useContext(TimerSettingContext)
