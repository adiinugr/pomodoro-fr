import React, {useState} from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { Switch } from '@headlessui/react'

type Props = {};

const Quotes = (props: Props) => {
    const [enabled, setEnabled] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(new Set(["All Quotes"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleSelectionChange = (keys: any) => {
    setSelectedKeys(new Set(keys));
  };

  return (
    <div>
      <p className='text-[32px] font-semibold text-white mb-5'>
        Quotes
      </p>
      <p className='text-[18px] font-semibold text-white mb-3'>
        Select Category
      </p>
      <div className='ml-1 mb-6'>
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
              className="capitalize text-white border-2 border-[#555555] px-6 rounded-md py-2"
            >
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Single selection example"
            className='border-2 rounded-md border-[#555555] bg-black px-2'
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
          >
            <DropdownItem className='text-white' key="All Quotes">All Quotes</DropdownItem>
            <DropdownItem className='text-white' key="Motivational">Motivational</DropdownItem>
            <DropdownItem className='text-white' key="Inspirational">Inspirational</DropdownItem>
            <DropdownItem className='text-white' key="Self Care">Self Care</DropdownItem>
            <DropdownItem className='text-white' key="Gratitude">Gratitude</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className='flex items-start gap-4 mb-10'>
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
        <div className='flex items-center gap-2'>
          <p className='text-[18px] font-semibold text-white'>
            Show quotes in Focus Mode
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Quotes;
