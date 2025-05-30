import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.ts";

const store = configureStore({
    reducer: {
        users: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
