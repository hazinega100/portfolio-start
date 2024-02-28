import React from "react";
import styled from "styled-components";
import moonIcon from "../../assets/images/icons/moon.svg";

export const Menu = () => {
    const changeTheme = () => {
        console.log('changed theme')
    }
    return (
        <NavStyle>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
                <li><img onClick={changeTheme} src={moonIcon} alt="moonIcon"/></li>
            </ul>
        </NavStyle>
    );
};

const NavStyle = styled.nav`
  & ul {
    display: flex;
    align-items: center;
    gap: 60px;
    & li > a {
      color: black;
    }
    @media (max-width: 690px) {
      gap: 30px;
      margin: 0 30px;
    }
    @media (max-width: 425px) {
      margin: 0 10px;
      li > a {
        font-size: 8px;
      }
    }
  }
`
