import React from "react";
import styled from "styled-components";
import avatar from "../../../assets/images/EgaHazin.jpg"
import {Button} from "../../../components/Button";
import {MainTitle} from "../../../components/MainTitle";
import {theme} from "../../../styles/Theme.styled";

type PropsType = {
    dark: boolean
}

export const Main: React.FC<PropsType> = ({dark}) => {
    return (
        <MainStyle id={'main'} dark={dark}>
            <MainMyBlock>
                <Image src={avatar} alt="avatar"/>
                <div>
                    <MainTitle>I'm <span>Egor</span> Guzanov web-developer</MainTitle>
                    <p>Draft is a revolutionary mobile app built to help you manage your business easily and save your
                        money.</p>
                    <Button>See Projects</Button>
                </div>
            </MainMyBlock>
        </MainStyle>
    );
};

const MainStyle = styled.section<PropsType>`
  padding: 200px 0 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  background-image: 
          linear-gradient(to right, rgba(166, 188, 250, 0.5), rgba(166, 188, 250, 0.5)), /* Первый фон */
          linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)); /* Второй фон */
  background-size: 35% 100%, 65% 100%; /* Размеры фонов */
  background-position: left top, right top; /* Позиции фонов */
  background-repeat: no-repeat; /* Отключение повтора фонов */
`
const MainMyBlock = styled.div`
  padding: 40px 100px 40px 100px;
  display: flex;
  max-width: 1158px;

  border-radius: 200px 0 200px 0;
  backdrop-filter: blur(20px);
  background: 
          linear-gradient(132.42deg, rgba(255, 255, 255, 0.5) -10.056%, rgba(0, 71, 255, 0.05) 104.325%);

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
  @media (max-width: 425px) {
    p {
      font-size: 12px;
    }
  }
`
const Image = styled.img`
  margin-right: 45px;
  max-width: 401px;
  max-height: 401px;
  transform: rotate(-3.24deg);
  object-fit: cover;

  box-sizing: border-box;
  border: 25px solid rgb(255, 255, 255);
  border-radius: 334px;
  background: rgb(33, 87, 242);
  @media (${theme.media.tablet} {
    height: 340px;
  })@media(${theme.media.mobile} {
  height: 190px;
})
`
