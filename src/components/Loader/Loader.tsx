import React from "react";
import styled, { keyframes } from "styled-components";

interface LoaderProps {
    isShow: boolean;
}

export function Loader(props: LoaderProps) {
    return props.isShow ?
        (<LoaderWrapper>
            <LoaderCircle></LoaderCircle>
        </LoaderWrapper>) : null;
}

const LoaderWrapper = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderCircle = styled.div`
  width: 100px;
  height: 100px;
  border: solid 8px #330ede;
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;

  transition: all 0.5s ease-in;
  animation-name: ${rotate};
  animation-duration: 1.0s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;