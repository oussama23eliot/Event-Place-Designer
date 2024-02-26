"use client";
import MainGrid from "@/components/MainGrid";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import SidebarHorizon from "@/components/ui/sidebar";
import Links from "@/components/ui/sidebar_subcomponents/Links";
import { useEffect, useRef, useState } from "react";

export default function page() {
	const [open, setOpen] = useState(true);
	const [breakPoint, setBreakPoint] = useState(false);
	
	const leftside = useRef(null)
	useEffect(() => {  
	  return () => {
		if(open){
			leftside.current?.resize(7)
		}
		else{
			leftside.current?.resize(19)
		}
		console.log(leftside.current)
	  }
	},[open])
	useEffect(() => {  
		return () => {
		  if(leftside.current?.getSize()<= 10){
			setBreakPoint(true);
		  }
		  else{
			setBreakPoint(false);
		  }
		  console.log(leftside.current)
		}
	})
	return (
		<ResizablePanelGroup
			direction="horizontal"
			className="min-h-screen min-w-full fixed rounded-lg border"
		>
			<ResizablePanel
				className=" transition-all ease-linear "
				defaultSize={20}
				minSize={9}
				ref={leftside}
			>
				<div className=" flex flex-col h-screen dark:bg-gray">
				<div className="mb-2 items-center dark:bg-gray">
					<div className="w-full mx-auto duration-200 linear flex flex-col  pb-5  transition-all  dark:text-white  ">
						<div className={`ml-[10px] mt-[20px] flex items-center dark:bg-gray`}>
							<div className=" mt-0.5 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700">
								<span>Tikya</span>
							</div>
						</div>
						<div className="mb-7 mt-[20px] h-px" />
						<div className="ml-[20px] mr-4 max-w-44 ">
							<Button className="btn_shadow flex w-full  flex-row items-center">
								<svg
									className="w-6 h-6 text-white dark:text-gray-800 mr-1"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 12h14m-7 7V5"
									/>
								</svg>
								<div className="text-lg" onClick={()=>setOpen(!open)} >New</div>
							</Button>
						</div>
					</div>
				</div>
				<div>
					<ul className="mb-2" >
						<Links routes={["Recent", "Import", "Preview"]} />
					</ul>
				</div>
				</div>
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel
				defaultSize={80}
				minSize={50}
				className="scroll-auto relative flex flex-col p-0 items-center"
			>
				<Navbar></Navbar>
				<MainGrid></MainGrid>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
