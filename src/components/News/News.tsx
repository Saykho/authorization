import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchNews } from "../../state/news/async-actions/fetch-news";
import styled from "styled-components";
import newsImg from "../../assets/img/img.jpg";

export function News() {
    const news = useAppSelector(state => state.news.news);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNews(3));
    }, []);

    return (
        <NewsContent>
            {news.map(n => (
                <NewsItem key={n.id}>
                    <div>{n.header}</div>
                    <div>{n.text}</div>
                    <div>{n.date.toString()}</div>
                </NewsItem>
            ))}
        </NewsContent>
    );
}

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background: url(${newsImg});
  height: 100%;
`;

const NewsItem = styled.div`
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid blueviolet;
  padding: 20px;
  box-shadow: 0px -1px 12px -1px rgba(128, 136, 142, 0.17) inset;
  line-height: 1.5;
  background: white;
`;

