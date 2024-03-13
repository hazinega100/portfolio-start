import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Certificates = () => {
    return (
        <CertificatesStyle id={'certificate'}>
            <SectionTitle title="Certificates"/>
            <FlexWrapper justifyContent={"center"} alignItems={"center"}>
                <Slider />
            </FlexWrapper>
        </CertificatesStyle>
    );
};

const CertificatesStyle = styled.section`
  min-height: 100vh;
`
