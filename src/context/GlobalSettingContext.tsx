"use client"

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
  setting: {
    background: string
  }
  setBackground: (value: string) => void
}

const defaultSetting: Setting = {
  setting: { background: "/images/background/bg-1.jpg" },
  setBackground: () => {}
}

const GlobalSettingContext = createContext<Setting>(defaultSetting)

export const GlobalSettingProvider = ({ children }: Props) => {
  const [globalSetting, setGlobalSetting] = useState<Setting>(defaultSetting)

  const setBackground = (value: string) =>
    setGlobalSetting({ ...globalSetting, setting: { background: value } })

  return (
    <GlobalSettingContext.Provider value={{ ...globalSetting, setBackground }}>
      {children}
    </GlobalSettingContext.Provider>
  )
}

export const useGlobalSetting = () => useContext(GlobalSettingContext)
