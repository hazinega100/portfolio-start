import React from "react";
import styled from "styled-components";

type PropsType = {
    title: string
}

export const SectionTitle: React.FC<PropsType> = ({title}) => {
    return (
        <StyleSectionTitle>
            <h2>{title}</h2>
            <div></div>
        </StyleSectionTitle>
    );
};

const StyleSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-top: 65px;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  div {
    width: 19px;
    height: 19px;
    background: linear-gradient(180.00deg, rgb(166, 188, 250),rgb(33, 87, 242) 100%);
    border-radius: 50%;
    margin-bottom: 65px;
  }
`
