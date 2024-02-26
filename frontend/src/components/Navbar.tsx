import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { AvatarDemo } from './ui/avatar'
import ThemeToggle from './ui/themetoggle'
import DropdownMenuDemo from './ShortProfile'

type props = {
  className?: string ,
  title?:string,
  children?: React.ReactNode
}

export default function Navbar({className,title="My Designs",children}:props) {
  return (
    <nav className={`w-full h-fit flex flex-row p-2 px-3 nav_border dark:border-border_dark ${className}`}>
         <div className="flex-1 w-full flex flex-col align-center my-auto justify-start">
            <div className='text-2xl font-semibold'>{title}</div>
            <div>{children}</div>
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
