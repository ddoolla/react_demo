import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {createUserApi, deleteUserApi, fetchUserByIdApi, fetchUsersApi, updateUserApi} from "./userApi.ts";
import {EditUser, NewUser, User} from "./user.ts";
import {Status, STATUS} from "../../common/constant/status.ts";
import {createAppAsyncThunk} from "../../app/withTypes.ts";
import {Pagination} from "../../common/types/pagination.ts";

interface UsersState {
    count: number;
    pagination: Pagination | null;
    status: Status;
}

const usersAdapter = createEntityAdapter<User>();

const initialState = usersAdapter.getInitialState<UsersState>({
    count: 0,
    pagination: null,
    status: STATUS.LOADING
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
            /* fetchUsers */
            .addCase(fetchUsers.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                usersAdapter.setAll(state, action.payload.data.users);
                state.count = action.payload.data.count;
                state.pagination = action.payload.data.pagination;
                state.status = STATUS.IDLE;
            })
            /* fetchUserById */
            .addCase(fetchUserById.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                usersAdapter.setOne(state, action.payload.data);
                state.status = STATUS.IDLE;
            })
            .addCase(fetchUserById.rejected, (state) => {
                state.status = STATUS.ERROR;
            })
            /* saveNewUser */
            .addCase(saveNewUser.fulfilled, usersAdapter.addOne)
            /* updateUser */
            .addCase(updateUser.fulfilled, usersAdapter.updateOne)
            /* deleteUser */
            .addCase(deleteUser.pending, state => {
                state.status = STATUS.LOADING;
            })
            .addCase(deleteUser.fulfilled, usersAdapter.removeOne)
    }
});

/* Thunks */
export const fetchUsers = createAppAsyncThunk(
    "users/fetchUsers",
    async () => {
        return await fetchUsersApi();
    }
);

export const fetchUserById = createAppAsyncThunk(
    "users/fetchUserById",
    async (id: number) => {
        return await fetchUserByIdApi(id);
    }
)

/**
 * 새로 생성된 User 를 엔터티에 추가하기 위해서는 서버에서 새로 생선된 User 정보를 응답받으면 좋다.
 */
export const saveNewUser = createAppAsyncThunk(
    "users/saveNewUser",
    async (initialUser: NewUser) => {
        return await createUserApi(initialUser);
    }
);

export const updateUser = createAppAsyncThunk(
  "users/updateUser",
  async ({id, updateData}: {id: number; updateData: EditUser;}) => {
      return await updateUserApi(id, updateData);
  }
);

export const deleteUser = createAppAsyncThunk(
    "users/deleteUser",
    async (id: number) => {
        return await deleteUserApi(id);
    }
)

/* Selectors */
export const {
    selectAll: selectUsers,
    selectById: selectUserById
} = usersAdapter.getSelectors((state: RootState) => state.users);

export default usersSlice.reducer;
