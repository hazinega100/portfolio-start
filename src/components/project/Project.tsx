import React from "react";
import styled from "styled-components";

type PropsType = {
    src: string
    title: string
    descr: string
}

export const Project: React.FC<PropsType> = ({src, title, descr}) => {
    return (
        <ProjectStyle>
            <Image src={src} alt=""/>
            <Title>{title}</Title>
            <Descr>{descr}</Descr>
            <Link href="#">Demo</Link>
            <Link href="#">Code</Link>
        </ProjectStyle>
    );
};

const ProjectStyle = styled.div`
  max-width: 540px;
  width: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3`

`
const Descr = styled.p`

`
const Link = styled.a`
  text-transform: uppercase;
`
