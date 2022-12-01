import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";
import newsReducer from "./news/news-slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;