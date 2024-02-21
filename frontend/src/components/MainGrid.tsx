import React from 'react'
import DesignCard from './DesignCard'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { ScrollBar } from './ui/scroll-area'


export default function MainGrid() {
  return (
    <ScrollArea className="fixed w-full">
    <div className=" border justify-center p-4 container overflow-y-scroll mx-auto 
   flex flex-wrap gap-4 h-screen items-center scroll-smooth pb-20">
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
        <DesignCard></DesignCard>
      </div>
    </ScrollArea>
  )
}
