import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import fabric, { Canvas } from "fabric/fabric-impl";
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
        state.canvas =Object.assign( action.payload.canvasObject);
    },
    addToCanvas: (state, action: PayloadAction<contentAction>) => {
        state.canvas?.add(action.payload.canvasObject) ;
    },
  },
});

export const { initializeCanvas,addToCanvas } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;