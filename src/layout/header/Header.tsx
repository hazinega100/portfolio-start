import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <HeaderStyle>
            <Logo />
            <Menu />
        </HeaderStyle>
    );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 35px 25px;
  position: absolute;
  z-index: 5;
`
