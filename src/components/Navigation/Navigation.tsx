import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout as userLogout } from "../../state/user/user-slice";
import "./Navigation.scss";

export function Navigation() {
    const dispatch = useAppDispatch();
    const logout = () => {
        dispatch(userLogout());
    };
    const user = useAppSelector(state => state.user.user);

    return (
        <div className="navigation">
            <header>
                <ul className="navigation__header">
                    <NavLink to="/" className={({isActive}) => `header-link ${isActive ? 'active' : ''}`}>
                        <li>На главную</li>
                    </NavLink>
                    <NavLink to="/news" className={({isActive}) => `header-link ${isActive ? 'active' : ''}`}>
                        <li>Новости</li>
                    </NavLink>
                    <NavLink to="/profile" className={({isActive}) => `header-link ${isActive ? 'active' : ''}`}>
                        <li>Профиль</li>
                    </NavLink>
                    <NavLink to="/login" className={({isActive}) => `header-link ${isActive ? 'active' : ''}`}>
                        {user ? <li onClick={logout}>Выйти</li> : <li>Войти</li>}
                    </NavLink>
                </ul>
            </header>
        </div>
    );
}