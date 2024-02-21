"use client"
/* eslint-disable */
import Links from './sidebar_subcomponents/Links';

import { Dispatch, SetStateAction } from 'react';
import { Button } from './button';

function SidebarHorizon(props: {  [open: Boolean]: any,setOpen:Dispatch<SetStateAction<Boolean>>}) {
  const {  open, setOpen } = props;
  return (
    <div
      className="duration-200 linear fixed flex  flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all  dark:bg-gray-800 "
    >
      <div className={`mx-[56px] mt-[20px] flex items-center dark:bg-gray-800`}>
        <div className="ml-1 mt-0.5 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white ">
          <span>Tikya</span>
        </div>
      </div>
      <div className="mb-7 mt-[20px] h-px  dark:bg-white/30" />
      <Button  className='btn_shadow flex flex-row items-center'>
      <svg className="w-6 h-6 text-white dark:text-gray-800 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
      </svg>
        <div className='text-lg'>New</div>
      </Button>
      {/* Free Horizon Card
      <div className="flex justify-center">
        <SidebarCard />
      </div> */}

      {/* Nav item end */}
      <p
        className=" block cursor-pointer text-black"
        onClick={() => setOpen(!open)}
      >
       heel 
      </p>
    </div>
  );
}

export default SidebarHorizon;
