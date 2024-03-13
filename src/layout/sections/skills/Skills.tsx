import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const Skills = () => {
    return (
        <SkillsStyle id={'skills'}>
            <SectionTitle title={'Skills'} />
        </SkillsStyle>
    );
};

const SkillsStyle = styled.section`
  min-height: 100vh;
`
