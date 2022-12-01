import React from "react";
import "./Loader.scss";

interface LoaderProps {
    isShow: boolean;
}

export function Loader(props: LoaderProps) {
    return props.isShow ?
        (<div className="loader-wrapper">
            <div className="loader"></div>
        </div>) : null;
}
