import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { boardReducer } from './features/boardSlice';

export const makeStore = configureStore({
    reducer: {
        boardReducer
    }
})

export type RootState = ReturnType< typeof makeStore.getState>
export type AppDispatch = typeof makeStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
