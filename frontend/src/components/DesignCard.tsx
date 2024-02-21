import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Fullscreen } from 'lucide-react';
import DesignState from './DesignState';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import CardDropdown from './CardDropdown';
import OptionsMenu from './OptionsMenu';

export default function DesignCard() {
  return (
    <Card className='max-w-4xl min-w-4xl'>
        <CardHeader>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
        <Image
              src="COYS.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={200}
              priority
        />
        </CardContent>
        <CardFooter className='p-0 m-0'>
          <div className="flex flex-col align-center w-full">
            <div className="flex mb-2 w-full flex-row px-2">
              <div className="flex-1"><DesignState></DesignState></div>
              <div ><OptionsMenu></OptionsMenu></div>
            </div>
            <CardDropdown></CardDropdown>
          </div>
        </CardFooter>
    </Card>
  )
}
