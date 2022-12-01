import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchNews } from "../../state/news/async-actions/fetch-news";
import { Link, useNavigate } from "react-router-dom";
import "./News.scss";

export function News() {
    const news = useAppSelector(state => state.news.news);
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.user);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchNews(3));
    }, []);

    return (
        <>
            {user ?
                <div className="news">
                    {news.map(n => (
                        <div key={n.id}
                             className="news__item">
                            <div>{n.header}</div>
                            <div>{n.text}</div>
                            <div>{n.date.toString()}</div>
                        </div>
                    ))}
                </div> : navigate("/login")}
        </>
    );
}