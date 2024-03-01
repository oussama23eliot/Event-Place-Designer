import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "./ui/button";
import { useAppDispatch } from "@/lib/store";
import { fabric } from "fabric";
import { addToCanvas } from "@/lib/features/boardSlice";

export default function DesignDrawer() {
    const dispatch = useAppDispatch();

    const handleAddRectangle=()=>{
        const group = new fabric.Group([], {
            left: 100,
            top: 100,
          });
          
          // Create objects to add to the group
          const rect1 = new fabric.Rect({
            width: 50,
            height: 50,
            fill: 'red',
          });
          
          const rect2 = new fabric.IText("Bloc 1",{
            fontSize:8,
            visible:false,
            selectable: false, // Disable selection for this object
            lockScalingX: true, // Lock scaling on the X-axis
            lockScalingY: true, // Lock scaling on the Y-axis
            fill:"white"
          });
          
          // Add objects to the group
          group.addWithUpdate(rect1);
          group.addWithUpdate(rect2);
        dispatch(addToCanvas({ canvasObject : group }))
        if(group.onSelect({})){
            console.log("hh")
        }
    }
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1" >
				<AccordionTrigger className="hover:bg-hover_bg pl-2 hover:no-underline">Shapes</AccordionTrigger>
                <AccordionContent className="mt-2 pl-2 ">
                    <ScrollArea className=" w-full h-28 rounded-md ">
                        <div className="flex flex-wrap w-full gap-1">
                        <Button onClick={()=>handleAddRectangle()}>rectangle</Button>
                        <Button>square</Button>
                        <Button>circle</Button>
                        <Button>polygone</Button>
                        <Button>line</Button>
                        </div>
                    </ScrollArea>
				</AccordionContent>
			</AccordionItem>
            <AccordionItem value="item-2" >
				<AccordionTrigger className="hover:bg-hover_bg pl-2 hover:no-underline">Seats</AccordionTrigger>
                <AccordionContent className="mt-2 pl-2 ">
                    <ScrollArea className=" w-full h-28 rounded-md ">
                        <div className="flex flex-wrap w-full gap-1">
                        <Button>sdsd</Button>
                        <Button>sd</Button>
                        <Button>ss</Button>
                        <Button>qs</Button>
                        <Button>ff</Button>
                        </div>
                    </ScrollArea>
				</AccordionContent>
			</AccordionItem>
            <AccordionItem value="item-3" >
				<AccordionTrigger className="hover:bg-hover_bg pl-2 hover:no-underline">locations</AccordionTrigger>
                <AccordionContent className="mt-2 pl-2 ">
                    <ScrollArea className=" w-full h-28 rounded-md ">
                        <div className="flex flex-wrap w-full gap-1">
                        <Button>sdsd</Button>
                        <Button>sd</Button>
                        <Button>ss</Button>
                        <Button>qs</Button>
                        <Button>ff</Button>
                        </div>
                    </ScrollArea>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
