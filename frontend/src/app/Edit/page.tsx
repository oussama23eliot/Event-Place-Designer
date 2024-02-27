"use client";
import Navbar from "@/components/Navbar";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEffect, useRef, useState } from "react";
import FileMenu from "@/components/FileMenu";
import { fabric } from "fabric";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import {
	initializeCanvas,
	addToCanvas,
	updateCanvas,
} from "@/lib/features/boardSlice";
import DesignDrawer from "@/components/DesignDrawer";
import ObjectContextMenu from "@/components/ObjectContextMenu";
import { Separator } from "@/components/ui/separator";

export default function page() {
	const dispatch = useAppDispatch();
	const canvasID = useRef(null);
	const [selectedItems, setSelectedItems] = useState<fabric.Object[] >([]);
	const State = useAppSelector((state) => state.boardReducer.canvas);

	useEffect(() => {
		const { width, height } = canvasID.current?.getBoundingClientRect();
		const canvasObject = new fabric.Canvas(canvasID.current, {
			backgroundColor: "rgb(238,238,238)",
			allowTouchScrolling: true,
			width: width,
			height: height,
			defaultCursor: "crosshair",
			//stopContextMenu: true,
			stateful: true,
		});

		dispatch(
			initializeCanvas({ canvasID: canvasID, canvasObject: canvasObject })
		);
		return () => {
			canvasObject.dispose();
		};
	}, []);
	useEffect(() => {
		const rect = new fabric.Rect({
			width: 20,
			height: 50,
			fill: "#ff0000",
			cornerColor: "black",
			cornerStrokeColor: "0.5",
			cornerStyle: "circle",
			hasBorders: false,
			cornerSize: 8,
		});
		const recto = new fabric.Rect({ width: 20, height: 50, fill: "blue" });
		dispatch(addToCanvas({ canvasObject: rect }));
		dispatch(addToCanvas({ canvasObject: recto }));
		const rect2 = new fabric.Rect({ width: 20, height: 50, fill: "#ff0000" });
		dispatch(addToCanvas({ canvasObject: rect2 }));
	}, []);
	const handleSelection = () => {
		let the_obj = State?.getActiveObjects();
		setSelectedItems(the_obj??[]);
	};
	const handleZoom = (e) => {
		var delta = e.deltaY;
		let zoom = State?.getZoom();
		zoom *= 0.999 ** delta;
		if (zoom > 20) zoom = 20;
		if (zoom < 0.01) zoom = 0.01;
		dispatch(updateCanvas({ value: zoom }));
		e.preventDefault();
		e.stopPropagation();
	};

	return (
		<div className="flex flex-col w-full  items-center  h-screen ">
			<div className="w-full">
				<Navbar height={"15vh"} title="Spurs Stadium" className="align-center my-auto">
					<FileMenu></FileMenu>
					<Separator orientation="vertical" className=" h-5"/>
					<FileMenu></FileMenu>
				</Navbar>
			</div>
			<div className="w-full ">
				<ResizablePanelGroup
					direction="horizontal"
					className=" min-w-full h-full rounded-lg border"
				>
					<ResizablePanel defaultSize={10} maxSize={30} minSize={10}>
						<DesignDrawer></DesignDrawer>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel
						defaultSize={90}
						maxSize={90}
						minSize={70}
						className="scroll-auto w-f relative h-fit flex flex-col p-0 items-center"
					>
						<div
							className="w-full  p-0 m-0"
							style={{ height: "84vh" }}
							onWheel={(e) => handleZoom(e)}
							onClick={() => handleSelection()}
						>
							<ObjectContextMenu selected={selectedItems}>
								<canvas className="w-full h-full " ref={canvasID}></canvas>
							</ObjectContextMenu>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	);
}
