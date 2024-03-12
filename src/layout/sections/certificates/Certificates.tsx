import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Certificates = () => {
    return (
        <CertificatesStyle>
            <SectionTitle title="Certificates"/>
            <FlexWrapper justifyContent={"center"} alignItems={"center"}>
                <Slider />
            </FlexWrapper>
        </CertificatesStyle>
    );
};

const CertificatesStyle = styled.div`
  min-height: 100vh;
  background-color: lightblue;
`
