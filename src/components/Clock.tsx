"use client"
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const formatTime = (time: Date): JSX.Element => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Use 24-hour format
    };

    const formattedTime = time.toLocaleTimeString([], options);

    return (
          <p
            className="text-[70px] md:text-[240px] text-white font-bold"
            style={{ fontFamily: "monospace" }}
          >
            {formattedTime}
          </p>
    );
  };

  return (
    <>
      <div className='flex justify-between'>
        <div className=''>
          <p className='text-[35px] text-white font-semibold'>
            Focustimer
          </p>
        </div>
        <div className='text-white text-end'>
          <p className='text-[26px] font-semibold'>
            &quot;Your only limit is 
          </p>
          <span className='text-[26px] font-semibold text-end'>your mind&quot;</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[137px]">
        <div className="">{formatTime(time)}</div>
      </div>
    </>
  );
};

export default Timer;
