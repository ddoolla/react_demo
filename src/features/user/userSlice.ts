import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {createUserApi, fetchUsersApi} from "./userApi.ts";
import {NewUser, User, UsersState} from "./user.ts";
import {STATUS} from "../../common/constant/status.ts";
import {createAppAsyncThunk} from "../../app/withTypes.ts";

const usersAdapter = createEntityAdapter<User>();

const initialState = usersAdapter.getInitialState<UsersState>({
    count: 0,
    pagination: null,
    status: STATUS.IDLE
});

const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {

    },
    selectors: {
        selectUsers2: (sliceState) => sliceState
    },
    extraReducers: builder =>  {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                usersAdapter.setAll(state, action.payload.users);
                state.count = action.payload.count;
                state.pagination = action.payload.pagination;
                state.status = STATUS.IDLE;
            })
            // .addCase(saveNewUser.fulfilled, usersAdapter.addOne)
    }
});

/* Thunks */
export const fetchUsers = createAppAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await fetchUsersApi();
        return response.data;
    }
);

export const saveNewUser = createAppAsyncThunk(
    "users/saveNewUser",
    async (initialUser: NewUser) => {
        const response = await createUserApi(initialUser);
        return response.data;
    }
);

/* Selectors */
export const {
    selectAll: selectUsers,
    selectById: selectUserById
} = usersAdapter.getSelectors((state: RootState) => state.users);

export default usersSlice.reducer;
