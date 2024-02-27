import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "./ui/button";


export default function DesignDrawer() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1" >
				<AccordionTrigger className="hover:bg-hover_bg pl-2 hover:no-underline">Is it accessible?</AccordionTrigger>
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
            <AccordionItem value="item-2" >
				<AccordionTrigger className="hover:bg-hover_bg pl-2 hover:no-underline">Is it accessible?</AccordionTrigger>
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
				<AccordionTrigger className="hover:bg-hover_bg pl-2 hover:no-underline">Is it accessible?</AccordionTrigger>
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
