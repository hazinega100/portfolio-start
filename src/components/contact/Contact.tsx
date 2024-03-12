import React from "react";
import styled from "styled-components";

type PropsType = {
    src: string
    title: string
    data: string
    href?: string
}

export const Contact: React.FC<PropsType> = ({src, title, data, href}) => {
    return (
        <ContactStyle>
            <img src={src} alt="contact"/>
            <div>
                <Title>{title}</Title>
                <Link href={href}>{data}</Link>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled.div`
  display: flex;
  align-items: center;
`
const Title = styled.h4`
  font-size: 16px;
  font-weight: 500;
`
const Link = styled.a`
  color: rgb(139, 139, 139);
  font-size: 12px;
  font-weight: 400;
`
