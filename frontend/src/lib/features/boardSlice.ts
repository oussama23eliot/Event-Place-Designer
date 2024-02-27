import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fabric } from "fabric";
import { useRef,RefObject, MutableRefObject } from "react";


export type boardState = {
  the_ref:MutableRefObject<null> | null,
  canvas : fabric.Canvas | null
}

export type boardAction =  {
    canvasID: MutableRefObject<null>  ,
    canvasObject : fabric.Canvas
}
export type contentAction =  {
    canvasObject : fabric.Object
}
export type updateAction =  {
  value:number
}
const initialState: boardState = {
    the_ref : null,
    canvas : null
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    initializeCanvas: (state, action: PayloadAction<boardAction>) => {
        state.the_ref = action.payload.canvasID;
        state.canvas = Object.assign( action.payload.canvasObject);
    },
    addToCanvas: (state, action: PayloadAction<contentAction>) => {
        state.canvas?.add(action.payload.canvasObject) ;
    },
    updateCanvas: (state, action: PayloadAction<updateAction>) => {
      state.canvas?.zoomToPoint(new fabric.Point(state.canvas?.getCenter().left??0,state.canvas?.getCenter().top??0), action.payload.value);
    },
  },
});

export const { initializeCanvas,addToCanvas,updateCanvas } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;