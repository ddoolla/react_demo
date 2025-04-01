import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../../app/store.ts";

interface User {
    id: number;
    name: string;
}

const usersAdapter = createEntityAdapter<User>();

const initialState = usersAdapter.getInitialState({
    status: "idle"
});

const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder =>  {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
                console.log("state.status", state.status);
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                console.log("action.payload", action.payload);
                usersAdapter.setAll(state, action.payload);
                state.status = "idle";
                console.log("state.entities", state.entities);
                console.log("state.status", state.status);
            })
    }
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    console.log("response.data", response.data.data.users);
    return response.data;
})

export const { selectAll: selectUsers } = usersAdapter.getSelectors((state: RootState) => state.users);
export default usersSlice.reducer;
