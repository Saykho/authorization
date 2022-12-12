import React from "react";
import styled from "styled-components";
import buildingsImg from "../../assets/img/8693.jpg";

export function MainPage() {

    return (
        <Content>
        </Content>
    );
}

const Content = styled.div`
  background-image: url(${buildingsImg});
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
`;