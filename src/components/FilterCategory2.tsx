"use client"
import React, { useState, useEffect } from "react"
import { MdTimer } from "react-icons/md"
import { GiTomato } from "react-icons/gi"
import Timer from "@/components/Timer"
import { useTimerSetting } from "@/context/TimerSettingContext"
import { IoIosRefresh } from "react-icons/io"
import { RiFocusFill, RiTimerFill } from "react-icons/ri";
import { FaCloudShowersHeavy } from "react-icons/fa6";
import clsxm from '@/lib/clsxm';
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

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

const FilterCategory2: React.FC = () => {
  const { timerSetting, setTimerSetting } = useTimerSetting()

  const [nav, setNav] = useState(false);
  const [activeFilter2, setActiveFilter2] = useState<string>("focus-theme");

  const [activeFilter, setActiveFilter] = useState<string>("pomodoro")
  const [headerText, setHeaderText] = useState<string>("Pomodoro")
  const [time, setTime] = useState(25 * 60)

  const [stopwatchState, setStopWatchState] = useState<string>("stop")
  const [currentTime, setCurrentTime] = useState<number>(timerSetting.value)
  const [resetState, setResetState] = useState({ status: "", type: "" })

  const [focusTime, setFocusTime] = useState<string>("25");
  const [shortBreakTime, setShortBreakTime] = useState<string>("5");
  const [longBreakTime, setLongBreakTime] = useState<string>("15");
  const [selectedSound, setSelectedSound] = useState<"nilaiClock" | "nilaiBuzzer">("nilaiClock");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [soundInstance, setSoundInstance] = useState<Howl | null>(null);
  const [bgImage, setBgImage] = useState('/images/background/bg-1.jpg'); // To set the background image

 const sounds = {
    nilaiClock: "/images/alarm_clock.mp3",
    nilaiBuzzer: "/images/buzzer_alarm.mp3",
  };

  useEffect(() => {
    // Stop the current sound if the selected sound changes
    if (soundInstance) {
      soundInstance.stop();
      setSoundInstance(null);
      setIsPlaying(false);
    }
  }, [selectedSound]);

  // Update timerSetting whenever focusTime, shortBreakTime, or longBreakTime changes
  useEffect(() => {
    handleSave(); // Save the timer settings automatically when these values change
  }, [focusTime, shortBreakTime, longBreakTime]);

  const handlePlayPause = () => {
    if (isPlaying && soundInstance) {
      soundInstance.pause();
      setIsPlaying(false);
    } else {
      if (soundInstance) {
        soundInstance.play();
      } else {
        const sound = new Howl({
          src: [sounds[selectedSound]],
          autoplay: true,
          loop: true,
        });
        setSoundInstance(sound);
        sound.play();
      }
      setIsPlaying(true);
    }
  };

  const handleBgChange = (image: string) => {
    setBgImage(image);
  };
  const timerType = {
    pomodoro: {
      timeType: "minute",
      value: parseInt(focusTime),
      sound: "/sound/case-closed.mp3",
      color: "#F25D52"
    },
    short: {
      timeType: "minute",
      value: parseInt(shortBreakTime),
      sound: "/sound/case-closed.mp3",
      color: "#7684ff"
    },
    long: {
      timeType: "minute",
      value: parseInt(longBreakTime),
      sound: "/sound/case-closed.mp3",
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
      setTimerSetting(timerType.short)
      setResetState({
        status: "reset",
        type: "short"
      })
      return
    }
    if (type === "long") {
      setTimerSetting(timerType.long)
      setResetState({
        status: "reset",
        type: "long"
      })
      return
    }

    return
  }

  const handleFilterClick2 = (filter: string) => {
    setActiveFilter2(filter);
    switch (filter) {
      case "focus-theme":
        setHeaderText("Short Break");
        break;
      case "focus-timer":
        setHeaderText("Short Break");
        break;
      case "sounds":
        setHeaderText("Short Break");
        break;
      default:
        setHeaderText("focus-theme");
    }
  };

  const handleSelectTimeType = (type: string) => {
    if (type === "pomodoro") {
      setActiveFilter("pomodoro")
      setStopWatchState("stop")
      setResetState({ ...resetState, status: "no-reset" })
      setTimerSetting(timerType.pomodoro)
      return
    }

    if (type === "short") {
      setActiveFilter("short")
      setStopWatchState("stop")
      setResetState({ ...resetState, status: "no-reset" })
      setTimerSetting(timerType.short)
      return
    }

    if (type === "long") {
      setActiveFilter("long")
      setStopWatchState("stop")
      setResetState({ ...resetState, status: "no-reset" })
      setTimerSetting(timerType.long)
      return
    }

    return
  }

  const handleSave = () => {
    setTimerSetting({
      ...timerSetting,
      pomodoro: {
        ...timerType.pomodoro,
        value: parseInt(focusTime)
      },
      short: {
        ...timerType.short,
        value: parseInt(shortBreakTime)
      },
      long: {
        ...timerType.long,
        value: parseInt(longBreakTime)
      }
    });
    handleSelectTimeType(activeFilter); // Apply changes immediately to the selected timer type
  }

  return (
    <><div
        className="bg-cover bg-no-repeat bg-center w-full p-6 py-10 md:py-10"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
      <div className="w-full">
        <div className="bg-cover bg-no-repeat bg-center p-1 rounded-xl">
          <div className="">
            <div className="">
              <div className="">
                <div>
                  <Timer
                    timerSetting={timerSetting}
                    setTimerSetting={setTimerSetting}
                    stopwatchState={stopwatchState}
                    currentTime={currentTime}
                    setStopWatchState={setStopWatchState}
                    resetState={resetState}
                  />{" "}
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="bg-[#2e2446] rounded-full flex items-center gap-2 p-2">
                  <GiTomato size={25} className="text-[#fff3e2]" />
                  <GiTomato size={25} className="text-[#fff3e2]" />
                  <GiTomato size={25} className="text-[#fff3e2]" />
                  <GiTomato size={25} className="text-[#fff3e2]" />
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
                          {timerType.pomodoro.value}
                        </p>
                        <span
                          className={`text-md ${
                            activeFilter === "pomodoro"
                              ? "text-[#fff3e2]"
                              : "text-black"
                          }`}
                        >
                          {timerType.pomodoro.timeType}
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
                          {timerType.short.value}
                        </p>
                        <span
                          className={`text-md ${
                            activeFilter === "short"
                              ? "text-[#fff3e2]"
                              : "text-black"
                          }`}
                        >
                          {timerType.short.timeType}
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
                          {timerType.long.value}
                        </p>
                        <span
                          className={`text-md ${
                            activeFilter === "long"
                              ? "text-[#fff3e2]"
                              : "text-black"
                          }`}
                        >
                          {timerType.long.timeType}
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
        </div>
      </div>
      <div className="flex justify-end mt-[82px]">
      <div
        onClick={() => setNav(!nav)}
        className='p-1 px-2 rounded-md bg-[#2e2446] text-white hover:bg-[#7432ff] cursor-pointer'
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
          <div className='flex gap-6'>
          <div className='w-[300px]'>
            <div
              className={`p-2 mb-1 ${
                activeFilter2 === "focus-theme"
                  ? "bg-[#343434] text-white font-semibold rounded-md"
                  : " text-white font-semibold hover:bg-[#343434] rounded-md"
              }`}
              onClick={() => handleFilterClick2("focus-theme")}
            >
              <p className="text-[14px] flex items-center gap-3">
                <RiFocusFill size={20}/>
                Focus Theme
              </p>
            </div>
            <div
              className={`p-2 mb-2 ${
                activeFilter2 === "focus-timer"
                  ? "bg-[#343434] text-white font-semibold rounded-md"
                  : " text-white font-semibold hover:bg-[#343434] rounded-md"
              }`}
              onClick={() => handleFilterClick2("focus-timer")}
            >
              <p className="text-[14px] flex items-center gap-3">
                <RiTimerFill size={20}/>
                Focus Timer
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
                <FaCloudShowersHeavy size={20}/>
                Sounds
              </p>
            </div>
          </div>
          
          <div className="h-64 w-[1px] bg-gray-700"></div>
          <div className="w-full h-[calc(100vh-6rem)] overflow-auto mb-10">
              <div className="">
                {activeFilter2 === "focus-theme" && (
                  <div className="">
                    <p className='text-[32px] font-semibold text-white mb-3'>
                      Focus Theme
                    </p>
                    <p className='text-[16px] mb-5 text-[#a0a0a0]'>
                      Pick your theme to appear in Home. To see a live preview, ensure your dashboard toggle is set to Home, then come back to this Settings tab.
                    </p>
                    <p className='text-[24px] font-semibold mb-5 text-white'>
                      Gradients & Colors
                    </p>
                    <div className='grid grid-cols-3 gap-3 w-[550px] mb-10'>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-1.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-1.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-2.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-2.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-3.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-3.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-4.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-4.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>

                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-5.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-5.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-6.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-6.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-7.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-7.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-8.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-8.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-9.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-9.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-10.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-10.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-11.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-11.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-12.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-12.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>

                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-13.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-13.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-14.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-14.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-15.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-15.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-16.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-16.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-17.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-17.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                      <div>
                        <div onClick={() => handleBgChange('/images/background/bg-18.jpg')} className="w-50 h-32 border rounded" style={{ backgroundImage: 'url(/images/background/bg-18.jpg)', backgroundSize: 'cover' }}></div>
                        <p className='text-center text-[16px] font-semibold text-white'>
                          ok
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeFilter2 === "focus-timer" && (
                  <div className="">
                    <div>
                      <p className='text-[32px] font-semibold text-white mb-5'>
                        Focus Timer
                      </p>
                      <p className='text-[18px] font-semibold text-white mb-3'>
                        Select timer mode
                      </p>
                      <div className='grid grid-cols-4 gap-4 w-[550px] mb-10'>
                        <div className=''>
                            <p className='text-[18px] font-semibold text-white mb-2 text-center'>Focus</p>
                            <div className="relative ml-1">
                              <input
                                type="text"
                                placeholder="25"
                                className="pl-2 p-2 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold"
                                value={focusTime}
                                onChange={(e) => setFocusTime(e.target.value)}
                              />
                              <p className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold text-[14px]'>
                                Mins
                              </p>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-[18px] font-semibold text-white mb-2 text-center'>Short Break</p>
                            <div className="relative ml-1">
                              <input
                                type="text"
                                placeholder="5"
                                className="pl-2 p-2 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold"
                                value={shortBreakTime}
                                onChange={(e) => setShortBreakTime(e.target.value)}
                              />
                              <p className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold text-[14px]'>
                                Mins
                              </p>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-[18px] font-semibold text-white mb-2 text-center'>Long Break</p>
                            <div className="relative ml-1">
                              <input
                                type="text"
                                placeholder="15"
                                className="pl-2 p-2 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold"
                                value={longBreakTime}
                                onChange={(e) => setLongBreakTime(e.target.value)}
                              />
                              <p className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold text-[14px]'>
                                Mins
                              </p>
                            </div>
                        </div>
                      </div>
                      <button onClick={handleSave} className='p-2 py-3 px-6 bg-[#7432ff] hover:bg-[#5517d9] text-white rounded-xl text-[18px] font-semibold mb-6'>
                            Save
                        </button>
                    </div>
                  </div>
                )}
                {activeFilter2 === "sounds" && (
                  <div className="">
                    <div>
                      <p className="text-[32px] font-semibold text-white mb-5">Sounds</p>
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
                              soundInstance.volume(parseFloat(e.target.value));
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
                          <p className="text-[18px] font-semibold text-white">Rain</p>
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
                          <p className="text-[18px] font-semibold text-white">Buzzer</p>
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
    </div>
    </>
  )
}

export default FilterCategory2