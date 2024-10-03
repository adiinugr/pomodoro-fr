import { useSidebar } from "@/context/SidebarContext"
import React from "react"

// ** Third Party
import { IoClose, IoSettings } from "react-icons/io5"

type Props = {}

function Sidebar({}: Props) {
  const { isOpenSidebar, setIsOpenSidebar } = useSidebar()

  return (
    <div>
      <div
        className={`absolute top-0 ${
          isOpenSidebar ? "right-0" : "-right-full"
        } right-0 h-full w-[800px] bg-gray-800 p-6 z-10 transition-all`}
      >
        <button
          onClick={() => setIsOpenSidebar(false)}
          className="text-3xl text-white"
        >
          <IoClose />
        </button>
      </div>

      <button
        onClick={() => setIsOpenSidebar(true)}
        className="fixed bottom-10 right-10 text-white hover:text-gray-200 text-4xl"
      >
        <IoSettings />
      </button>
    </div>
  )
}

export default Sidebar
