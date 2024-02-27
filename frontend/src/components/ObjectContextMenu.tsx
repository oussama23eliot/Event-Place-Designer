import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu"
  import { useEffect, useRef, useState } from "react";
  import { useAppDispatch, useAppSelector } from "@/lib/store";


  type childElement ={children :  React.ReactNode,selected: fabric.Object[]};
  
  export default function ObjectContextMenu({children,selected}:childElement) {
    const State = useAppSelector((state) => state.boardReducer.canvas);

    // const handleDelete=()=>{
    //     dispatch(deleteFromCanvas({ Obj: rect2 }));
    // }
    return (
      <ContextMenu>
        <ContextMenuTrigger>
          {children}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset>
            Duplicate 
            <ContextMenuShortcut>ctrl+D</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Delete 
            <ContextMenuShortcut>ctrl+R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset >
            Forward
            <ContextMenuShortcut>ctrl+F</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>ctrl+B</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Group
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>ctrl+S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />         
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel inset>Properties</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="pedro">
              Category 1
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm"> Category 2</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm"> Category 3</ContextMenuRadioItem>

          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    )
  }
  