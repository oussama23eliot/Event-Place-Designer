"use client";
import MainGrid from "@/components/MainGrid";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import SidebarHorizon from "@/components/ui/sidebar";
import Links from "@/components/ui/sidebar_subcomponents/Links";
import { useEffect, useRef, useState } from "react";
import FileMenu from "@/components/FileMenu";
import {fabric} from "fabric";
import { useAppDispatch,useAppSelector } from "@/lib/store";
import { initializeCanvas,addToCanvas } from "@/lib/features/boardSlice";


export default function page() {
	const dispatch = useAppDispatch();
	const canvasID = useRef(null);
	const State = useAppSelector((state) => state.boardReducer.canvas);

	useEffect(() => { 
		const canvasObject = new fabric.Canvas(canvasID.current,{height:500,width:500});
		dispatch(initializeCanvas({canvasID:canvasID,canvasObject:canvasObject}))
		const rect = new fabric.Rect({ width: 20, height: 50, fill: "#ff0000" });
		const recto = new fabric.Rect({ width: 20, height: 50, fill: "blue" });

		dispatch(addToCanvas({canvasObject:rect}))
		dispatch(addToCanvas({canvasObject:recto}))

		console.log(State);
	},[])

	// useEffect(() => { 
	// // 	const canvas = new fabric.Canvas(canvaID.current);
	// // const rect = new fabric.Rect({ width: 20, height: 50, fill: "#ff0000" });
	// // canvas.add(rect)
		
	//   })

	const [scale, setscale] = useState(0.5)
	const rect = new fabric.Rect({ width: 20, height: 50, fill: "#ff0000" });
	
	// useEffect(() => { 
	// 	//const context = can?.getContext('2d')
	// 	//context.clearRect(0, 0, 900, 600);

	// 	// context.translate(12, 12);
    //     // context.scale(scale, scale);
    //     // context.translate(-12, -12);
		
	//   }, [scale])
	return (
		<div className="flex flex-col w-full  items-center  h-screen  overflow-y-hidden">
			<div className="w-full">
				<Navbar title="Spurs Stadium"><FileMenu></FileMenu></Navbar>
			</div>
			<div className="w-full ">
				<Button onClick={()=>{setscale(scale+1);console.log(scale)}}>up</Button>
				<ResizablePanelGroup
					direction="horizontal"
					className=" min-w-full h-full rounded-lg border"
				>
					<ResizablePanel defaultSize={10}>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel
						defaultSize={90}
						className="scroll-auto w-f relative flex flex-col p-0 items-center"
					>
							<div className="min-w-full h-screen p-0">
								{/* <Image
									src="bg.svg"
									alt="Vercel Logo"
									className="dark:invert"
									objectFit="cover"
									fill={true}
									quality={100}
								/> */}
								<canvas className="w-full h-full" ref={canvasID}></canvas>
							</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	);
}
