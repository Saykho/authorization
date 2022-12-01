import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../models/user.model";

type FetchUserError = {
    message: string;
}

export const getUserPromise = function (username: string, password: any) {
    return new Promise<User>((resolve, reject) => {

        setTimeout(() => {
            //username и password равен чему то, то успех
            if (username === "Admin" && password === "12345") {
                resolve({name: "Alex Kim", age: 20, id: 1});
                return;
            }
            //если ошибка, то вот
            reject({
                message: "Логин или пароль не верны"
            });
        }, 1000);
    });
};

export const fetchUser = createAsyncThunk<{ user: User }, { username: string, password: string }, { rejectValue: FetchUserError }>(
    "user/fetch",
    async ({username, password}, thunkApi) => {
        try {
            const user = await getUserPromise(username, password);
            return {user};
        } catch (exception: any) {
            return thunkApi.rejectWithValue({
                message: exception.message
            });
        }
    }
);

