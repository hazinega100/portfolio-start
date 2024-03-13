import React from "react";
import styled from "styled-components";
import {MainTitle} from "../../../components/MainTitle";
import wa from "../../../assets/images/icons/social/wa.svg"
import tel from "../../../assets/images/icons/social/telegram.svg"
import ins from "../../../assets/images/icons/social/ins.svg"
import webDev from "../../../assets/images/web-dev.png"

const myItems: string[] = [
    "I was born in Russia",
    "I'm 35 years old",
    "I have started my interest in this field from 2020",
    "I'm web developer, React and Redux",
    "My phone number in SPb +79502231886"
]

export const AboutMe = () => {
    return (
        <AboutMeSection id={'about'}>
            <AboutMeBox>
                <div>
                    <a href="#"><img src={wa} alt="wa"/></a>
                    <a href="#"><img src={tel} alt="telegram"/></a>
                    <a href="#"><img src={ins} alt="ins"/></a>
                </div>
                <MainTitle>I'm <span>Egor</span> Guzanov web-developer</MainTitle>
                <ul>
                    {myItems.map((item, i) => <li key={i}><div></div>{item}</li>)}
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
`
const AboutMeBox = styled.div`
  padding: 20px 10px 50px 30px;
  border-radius: 100px 0 100px 0;
  backdrop-filter: blur(20px);
  background: linear-gradient(132.42deg, rgba(255, 255, 255, 0.5) -10.056%, rgba(0, 71, 255, 0.05) 104.325%);

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
    display: flex;
    gap: 10px;
    margin: 5px;
    font-size: 20px;

    div {
      width: 19px;
      height: 19px;
      background: linear-gradient(180.00deg, rgb(166, 188, 250), rgb(33, 87, 242) 100%);
      border-radius: 50%;
    }
  }
`
const AboutImg = styled.img`
  margin-left: 100px;
  height: 300px;
`
