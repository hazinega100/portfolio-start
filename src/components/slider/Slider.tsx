import React from "react";
import styled from "styled-components";
import otus from "../../assets/images/certificates/otus-certificate.webp"

export const Slider = () => {
    return (
        <SliderStyle>
            <Slide>
                <Image src={otus} />
            </Slide>
        </SliderStyle>
    );
};

const SliderStyle = styled.div`
  max-width: 500px;
`
const Slide = styled.div`
  
`
const Image = styled.img`
  height: 300px;
  object-fit: cover;
`
