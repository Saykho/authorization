import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import styled from "styled-components";

export function Profile() {
    const user = useAppSelector(state => state.user.user);

    return (
        <>
            {user && (
                <User>
                    <UserData>{user.name} - {user.age} лет</UserData>
                </User>
            )}
        </>
    );
}

const User = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

const UserData = styled.div`
  font-size: 150%;
  font-weight: bold;
`;