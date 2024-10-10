"use client"

import { soundData, SoundType } from "@/data/soundData"
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from "react"

type Props = {
  children: ReactNode
}

interface Setting {
  background: string
  timerOption: {
    pomodoro: number
    short: number
    long: number
  }
  sound: SoundType

  setBackground: (value: string) => void
  setTimerOption: (value: {
    pomodoro: number
    short: number
    long: number
  }) => void
  setSound: (value: SoundType) => void
}

const defaultSetting: Setting = {
  background: "/images/background/bg-1.jpg",
  timerOption: {
    pomodoro: 25,
    short: 5,
    long: 15
  },
  sound: soundData[0],

  setBackground: () => {},
  setTimerOption: () => {},
  setSound: () => {}
}

const GlobalSettingContext = createContext<Setting>(defaultSetting)

export const GlobalSettingProvider = ({ children }: Props) => {
  const [globalSetting, setGlobalSetting] = useState<Setting>(defaultSetting)

  const setBackground = (value: string) =>
    setGlobalSetting({ ...globalSetting, background: value })

  const setTimerOption = (value: {
    pomodoro: number
    short: number
    long: number
  }) =>
    setGlobalSetting({
      ...globalSetting,
      timerOption: value
    })

  const setSound = (value: SoundType) => {
    setGlobalSetting({ ...globalSetting, sound: value })
  }

  return (
    <GlobalSettingContext.Provider
      value={{ ...globalSetting, setBackground, setTimerOption, setSound }}
    >
      {children}
    </GlobalSettingContext.Provider>
  )
}

export const useGlobalSetting = () => useContext(GlobalSettingContext)
