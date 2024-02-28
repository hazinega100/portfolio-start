import React from "react";
import styled from "styled-components";
import bgWhite from "../../../assets/images/main/bg_white.png"
import avatar from "../../../assets/images/EgaHazin.jpg"
import photoshop from "../../../assets/images/icons/skills/photoshop.svg"
import after from "../../../assets/images/icons/skills/after.svg"
import illustrator from "../../../assets/images/icons/skills/illustrator.svg"
import figma from "../../../assets/images/icons/skills/figma.svg"

export const Main = () => {
    return (
        <MainStyle>
            <MainMyBlock>
                <img src={avatar} alt="avatar"/>
                <div>
                    <H1Style>I'm <span>Egor</span> Guzanov web-developer</H1Style>
                    <p>Draft is a revolutionary mobile app built to help you manage your business easily and save your
                        money.</p>
                    <Button>See Projects</Button>
                </div>
            </MainMyBlock>
            <MainSkillBox>
                <MainSkillCard>
                    <img src={photoshop} alt=""/>
                    <div>Photoshop</div>
                </MainSkillCard>
                <MainSkillCard>
                    <img src={after} alt=""/>
                    <div>After Effects</div>
                </MainSkillCard>
                <MainSkillCard>
                    <img src={illustrator} alt=""/>
                    <div>Illustrator</div>
                </MainSkillCard>
                <MainSkillCard>
                    <img src={figma} alt=""/>
                    <div>Figma</div>
                </MainSkillCard>
            </MainSkillBox>
        </MainStyle>
    );
};

const MainStyle = styled.section`
  padding: 200px 0 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bgWhite}) center/cover;
`
const MainMyBlock = styled.div`
  padding: 40px 100px 40px 100px;
  display: flex;
  max-width: 1158px;

  border-radius: 200px 0 200px 0;
  backdrop-filter: blur(20px);
  background: linear-gradient(132.42deg, rgba(255, 255, 255, 0.5) -10.056%, rgba(0, 71, 255, 0.05) 104.325%);
  & img {
    margin-right: 45px;
    max-width: 401px;
    max-height: 401px;
    transform: rotate(-3.24deg);

    box-sizing: border-box;
    border: 25px solid rgb(255, 255, 255);
    border-radius: 334px;
    background: rgb(33, 87, 242);
  }

  & p {
    max-width: 376px;
    color: rgb(57, 57, 57);
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
    margin-bottom: 42px;
  }
  @media (max-width: 1024px) {
    margin: 0 101px;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    img {
      height: 340px;
    }
  }
  @media (max-width: 425px) {
    img {
      height: 190px;
    }
    p {
      font-size: 12px;
    }
  }
`
export const H1Style = styled.h1`
  max-width: 600px;
  font-size: 60px;
  font-weight: 700;
  line-height: 136%;
  text-align: left;
  margin-bottom: 19px;
  span {
    color: rgb(33, 87, 242);
  }
  @media (max-width: 425px) {
    font-size: 34px;
  }
`
const Button = styled.button`
  width: 200px;
  height: 54px;
  border-radius: 20px;
  background: rgb(33, 87, 242);
  color: white;
  text-transform: uppercase;
`
const MainSkillBox = styled.div`
  margin: 47px 0 0 33px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 13px;
`
const MainSkillCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & img {
    width: 55px;
    height: 55px;
    position: absolute;
    top: -30px;
    left: 55px;
  }

  & div {
    width: 161px;
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
    background: rgb(166, 188, 250);
    font-size: 20px;
    font-weight: 600;
    color: white;
  }
`
