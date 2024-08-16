// components/FocusTimer.tsx
import React, {useState} from 'react';

type Props = {};

const FocusTimer = (props: Props) => {

  return (
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
              />
              <p className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold text-[14px]'>
                Mins
              </p>
            </div>
        </div>
      </div>
      <button className='p-2 py-3 px-6 bg-[#7432ff] hover:bg-[#5517d9] text-white rounded-xl text-[18px] font-semibold mb-6'>
            Save
        </button>
    </div>
  );
};

export default FocusTimer;
