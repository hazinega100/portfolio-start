import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

type PropsType = {
    dark: boolean
    callback: (value: boolean) => void
}

export const Header: React.FC<PropsType> = ({dark, callback}) => {
    return (
        <HeaderStyle>
            <Logo />
            <Menu dark={dark} callback={callback}/>
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
