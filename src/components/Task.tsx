"use client";
import { useState } from "react";
import { FaCircle, FaPen } from "react-icons/fa";
import Image from "next/image";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface TextareaProps {
  id: string;
  name: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Tasks: React.FC<TextareaProps> = ({ id, name, rows = 6, value, onChange }) => {
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="bg-[#2e2446] flex rounded-full gap-2 p-2 border-2 border-white">
        <FaCircle className='text-[#ff5c5c] mt-1' />
        <p className='text-white font-medium'>
          Study
        </p>
        <FaPen className='text-[#fff3e2] mt-1' />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-black container rounded-lg shadow-lg max-w-[420px] z-20">
            <Image src="/images/bg.jpg" alt="logo" width={420} height={40} className="rounded-t-lg" />
            <div className="p-5">
              <div className="flex justify-center">
                <button onClick={() => setIsModalOpen2(true)}>
                  <div className="flex items-center justify-center gap-1">
                    <GiPriceTag className="text-white"/>
                    <p className="text-white">
                      Study
                    </p>
                    <MdOutlineArrowDropDown size={20} className="text-white" />
                  </div>
                </button>
              </div>
              <textarea
                id={id}
                name={name}
                rows={rows}
                value={value}
                onChange={onChange}
                placeholder="Description"
                className="w-full px-4 py-2 border rounded-md bg-transparent focus:outline-none focus:border-blue-500 resize-none mt-4"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 w-full py-2 bg-red-600 text-white rounded-full focus:outline-none"
              >
                Save
              </button>
            </div>
            {isModalOpen2 && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-20">
                <div className="bg-black container rounded-lg shadow-lg max-w-[420px] z-20">
                  <div className="p-1">
                    <div className="py-1">
                      <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <p
                          onClick={() => setIsModalOpen2(false)}
                          className="px-4 py-3 text-sm text-white hover:bg-[#343434] border-b flex items-center gap-2"
                          role="menuitem"
                        >
                          <FaCircle className='text-[#cccccc]' />
                          Unset
                        </p>
                        <p
                          onClick={() => setIsModalOpen2(false)}
                          className="px-4 py-3 text-sm text-white hover:bg-[#343434] border-b flex items-center gap-2"
                          role="menuitem"
                        >
                          <FaCircle className='text-[#fae058]' />
                          Sport
                        </p>
                        <p
                          onClick={() => setIsModalOpen2(false)}
                          className="px-4 py-3 text-sm text-white hover:bg-[#343434] border-b flex items-center gap-2"
                          role="menuitem"
                        >
                          <FaCircle className='text-[#e4745e]' />
                          Other
                        </p>
                        <p
                          onClick={() => setIsModalOpen2(false)}
                          className="px-4 py-3 text-sm text-white hover:bg-[#343434] border-b flex items-center gap-2"
                          role="menuitem"
                        >
                          <FaCircle className='text-[#e4745e]' />
                          Entertainment
                        </p>
                        <p
                          onClick={() => setIsModalOpen2(false)}
                          className="px-4 py-3 text-sm text-white hover:bg-[#343434] border-b flex items-center gap-2"
                          role="menuitem"
                        >
                          <FaCircle className='text-[#d68651]' />
                          Rest
                        </p>
                        <p
                          onClick={() => setIsModalOpen2(false)}
                          className="px-4 py-3 text-sm text-white hover:bg-[#343434] border-b flex items-center gap-2"
                          role="menuitem"
                        >
                          <FaCircle className='text-[#9a8eda]' />
                          Social
                        </p>
                        <p
                          onClick={() => setIsModalOpen2(false)}
                          className="px-4 py-3 text-sm text-white hover:bg-[#343434] border-b flex items-center gap-2"
                          role="menuitem"
                        >
                          <FaCircle className='text-[#d68651]' />
                          Study
                        </p>
                        <p
                          onClick={() => setIsModalOpen2(false)}
                          className="px-4 py-3 text-sm text-white hover:bg-[#343434] border-b flex items-center gap-2 mb-32"
                          role="menuitem"
                        >
                          <FaCircle className='text-[#fadf59]' />
                          Work
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Tasks;
