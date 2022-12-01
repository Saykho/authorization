import { User } from "./models/user.model";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./async-actions/fetch-user";
import { RootState } from "../index";

export enum UserStateStatus {
    idle = "idle",
    loading = "loading",
}

export interface UserState {
    user: User | null;
    idCounter: number;
    error: null | string;
    status: UserStateStatus;
    loading: boolean;
}

const initialState: UserState = {
    user: null,
    idCounter: 1,
    error: null,
    status: UserStateStatus.idle,
    loading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = UserStateStatus.loading;
            state.error = null;
        });
        builder.addCase(fetchUser.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.status = UserStateStatus.idle;
        });

        builder.addCase(fetchUser.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message;
            }
            state.status = UserStateStatus.idle;
        });
    }
});

export const {logout} = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user.user;
export const selectIsUserLoading = (state: RootState) => state.user.status === UserStateStatus.loading;
export const selectError = (state: RootState) => state.user.error;