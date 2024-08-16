import React from 'react';
import Image from 'next/image';

type Props = {};

const Sounds = (props: Props) => {

  return (
    <div>
      <p className='text-[32px] font-semibold text-white mb-5'>
         Sounds
      </p>
      <div>
      <input type="range" className="w-[200px] mb-8" min="0" placeholder='.' max="1" step="0.05" id="alertVolume" name="alertVolume"></input>
      </div>
      <button className='p-2 py-3 px-6 bg-[#7432ff] hover:bg-[#5517d9] text-white rounded-xl text-[18px] font-semibold mb-6'>
            Play
        </button>
        <div className='flex items-center gap-4 mb-3'>
            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className=" text-white"
                />
                <span className="text-[18px]">🔕</span>
                <p className='text-[18px] font-semibold text-white'>
                None
                </p>
            </label>
        </div>
        <div className='flex items-center gap-4 mb-3'>
            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className=" text-white"
                />
                <span className="text-[18px]">☔️</span>
                <p className='text-[18px] font-semibold text-white'>
                Rain
                </p>
            </label>
        </div>
        <div className='flex items-center gap-4 mb-3'>
            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className=" text-white"
                />
                <span className="text-[18px]">🌊</span>
                <p className='text-[18px] font-semibold text-white'>
                Ocean
                </p>
            </label>
        </div>
        <div className='flex items-center gap-4 mb-3'>
            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className=" text-white"
                />
                <span className="text-[18px]">☕️</span>
                <p className='text-[18px] font-semibold text-white'>
                Bustling Café
                </p>
            </label>
        </div>
        <div className='flex items-center gap-4 mb-3'>
            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className=" text-white"
                />
                <span className="text-[18px]">🛩️</span>
                <p className='text-[18px] font-semibold text-white'>
                Airplane Cabin
                </p>
            </label>
        </div>
        <div className='flex items-center gap-4 mb-8'>
            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className=" text-white"
                />
                <span className="text-[18px]">🙇</span>
                <p className='text-[18px] font-semibold text-white'>
                Exam Hall
                </p>
            </label>
        </div>
        
    </div>
  );
};

export default Sounds;
