import React from "react"
import Image from "next/image"

// ** Third Party
import {
  IoClose,
  IoImageOutline,
  IoTimeOutline,
  IoVolumeHighOutline
} from "react-icons/io5"
import {
  Field,
  Label,
  Radio,
  RadioGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from "@headlessui/react"

// ** Context
import { useSidebar } from "@/context/SidebarContext"
import { useGlobalSetting } from "@/context/GlobalSettingContext"
import { RiFocusFill, RiTimerFill } from "react-icons/ri"
import { FaCloudShowersHeavy } from "react-icons/fa6"
import { soundData } from "@/data/soundData"

const backgroundData = [
  {
    id: 1,
    bgUrl: "/images/background/bg-1.jpg",
    alt: "Background 1"
  },
  {
    id: 2,
    bgUrl: "/images/background/bg-2.jpg",
    alt: "Background 2"
  },
  {
    id: 3,
    bgUrl: "/images/background/bg-3.jpg",
    alt: "Background 3"
  },
  {
    id: 4,
    bgUrl: "/images/background/bg-4.jpg",
    alt: "Background 4"
  },
  {
    id: 5,
    bgUrl: "/images/background/bg-5.jpg",
    alt: "Background 5"
  },
  {
    id: 6,
    bgUrl: "/images/background/bg-6.jpg",
    alt: "Background 6"
  },
  {
    id: 7,
    bgUrl: "/images/background/bg-7.jpg",
    alt: "Background 7"
  },

  {
    id: 8,
    bgUrl: "/images/background/bg-8.jpg",
    alt: "Background 8"
  },
  {
    id: 9,
    bgUrl: "/images/background/bg-9.jpg",
    alt: "Background 9"
  },
  {
    id: 10,
    bgUrl: "/images/background/bg-10.jpg",
    alt: "Background 10"
  },
  {
    id: 11,
    bgUrl: "/images/background/bg-11.jpg",
    alt: "Background 11"
  },
  {
    id: 12,
    bgUrl: "/images/background/bg-12.jpg",
    alt: "Background 12"
  },
  {
    id: 13,
    bgUrl: "/images/background/bg-13.jpg",
    alt: "Background 13"
  },
  {
    id: 14,
    bgUrl: "/images/background/bg-14.jpg",
    alt: "Background 14"
  },
  {
    id: 15,
    bgUrl: "/images/background/bg-15.jpg",
    alt: "Background 15"
  },
  {
    id: 16,
    bgUrl: "/images/background/bg-16.jpg",
    alt: "Background 16"
  },
  {
    id: 17,
    bgUrl: "/images/background/bg-17.jpg",
    alt: "Background 17"
  },
  {
    id: 18,
    bgUrl: "/images/background/bg-18.jpg",
    alt: "Background 18"
  }
]

type Props = {}

function Sidebar({}: Props) {
  const { isOpenSidebar, setIsOpenSidebar } = useSidebar()
  const { timerOption, sound, setBackground, setTimerOption, setSound } =
    useGlobalSetting()

  const handleChangeTimerOption = (e: {
    target: { value: any; name: any }
  }) => {
    const value = e.target.value
    const updateTimer = { ...timerOption, [e.target.name]: value ? value : 0 }

    setTimerOption(updateTimer)
  }

  return (
    <div
      className={`absolute top-0 ${
        isOpenSidebar ? "right-0" : "-right-full"
      }  h-full w-[800px] bg-black p-6 pb-14 z-10 transition-all`}
    >
      <button
        onClick={() => setIsOpenSidebar(false)}
        className="bg-[#343434] p-2 rounded-full text-3xl text-white"
      >
        <IoClose size={22} />
      </button>

      <TabGroup className="mt-10 flex text-white gap-4 h-full">
        <TabList className="flex flex-col items-start gap-2 w-56 text-sm ">
          <Tab className="flex items-center gap-2 w-full p-2 rounded-md data-[selected]:bg-[#343434] hover:bg-[#343434] font-semibold">
            <RiFocusFill size={20} />
            Focus Theme
          </Tab>
          <Tab className="flex items-center gap-2 w-full p-2 rounded-md data-[selected]:bg-[#343434] hover:bg-[#343434] font-semibold">
            <RiTimerFill size={20} />
            Focus Timer
          </Tab>
          <Tab className="flex items-center gap-2 w-full p-2 rounded-md data-[selected]:bg-[#343434] hover:bg-[#343434] font-semibold">
            <FaCloudShowersHeavy size={20} />
            Sound
          </Tab>
        </TabList>
        <TabPanels className="h-full border-l-[1px] border-l-gray-500 w-full p-6 pr-12 pb-10 overflow-auto">
          <TabPanel>
            <div>
              <p className="text-[32px] font-semibold text-white mb-3">
                Focus Theme
              </p>
              <p className="text-[16px] mb-5 text-[#a0a0a0]">
                Pick your theme to appear in Home. To see a live preview, ensure
                your dashboard toggle is set to Home, then come back to this
                Settings tab.
              </p>
              <p className="text-[24px] font-semibold mb-5 text-white">
                Gradients & Colors
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {backgroundData.map((bg) => (
                <div key={bg.id}>
                  <div
                    onClick={() => setBackground(bg.bgUrl)}
                    className="relative aspect-video border border-white rounded-md overflow-hidden cursor-pointer"
                  >
                    <Image
                      fill
                      loading="lazy"
                      sizes="(min-width: 808px) 20vw, 50vw"
                      src={bg.bgUrl}
                      alt={bg.alt}
                    />
                  </div>
                  <p className="text-center mt-2 text-xs text-white">
                    {bg.alt}
                  </p>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <p className="text-[32px] font-semibold text-white mb-5">
                Focus task
              </p>
              <p className="text-[18px] font-semibold text-white mb-3">
                Select task mode
              </p>
              <div className="grid grid-cols-4 gap-4 w-[550px] mb-10">
                <div className="">
                  <p className="text-[18px] font-semibold text-white mb-2 text-center">
                    Focus
                  </p>
                  <div className="relative ml-1">
                    <input
                      type="number"
                      placeholder="25"
                      name="pomodoro"
                      className="pl-2 p-2 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold"
                      value={timerOption.pomodoro}
                      onChange={handleChangeTimerOption}
                    />
                    <p className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold text-[14px]">
                      Mins
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-[18px] font-semibold text-white mb-2 text-center">
                    Short Break
                  </p>
                  <div className="relative ml-1">
                    <input
                      type="number"
                      placeholder="5"
                      name="short"
                      className="pl-2 p-2 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold"
                      value={timerOption.short}
                      onChange={handleChangeTimerOption}
                    />
                    <p className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold text-[14px]">
                      Mins
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-[18px] font-semibold text-white mb-2 text-center">
                    Long Break
                  </p>
                  <div className="relative ml-1">
                    <input
                      type="text"
                      placeholder="15"
                      name="long"
                      className="pl-2 p-2 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold"
                      value={timerOption.long}
                      onChange={handleChangeTimerOption}
                    />
                    <p className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold text-[14px]">
                      Mins
                    </p>
                  </div>
                </div>
              </div>
              <button
                // onClick={handleSave}
                className="p-2 py-3 px-6 bg-[#ffbe18] hover:bg-[#f1c145] text-[#201f2a] rounded-xl text-[18px] font-semibold mb-6"
              >
                Save
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <p className="text-[32px] font-semibold text-white mb-5">
                Sounds
              </p>
              <div>
                <input
                  type="range"
                  className="w-[200px] mb-8"
                  min="0"
                  max="1"
                  step="0.05"
                  id="alertVolume"
                  name="alertVolume"
                  // onChange={(e) => {
                  //   if (soundInstance) {
                  //     soundInstance.volume(parseFloat(e.target.value))
                  //   }
                  // }}
                />
              </div>
              <button
                className="p-2 py-3 px-6 bg-[#ffbe18] hover:bg-[#f1c145] text-[#201f2a] rounded-xl text-[18px] font-semibold mb-6"
                // onClick={handlePlayPause}
              >
                {/* {isPlaying ? "Pause" : "Play"} */}
              </button>

              <RadioGroup
                value={sound}
                onChange={setSound}
                aria-label="Server size"
              >
                {soundData.map((sound) => (
                  <Field key={sound.id} className="flex items-center gap-2">
                    <Radio
                      value={sound}
                      className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
                    >
                      <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                    </Radio>
                    <Label className="flex items-center justify-center gap-2">
                      <span className="text-[18px]">{sound.icon}</span>
                      <p className="text-[18px] font-semibold text-white">
                        {sound.title}
                      </p>
                    </Label>
                  </Field>
                ))}
              </RadioGroup>

              {/* Premium Sound */}
              <div className="flex items-center gap-2 mb-6">
                <p className="text-[24px] font-semibold text-white">
                  More Sounds
                </p>
                <Image
                  src={"/images/plus.svg"}
                  className="rounded-lg"
                  width={60}
                  height={100}
                  alt=""
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🚃</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Commuter Train
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">☕️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Street Café
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">📚</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Japanese Library
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🚕</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    NYC Morning
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">☔️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Light Rain
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🌧️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Heavy Rain
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">⛈️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Thunderstorm
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🧺</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Countryside Morning
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🪵</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Campfire
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">❄️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Air Conditioner
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🦗</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Summer Night
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🏢</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Office
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">⛲️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Central Park
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🧠</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    White Noise
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🧠</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Pink Noise
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🧠</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Brown Noise
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🌬️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Wind
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🛄</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Airport Terminal
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🤿</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Underwater
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🐡</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Deep Sea
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🐦</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Birds in the Woods
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">⛺️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Light Rain on Tent
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">⌨️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Laptop Keyboard
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🐋</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Whales
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🍴</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Home Kitchen
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🎳</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Bowling Alley
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">📀</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Record Player Static
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🪐</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Outer Space Rumble
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🕰️</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Clock Ticking
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-4 mb-10">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className=" text-white" disabled />
                  <span className="text-[18px] text-[#505050]">🐈</span>
                  <p className="text-[18px] font-semibold text-[#808080]">
                    Cat Purr
                  </p>
                </label>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

export default Sidebar
