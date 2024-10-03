import React from "react"

type Props = {}

function Sidebar({}: Props) {
  return (
    <div className="flex justify-end mt-[82px]">
      <div
        onClick={() => setNav(!nav)}
        className="fixed bottom-5 right-5 p-1 px-2 rounded-md bg-[#2e2446] text-white hover:bg-[#7432ff] cursor-pointer"
      >
        {nav ? (
          <IoMdClose size={30} className="mt-[2px]" />
        ) : (
          <IoSettingsSharp size={30} className="mt-[2px]" />
        )}
      </div>

      <div
        className={clsxm(
          "fixed top-0 right-0 w-[949px] bg-black h-full transform transition-transform duration-300 ease-in-out z-50",
          nav ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="relative pt-16 px-6">
          {nav && (
            <div
              onClick={() => setNav(false)}
              className="absolute top-2 left-2 p-1 rounded-full bg-[#2e2446] text-white cursor-pointer hover:bg-[#7432ff]"
            >
              <IoMdClose size={25} />
            </div>
          )}
          <div className="flex gap-6">
            <div className="w-[300px]">
              <div
                className={`p-2 mb-1 ${
                  activeFilter2 === "focus-theme"
                    ? "bg-[#343434] text-white font-semibold rounded-md"
                    : " text-white font-semibold hover:bg-[#343434] rounded-md"
                }`}
                onClick={() => handleFilterClick2("focus-theme")}
              >
                <p className="text-[14px] flex items-center gap-3">
                  <RiFocusFill size={20} />
                  Focus Theme
                </p>
              </div>
              <div
                className={`p-2 mb-2 ${
                  activeFilter2 === "focus-task"
                    ? "bg-[#343434] text-white font-semibold rounded-md"
                    : " text-white font-semibold hover:bg-[#343434] rounded-md"
                }`}
                onClick={() => handleFilterClick2("focus-task")}
              >
                <p className="text-[14px] flex items-center gap-3">
                  <RiTimerFill size={20} />
                  Focus task
                </p>
              </div>
              <div
                className={`p-2 mb-2 ${
                  activeFilter2 === "sounds"
                    ? "bg-[#343434] text-white font-semibold rounded-md"
                    : " text-white font-semibold hover:bg-[#343434] rounded-md"
                }`}
                onClick={() => handleFilterClick2("sounds")}
              >
                <p className="text-[14px] flex items-center gap-3">
                  <FaCloudShowersHeavy size={20} />
                  Sounds
                </p>
              </div>
            </div>

            <div className="h-64 w-[1px] bg-gray-700"></div>
            <div className="w-full h-[calc(100vh-6rem)] overflow-auto mb-10">
              <div className="">
                {activeFilter2 === "focus-theme" && (
                  <div className="">
                    <p className="text-[32px] font-semibold text-white mb-3">
                      Focus Theme
                    </p>
                    <p className="text-[16px] mb-5 text-[#a0a0a0]">
                      Pick your theme to appear in Home. To see a live preview,
                      ensure your dashboard toggle is set to Home, then come
                      back to this Settings tab.
                    </p>
                    <p className="text-[24px] font-semibold mb-5 text-white">
                      Gradients & Colors
                    </p>
                    <div className="grid grid-cols-3 gap-3 w-[550px] mb-10">
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-1.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage: "url(/images/background/bg-1.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-2.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage: "url(/images/background/bg-2.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-3.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage: "url(/images/background/bg-3.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-4.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage: "url(/images/background/bg-4.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>

                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-5.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage: "url(/images/background/bg-5.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-6.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage: "url(/images/background/bg-6.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-7.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage: "url(/images/background/bg-7.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-8.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage: "url(/images/background/bg-8.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-9.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage: "url(/images/background/bg-9.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-10.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage:
                              "url(/images/background/bg-10.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-11.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage:
                              "url(/images/background/bg-11.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-12.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage:
                              "url(/images/background/bg-12.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>

                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-13.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage:
                              "url(/images/background/bg-13.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-14.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage:
                              "url(/images/background/bg-14.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-15.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage:
                              "url(/images/background/bg-15.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-16.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage:
                              "url(/images/background/bg-16.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-17.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage:
                              "url(/images/background/bg-17.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                      <div>
                        <div
                          onClick={() =>
                            handleBgChange("/images/background/bg-18.jpg")
                          }
                          className="w-50 h-32 border rounded"
                          style={{
                            backgroundImage:
                              "url(/images/background/bg-18.jpg)",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <p className="text-center text-[16px] font-semibold text-white">
                          ok
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeFilter2 === "focus-task" && (
                  <div className="">
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
                              type="text"
                              placeholder="25"
                              className="pl-2 p-2 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold"
                              value={focusTime}
                              onChange={(e) => setFocusTime(e.target.value)}
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
                              type="text"
                              placeholder="5"
                              className="pl-2 p-2 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold"
                              value={shortBreakTime}
                              onChange={(e) =>
                                setShortBreakTime(e.target.value)
                              }
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
                              className="pl-2 p-2 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold"
                              value={longBreakTime}
                              onChange={(e) => setLongBreakTime(e.target.value)}
                            />
                            <p className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold text-[14px]">
                              Mins
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handleSave}
                        className="p-2 py-3 px-6 bg-[#7432ff] hover:bg-[#5517d9] text-white rounded-xl text-[18px] font-semibold mb-6"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
                {activeFilter2 === "sounds" && (
                  <div className="">
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
                          onChange={(e) => {
                            if (soundInstance) {
                              soundInstance.volume(parseFloat(e.target.value))
                            }
                          }}
                        />
                      </div>
                      <button
                        className="p-2 py-3 px-6 bg-[#7432ff] hover:bg-[#5517d9] text-white rounded-xl text-[18px] font-semibold mb-6"
                        onClick={handlePlayPause}
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </button>
                      <div className="">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedSound === "nilaiClock"}
                            onChange={() => setSelectedSound("nilaiClock")}
                            className="items-end justify-end mr-2"
                          />
                          <span className="text-[18px]">☔️</span>
                          <p className="text-[18px] font-semibold text-white">
                            Rain
                          </p>
                        </label>
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedSound === "nilaiBuzzer"}
                            onChange={() => setSelectedSound("nilaiBuzzer")}
                            className="items-end justify-end mr-2"
                          />
                          <span className="text-[18px]">🌊</span>
                          <p className="text-[18px] font-semibold text-white">
                            Buzzer
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
