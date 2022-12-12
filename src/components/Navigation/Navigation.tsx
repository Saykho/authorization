import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout as userLogout } from "../../state/user/user-slice";
import "./Navigation.scss";
import styled from "styled-components";

export function Navigation() {
    const dispatch = useAppDispatch();
    const logout = () => {
        dispatch(userLogout());
    };
    const user = useAppSelector(state => state.user.user);

    return (
        <NavigationContent>
                <Header>
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
                </Header>
        </NavigationContent>
    );
}

const NavigationContent = styled.div`
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid #9d9c9c;
  background: #f1f4f6;
`;

const Header = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;
