import React from "react";
import styled from "styled-components";
import moonIcon from "../../assets/images/icons/moon.svg";

type PropsType = {
    dark: boolean
    callback: (value: boolean) => void
}

export const Menu: React.FC<PropsType> = ({dark, callback}) => {
    const changeTheme = () => {
        if (dark) {
            callback(false)
        } else {
            callback(true)
        }
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
  ul {
    display: flex;
    align-items: center;
    gap: 60px;
    li > a {
      color: black;
    }
    li > img {
      cursor: pointer;
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
