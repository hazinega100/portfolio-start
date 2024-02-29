import "./App.css";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Footer} from "./layout/footer/Footer";
import {AboutMe} from "./layout/sections/aboutme/AboutMe";
import {Projects} from "./layout/sections/projects/Projects";
import styled from "styled-components";
import {theme} from "./layout/Theme.styled";
import {useState} from "react";


function App() {
    const [dark, setDark] = useState<boolean>(false)
    const changeTheme = (value: boolean) => {
        setDark(value)
    }
    return (
        <AppStyled dark={dark}>
            <Header dark={dark} callback={changeTheme}/>
            <Main/>
            <Projects/>
            <AboutMe/>
            <Footer/>
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div<{ dark: boolean }>`
  background-color: ${props => props.dark ? theme.colors.dark : theme.colors.light};
  color: ${props => props.dark ? "white" : "black"};
`
