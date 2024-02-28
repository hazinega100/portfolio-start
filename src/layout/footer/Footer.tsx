import React from "react";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterStyle>
            <h3>Coded by Egor Guzanov, web-dev</h3>
            <p>All Rights Reserved 2024</p>
        </FooterStyle>
    );
};

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: #A5BBF8;
  color: white;
  h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }
  p {
    font-size: 12px
  }
`
