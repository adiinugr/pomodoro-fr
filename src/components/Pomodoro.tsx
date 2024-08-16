"use client"
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false); // To track if the timer is active
  const [isPaused, setIsPaused] = useState(true); // To track if the timer is paused

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (isActive && !isPaused && time > 0) {
      timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isActive, isPaused, time]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleStartPause = () => {
    setIsActive(true);
    setIsPaused(!isPaused);
  };


  return (
    <>
    
        <div className='flex justify-between'>
            <div className=''>
                <p className='text-[35px] text-white font-semibold'>
                    Focustimer
                </p>
            </div>
        <div className="flex flex-col items-center justify-end w-[235px] p-2 rounded-3xl bg-black bg-opacity-30 backdrop-blur-md">
            <p className='text-center text-[20px] font-semibold text-white'>
                Focus
            </p>
        <div className="text-[68px] text-white font-bold font-monop-6 rounded-lg">
            {formatTime(time)}
        </div>
        <div className='flex items-center gap-4'>
            <button
            onClick={handleStartPause}
            className={`px-10 py-2 text-[20px] font-semibold rounded-2xl text-white ${isPaused ? 'bg-[#7432ff] hover:bg-[#5517d9] hover:text-white' : 'bg-[#7432ff] hover:bg-[#5517d9] hover:text-white'} focus:outline-none`}
            >
            {isPaused ? 'Start' : 'Pause'}
            </button>
        </div>
        </div>
        </div>
    </>
  );
};

export default Timer;
