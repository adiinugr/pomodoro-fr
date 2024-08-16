import React from 'react';
import Image from 'next/image';

type Props = {};

const images = [
  { src: '/images/sidebar/image-1.jpg', alt: 'Grainy Gradient' },
  { src: '/images/sidebar/image-2.jpg', alt: 'Aura Gradient' },
  { src: '/images/sidebar/image-3.jpg', alt: 'Aura Heart Gradient' },
];

const Stats = (props: Props) => {
  return (
    <div className=''>
        <div className='mb-3 flex items-center gap-4'>
            <p className='text-[32px] font-semibold text-white'>
                Focus Stats
            </p>
            <Image
              src={"/images/plus.svg"}
              className='rounded-lg mt-1'
              width={60}
              height={100}
              alt=""
            />
        </div>
      <p className='text-[16px] mb-5 text-[#a0a0a0]'>
        Refine your workflow with insights into your productivity patterns.
      </p>
      <div className='flex items-center gap-5 mb-8'>
        <button className='p-1 rounded-lg bg-[#7432ff] border-2 border-[#7432ff] text-white font-semibold text-[14px] px-5'>
            Today
        </button>
        <button className='p-1 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-[14px] px-5'>
            7 Days
        </button>
        <button className='p-1 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-[14px] px-5'>
            28 Days
        </button>
      </div>
      <div className='flex items-center gap-10 mb-8'>
        <div>
            <p className='text-[14px] font-semibold text-[#b9b9b9]'>
                ⚡ Focus
            </p>
            <p className='text-[32px] text-white font-semibold'>
                0m 0s
            </p>
        </div>
        <div>
            <p className='text-[14px] font-semibold text-[#b9b9b9]'>
                ✅ Tasks
            </p>
            <p className='text-[32px] text-white font-semibold'>
                0
            </p>
        </div>
        <div>
            <p className='text-[14px] font-semibold text-[#b9b9b9]'>
                🍅 Pomos
            </p>
            <p className='text-[32px] text-white font-semibold'>
                0
            </p>
        </div>
        <div>
            <p className='text-[14px] font-semibold text-[#b9b9b9]'>
                ☕ Break
            </p>
            <p className='text-[32px] text-white font-semibold'>
                0m 0s
            </p>
        </div>
      </div>
      <hr className='bg-[#606060] mb-5' />
      <p className='text-[24px] font-semibold text-[#b9b9b9] mb-5'>
        Recent Productivity
      </p>
      <div className='flex justify-center'>
        <Image
            src={"/images/2265ac8776481dd18ff7.jpg"}
            className='rounded-lg mt-1'
            width={600}
            height={433}
            alt=""
            priority
        />
        </div>
    </div>
  );
};

export default Stats;
