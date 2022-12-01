import React, { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchUser } from "../../state/user/async-actions/fetch-user";
import { selectError, selectIsUserLoading } from "../../state/user/user-slice";
import "./Login.scss";

export function Login() {
    const dispatch = useAppDispatch();
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleClick = () => {
        dispatch(fetchUser({password, username: login}));
    };
    const error = useAppSelector(selectError);
    const isLoading = useAppSelector(selectIsUserLoading);

    return (
        <>
            <div className="login">
                <input type="text"
                       onInput={(e: FormEvent<HTMLInputElement>) => {
                           const target = e.target as HTMLInputElement;
                           setLogin(target.value);
                       }}
                       disabled={isLoading}
                       className="login__username"
                       placeholder="Логин"
                />
                <input type="password"
                       onInput={(e: FormEvent<HTMLInputElement>) => {
                           const target = e.target as HTMLInputElement;
                           setPassword(target.value);
                       }}
                       disabled={isLoading}
                       className="login__password"
                />
                <button className="login__button" onClick={handleClick} disabled={isLoading}>Войти</button>

                {error && <div className="login__error">Ошибка: {error}</div>}

            </div>
        </>
    );
}