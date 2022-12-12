import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { selectUser } from "../../state/user/user-slice";
import { Navigate } from "react-router-dom";

interface GuardedRouteProps {
    children: JSX.Element;
}

export function GuardedRoute(props: GuardedRouteProps) {
    const user = useAppSelector(selectUser)
    if (!user) {
        return <Navigate to={"/login"}/>
    }

    return props.children;
}