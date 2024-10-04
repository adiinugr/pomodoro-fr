import React from "react"
import Image from "next/image"

// ** Third Party
import {
  IoClose,
  IoImageOutline,
  IoTimeOutline,
  IoVolumeHighOutline
} from "react-icons/io5"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"

// ** Context
import { useSidebar } from "@/context/SidebarContext"
import { useGlobalSetting } from "@/context/GlobalSettingContext"

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
  const { setBackground } = useGlobalSetting()

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
        <TabList className="flex flex-col items-start gap-3 w-56 text-sm">
          <Tab className="flex items-center gap-2 w-full p-2 rounded-md data-[selected]:bg-[#343434] hover:bg-[#343434]">
            <IoImageOutline size={20} />
            Focus Theme
          </Tab>
          <Tab className="flex items-center gap-2 w-full p-2 rounded-md data-[selected]:bg-[#343434] hover:bg-[#343434]">
            <IoTimeOutline size={20} />
            Focus Timer
          </Tab>
          <Tab className="flex items-center gap-2 w-full p-2 rounded-md data-[selected]:bg-[#343434] hover:bg-[#343434]">
            <IoVolumeHighOutline size={20} />
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
                <div
                  onClick={() => setBackground(bg.bgUrl)}
                  key={bg.id}
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
              ))}
            </div>
          </TabPanel>
          <TabPanel className="overflow-auto h-full"></TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

export default Sidebar
