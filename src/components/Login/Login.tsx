import React, { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchUser } from "../../state/user/async-actions/fetch-user";
import { selectError, selectIsUserLoading } from "../../state/user/user-slice";
import styled from "styled-components";

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
            <LoginElement>
                <Username
                    type="text"
                    onInput={(e: FormEvent<HTMLInputElement>) => {
                        const target = e.target as HTMLInputElement;
                        setLogin(target.value);
                    }}
                    disabled={isLoading}
                    placeholder="Логин (Admin)"
                />
                <Password
                    type="password"
                    onInput={(e: FormEvent<HTMLInputElement>) => {
                        const target = e.target as HTMLInputElement;
                        setPassword(target.value);
                    }}
                    disabled={isLoading}
                    placeholder="12345"
                />
                <LoginButton onClick={handleClick} disabled={isLoading}>
                    Войти
                </LoginButton>

                {error && <Error>Ошибка: {error}</Error>}

            </LoginElement>
        </>
    );
}

const LoginElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Username = styled.input`
  max-width: 200px;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  padding: 8px 12px;
  border: 1px solid #a6a4a4;
  margin-bottom: 20px;

  &:focus {
    border: 1px solid blue;
    outline: none;
  }
`;

const Password = styled(Username)`
  &:focus {
    border: 1px solid blueviolet;
    outline: none;
  }
`;

const LoginButton = styled.button`
  max-width: 200px;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  padding: 8px 12px;
  background: blue;
  border: 1px solid blue;
  color: white;
  cursor: pointer;
`;

const Error = styled.div`
  color: red;
  margin-top: 30px;
  font-weight: bold;
`;