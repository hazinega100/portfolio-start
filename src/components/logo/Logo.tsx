import React from "react";
import styled from "styled-components";

const LogoLink = styled.a`
  font-size: 28px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  @media (max-width: 1130px) {
    color: black;
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
`

export const Logo = () => {
    return (
        <LogoLink href="/">guzanov</LogoLink>
    );
};
