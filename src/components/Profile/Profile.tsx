import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import "./Profile.scss";

export function Profile() {
    const user = useAppSelector(state => state.user.user);

    return (
        <>
            {user && (
                <div className="user">
                    <div className="user__data">{user.name} - {user.age} лет</div>
                </div>
            )}
        </>
    );
}