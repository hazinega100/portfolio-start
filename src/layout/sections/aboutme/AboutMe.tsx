import React from "react";
import styled from "styled-components";
import {H1Style} from "../main/Main";
import ellipseSmall from "../../../assets/images/icons/ellipseSmall.svg"
import wa from "../../../assets/images/icons/social/wa.svg"
import tel from "../../../assets/images/icons/social/telegram.svg"
import ins from "../../../assets/images/icons/social/ins.svg"
import webDev from "../../../assets/images/web-dev.png"

export const AboutMe = () => {
    return (
        <AboutMeSection>
            <AboutMeBox>
                <div>
                    <a href="#"><img src={wa} alt="wa"/></a>
                    <a href="#"><img src={tel} alt="telegram"/></a>
                    <a href="#"><img src={ins} alt="ins"/></a>
                </div>
                <H1Style>I'm <span>Egor</span> Guzanov web-developer</H1Style>
                <ul>
                    <li><img src={ellipseSmall} alt="ellipse"/>I was born in Russia</li>
                    <li><img src={ellipseSmall} alt="ellipse"/>I'm 35 years old</li>
                    <li><img src={ellipseSmall} alt="ellipse"/>I have started my interest in this field from 2020</li>
                    <li><img src={ellipseSmall} alt="ellipse"/>I'm web developer, React and Redux</li>
                    <li><img src={ellipseSmall} alt="ellipse"/>My phone number in SPb +79502231886</li>
                </ul>
            </AboutMeBox>
            <AboutImg src={webDev} alt="me"/>
        </AboutMeSection>
    );
};

const AboutMeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 50px;
  height: 500px;
  background-color: rgb(166, 188, 250);
`
const AboutMeBox = styled.div`
  padding: 20px 10px 50px 30px;
  border-radius: 100px 0 100px 0;
  backdrop-filter: blur(20px);
  background: linear-gradient(132.42deg, rgba(255, 255, 255, 0.5) -10.056%,rgba(0, 71, 255, 0.05) 104.325%);
  div {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    a > img {
      height: 30px;
    }
  }
  ul > li {
    margin: 5px;
    font-size: 20px;
    img {
      margin-right: 10px;
    }
  }
`
const AboutImg = styled.img`
  margin-left: 100px;
  height: 300px;
`
