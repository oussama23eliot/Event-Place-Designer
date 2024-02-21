'use client'
/* eslint-disable */
import React from 'react';
import { useCallback } from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation';

// chakra imports
export const SidebarLinks = (props: { routes: string[] }): JSX.Element => {
  // Chakra color mode
  const pathname = usePathname();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName);
    },
    [pathname],
  );

  const createLinks = (routes: string[]) => {
    return routes.map((route, index) => {
      if (
        route === 'Recent' ||
        route === 'Import' ||
        route === 'Preview'
      ) {
        return (
          <a key={index} href="{route + '/'}" className='w-full '>
            <div className="w-full mb-1  flex hover:cursor-pointer border-l-4 border-transparent dark:hover:border-white ease-in-out	transition-all	duration-200  hover:border-black hover:bg-hover_bg ">
              <li
                className=" flex flex-row cursor-pointer items-center py-3 px-2 justify-center "
                key={index}
              >
                <span
                  className={'font-bold text-brand-500 w-full dark:text-white min-h-30 min-w-30'
                     // : 'font-medium text-gray-600'
                  }
                >                  
                  <Image src={`${route}.svg`} alt="mi Logo" width={22} height={22} className="dark:invert  text-gray-800 " priority/>
                  </span>
                <p
                  className={"leading-1 ml-1 w-full flex  font-normal text-md text-navy-700 text-black dark:text-white"
                      // font-medium text-gray-600
                  }
                >
                  {route}
                </p>
              </li>
              {activeRoute(route) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </a>
        );
      }
    });
  };
  // BRAND
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
