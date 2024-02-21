import React from 'react'
import { AvatarDemo } from './ui/avatar'
import ThemeToggle from './ui/themetoggle'
import DropdownMenuDemo from './ShortProfile'

export default function Navbar() {
  return (
    <nav className=' w-full h-16 flex flex-row p-2 px-3 nav_border dark:border-border_dark	'>
         <div className="flex-1 w-full flex flex-row items-center justify-start">
            <div className='text-2xl font-semibold'>My Desings</div>
        </div>
        <div className=" flex-1 w-full flex flex-row items-center justify-end">
            <div className="px-3">
            <ThemeToggle></ThemeToggle>
            </div>
            <div className="items-center">
            <DropdownMenuDemo></DropdownMenuDemo>
            </div>
        </div>
    </nav>
  )
}
