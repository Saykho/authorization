import { News } from "./models/news.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNews } from "./async-actions/fetch-news";
import { RootState } from "../index";

export enum NewsStateStatus {
    loading= "loading",
    idle = "idle",
}

export interface NewsState {
    news: News[];
    loading: boolean;
    error: null | string;
    status: NewsStateStatus;
}

const initialState: NewsState = {
    news: [],
    error: null,
    loading: false,
    status: NewsStateStatus.idle,
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        deleteNews: (state, action: PayloadAction<{
            id: number;
        }>) => {
            state.news = state.news.filter(n => n.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.status = NewsStateStatus.loading;
            state.news = [];
            state.error = null;
        });
        builder.addCase(fetchNews.fulfilled, (state, {payload}) => {
            state.news = payload;
            state.status = NewsStateStatus.idle;
        });
        builder.addCase(fetchNews.rejected, (state, {payload}) => {
            if (payload) state.error = payload.message;
            state.status = NewsStateStatus.idle;
        });
    }
});

export const { deleteNews} = newsSlice.actions;
export default newsSlice.reducer;

export const selectNews = (state: RootState) => state.news.news;
export const selectStatus = (state: RootState) => state.news.status;
export const selectIsNewsLoading = (state: RootState) => state.news.status === NewsStateStatus.loading;