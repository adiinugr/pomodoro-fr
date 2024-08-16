// components/Hometheme.tsx
import React, {useState} from 'react';
import Image from 'next/image';
import { Switch } from '@headlessui/react'

type Props = {};

const images2 = [
  { src: '/images/sidebar/clock-1.jpg', alt: '12-hour Clock' },
  { src: '/images/sidebar/clock-2.jpg', alt: '24-hour Clock' },
];

const Hometheme = (props: Props) => {
  const [enabled, setEnabled] = useState(false)
  const [enabled2, setEnabled2] = useState(false)

  return (
    <div>
      <p className='text-[32px] font-semibold text-white mb-5'>
        Clock
      </p>
      <div className='grid grid-cols-2 gap-5 w-[550px] mb-10'>
        {images2.map((image, index) => (
          <div key={index} className=''>
            <Image
              src={image.src}
              className='rounded-lg mb-2'
              width={288}
              height={100}
              alt={image.alt}
            />
            <p className='text-center text-[16px] font-semibold text-white'>
              {image.alt}
            </p>
          </div>
        ))}
      </div>
      <div className='flex items-start gap-4 mb-5'>
        <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-[#555555] p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#6c37ed]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>
      <div className=''>
        <p className='text-[18px] font-semibold text-white'>
          Show dynamic greetings
        </p>
        <p className='text-[18px] font-semibold text-[#a0a0a0]'>
          Turn off for generic greetings.
        </p>
      </div>
    </div>
    <div className='flex items-start gap-4 mb-5'>
        <Switch
        checked={enabled2}
        onChange={setEnabled2}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-[#555555] p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#6c37ed]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>
      <div className=''>
        <div className='flex items-center gap-2'>
          <p className='text-[18px] font-semibold text-white'>
            Show greetings
          </p>
            <Image
              src={"/images/plus.svg"}
              className='rounded-lg'
              width={60}
              height={100}
              alt=""
            />
        </div>
        <p className='text-[18px] font-semibold text-[#a0a0a0]'>
          Turn off to hide dashboard greetings.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Hometheme;
