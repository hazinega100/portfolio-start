import React from "react";
import styled from "styled-components";

type PropsType = {
    menuItems: string[]
}

export const Menu: React.FC<PropsType> = ({menuItems}) => {
    return (
        <NavStyle>
            <ul>
                {
                    menuItems.map((item, i) => <li key={i}><a href={`#${item}`}>{item}</a></li>)
                }
            </ul>
        </NavStyle>
    );
};

const NavStyle = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 60px;
    li:first-letter {
      text-transform: uppercase;
    }
    li > a {
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
