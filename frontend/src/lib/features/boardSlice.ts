import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fabric } from "fabric";
import { useRef, RefObject, MutableRefObject } from "react";

export type boardState = {
	canvas: fabric.Canvas | null;
};

export type boardAction = {
	canvasObject: fabric.Canvas;
};
export type contentAction = {
	canvasObject: fabric.Object;
};
export type updateAction = {
	value: number;
};
const initialState: boardState = {
	canvas: null,
};

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		initializeCanvas: (state, action: PayloadAction<boardAction>) => {
			state.canvas = Object.assign(action.payload.canvasObject);
		},
		addToCanvas: (state, action: PayloadAction<contentAction>) => {
			state.canvas?.add(action.payload.canvasObject);
		},
		zoomCanvas: (state, action: PayloadAction<updateAction>) => {
			state.canvas?.zoomToPoint(
				new fabric.Point(
					state.canvas?.getCenter().left ?? 0,
					state.canvas?.getCenter().top ?? 0
				),
				action.payload.value
			);
		},
		deleteObject: (state, action: PayloadAction<contentAction>) => {
			state.canvas?.remove(action.payload.canvasObject);
		},
		duplicateObject: (state, action: PayloadAction<contentAction>) => {
			action.payload.canvasObject?.clone((c: fabric.Object) => {
        if(c.left&&c.width)c.left -=c.width + 4
        if(c.top&&c.height)c.top -=c.height + 4
				state.canvas?.add(c);
			});
		},
	},
});

export const {
	initializeCanvas,
	addToCanvas,
	zoomCanvas,
	deleteObject,
	duplicateObject,
} = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
