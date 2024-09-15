"use client"

import react from "react"
import Navbar from "@/components/Navbar"
import FilterCategory2 from "@/components/FilterCategory2"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Pomodoro Timer",
    url: "https://pomodorotomato.com/"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative">
        <div className=" bg-opacity-[96%] w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="w-full bg-transparent rounded-3xl flex flex-col items-center">
              <FilterCategory2 />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
