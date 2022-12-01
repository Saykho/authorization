import { News } from "../models/news.model";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const newsListMock = (): News[] => [
    {id: 1, header: "News 1", text: "Description 1", date: new Date()},
    {id: 2, header: "News 2", text: "Description 2", date: new Date()},
    {id: 3, header: "News 3", text: "Description 3", date: new Date()},
    {id: 4, header: "News 4", text: "Description 4", date: new Date()},
    {id: 5, header: "News 5", text: "Description 5", date: new Date()},
    {id: 6, header: "News 6", text: "Description 6", date: new Date()},
];

type FetchNewsError = {
    message: string;
}

const newsListMockPromise = () => new Promise<News[]>((resolve, reject) => {
    setTimeout(() => resolve(newsListMock()), 1000);
});

export const fetchNews = createAsyncThunk<News[], number, { rejectValue: FetchNewsError }>(
    "news/fetch",
    async (limit: number, thunkAPI) => {
        const news = await newsListMockPromise();
        return news.slice(0, limit);
    }
);