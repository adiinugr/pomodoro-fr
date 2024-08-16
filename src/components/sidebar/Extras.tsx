import React, {useState} from 'react';
import { Switch } from '@headlessui/react'
import Image from 'next/image';

type Props = {};

const Extras = (props: Props) => {
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);

  return (
    <div>
      <p className='text-[32px] font-semibold text-white mb-5'>
        Extras
      </p>
    <div className='flex items-start gap-4 mb-5'>
        <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group relative flex h-7 w-[80px] cursor-pointer rounded-full bg-[#555555] p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#6c37ed]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>
      <div className=''>
        <div className='flex items-center gap-2'>
          <p className='text-[18px] font-semibold text-white'>
            Disable animated themes
          </p>
        </div>
        <p className='text-[18px] font-semibold text-[#a0a0a0]'>
          Recommended for older devices, especially if you are experiencing lag. Refresh to take effect.
        </p>
      </div>
    </div>
    <div className='flex items-start gap-4 mb-8'>
        <Switch
        checked={enabled2}
        onChange={setEnabled2}
        className="group relative flex h-7 w-[82px] cursor-pointer rounded-full bg-[#555555] p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#6c37ed]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>
      <div className=''>
        <div className='flex items-center gap-2'>
          <p className='text-[18px] font-semibold text-white'>
            Clear mode 
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
          Hide extra UI elements when your mouse is not over the browser window. May not work on tablets.
        </p>
      </div>
    </div>
    <p className='text-[18px] font-semibold text-white mb-3'>
        Name to show in dashboard
    </p>
    <div className='ml-1 mb-3'>
    <input
        type="text"
        placeholder="."
        className="pl-2 p-2 py-1 rounded-md w-[288px] bg-transparent border-2 border-[#606060] text-white font-semibold"
    />
    </div>
    <p className='text-[16px] font-normal text-[#a0a0a0] w-[288px]'>
          Update your name that appears in the Home dashboard.
        </p>
    </div>
  );
};

export default Extras;
