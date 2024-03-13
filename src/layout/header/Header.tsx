import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import moonIcon from "../../assets/images/icons/moon.svg";

type PropsType = {
    dark: boolean
    callback: (value: boolean) => void
}

const headerMenu = ['home', 'projects', 'about', 'skills', 'contacts']

export const Header: React.FC<PropsType> = ({dark, callback}) => {
    const changeTheme = () => {
        if (dark) {
            callback(false)
        } else {
            callback(true)
        }
    }
    return (
        <HeaderStyle>
            <Logo />
            <Menu menuItems={headerMenu}/>
            <img onClick={changeTheme} src={moonIcon} alt="moonIcon"/>
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
