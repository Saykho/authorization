import React, { useEffect } from 'react';
import { MainPage } from "./components/MainPage/MainPage";
import { Login } from "./components/Login/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import { News } from "./components/News/News";
import { Profile } from "./components/Profile/Profile";
import { useAppSelector } from "./hooks/hooks";
import "./App.scss";
import { selectIsUserLoading } from "./state/user/user-slice";
import { Loader } from "./components/Loader/Loader";
import { selectIsNewsLoading } from "./state/news/news-slice";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
    const navigate = useNavigate();
    const user = useAppSelector(state => state.user.user);
    const isUserLoading = useAppSelector(selectIsUserLoading);
    const isNewsLoading = useAppSelector(selectIsNewsLoading);
    const isLoading = isNewsLoading || isUserLoading;

    useEffect(() => {
        if (user) {
            navigate("/");
            return;
        }
        navigate("/login");
    }, [user]);

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Loader isShow={isLoading}/>
        </>
    );
}

export default App;
