import React, {useState} from "react";
import styled, {css} from "styled-components";
import socialNet from "../../../assets/images/socialnetwork.webp"
import todo from "../../../assets/images/todolist.webp"
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "../../../components/project/Project";

type FilterType = "html/css" | "react" | "redux"

export const Projects = () => {
    const [filter, setFilter] = useState<FilterType>("html/css")

    return (
        <ProjectsStyle>
            <SectionTitle title="Projects"/>
            <FilterWrapperBtn>
                <FilterBtn active={filter === "html/css"}
                           onClick={() => {
                               setFilter("html/css")
                           }}
                >HTML/CSS
                </FilterBtn>
                <FilterBtn active={filter === "react"}
                           onClick={() => {
                               setFilter("react")
                           }}
                >React
                </FilterBtn>
                <FilterBtn active={filter === "redux"}
                           onClick={() => {
                               setFilter("redux")
                           }}
                >Redux
                </FilterBtn>
            </FilterWrapperBtn>
            <FlexWrapper justifyContent="space-around" flexWrap="wrap">
                <Project src={socialNet} title="Social Network" descr="Very good my project" />
                <Project src={todo} title="Todolist" descr={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aspernatur aut culpa deserunt doloribus est laboriosam maiores modi qui quod, ut, veniam! A architecto, at delectus doloribus iure laborum!"} />
            </FlexWrapper>
        </ProjectsStyle>
    );
};

const ProjectsStyle = styled.section`
  padding-bottom: 150px;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
`
const FilterWrapperBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 60px 0;
`
const FilterBtn = styled.button<{ active?: boolean }>`
  width: 160px;
  height: 45px;
  font-size: 20px;
  border: 3px solid rgb(166, 188, 250);
  border-radius: 67px;
  background: rgb(248, 250, 255);
  transition: background-color;

  ${props => props.active && css<{ active?: boolean }>`
    color: white;
    background-color: rgb(166, 188, 250);
  `}
`
