import React from "react";
import styled from "styled-components";
import ins from "../../assets/images/icons/social/colors/ins-colors.svg"
import wa from "../../assets/images/icons/social/colors/wa-colors.svg"
import tel from "../../assets/images/icons/social/colors/telegram-colors.svg"

export const Social = () => {
    return (
        <SocialStyle>
            <a href="#"><img src={ins} alt="social"/></a>
            <a href="#"><img src={wa} alt="social"/></a>
            <a href="#"><img src={tel} alt="social"/></a>
        </SocialStyle>
    );
};

const SocialStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`
