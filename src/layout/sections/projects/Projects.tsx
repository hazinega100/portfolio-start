import React from "react";
import styled from "styled-components";
import ellipseSmall from "../../../assets/images/icons/ellipseSmall.svg"
import rec1 from "../../../assets/images/Rectangle 1.png"
import rec2 from "../../../assets/images/Rectangle 2.png"
import rec3 from "../../../assets/images/Rectangle 3.png"

export const Projects = () => {
    return (
        <ProjectsStyle>
            <h1>Projects</h1>
            <img src={ellipseSmall} alt="ellipseSmall"/>
            <FilterWrapperBtn>
                <FilterBtn>HTML/CSS</FilterBtn>
                <FilterBtn>React</FilterBtn>
                <FilterBtn>Redux</FilterBtn>
            </FilterWrapperBtn>
            <ProjectsWrapper>
                <Project>
                    <img src={rec1} alt="rec"/>
                    <ProjectInfo>
                        <h3>HTML/CSS</h3>
                        <a href="#">See project</a>
                    </ProjectInfo>
                </Project>
                <Project>
                    <img src={rec2} alt="rec"/>
                    <ProjectInfo>
                        <h3>React</h3>
                        <a href="#">See project</a>
                    </ProjectInfo>
                </Project>
                <Project>
                    <img src={rec3} alt="rec"/>
                    <ProjectInfo>
                        <h3>Redux</h3>
                        <a href="#">See project</a>
                    </ProjectInfo>
                </Project>
            </ProjectsWrapper>
        </ProjectsStyle>
    );
};

const ProjectsStyle = styled.section`
  padding: 60px 0 150px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }
`
const FilterWrapperBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 60px 0;
`
const FilterBtn = styled.button`
  width: 160px;
  height: 45px;
  border: 3px solid rgb(166, 188, 250);
  border-radius: 67px;
  background: rgb(248, 250, 255);
`
const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`
const Project = styled.div`
  max-width: 270px;
  max-height: 400px;
  img {
    width: 270px;
  }
`
const ProjectInfo = styled.div`
  padding: 17px 33px;
  border-radius: 0 0 26px 26px;
  background-color: rgb(249, 249, 252);
  border: 1px solid rgb(217, 217, 217);

  h3 {
    color: rgb(33, 87, 242);
    font-size: 20px;
    font-weight: 700;
    line-height: 34px;
  }

  a {
    color: rgb(166, 188, 250);
    font-size: 14px;
    font-weight: 400;
  }
`
