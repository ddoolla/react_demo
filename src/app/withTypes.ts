import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

/* Hooks */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

/* Thunk */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatch;
}>()