import "./App.css";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Footer} from "./layout/footer/Footer";
import {AboutMe} from "./layout/sections/aboutme/AboutMe";
import {Projects} from "./layout/sections/projects/Projects";
import styled from "styled-components";
import {theme} from "./styles/Theme.styled";
import {useState} from "react";
import {Certificates} from "./layout/sections/certificates/Certificates";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Skills} from "./layout/sections/skills/Skills";


function App() {
    const [dark, setDark] = useState<boolean>(false)
    const changeTheme = (value: boolean) => {
        setDark(value)
    }
    return (
        <AppStyled dark={dark}>
            <Header dark={dark} callback={changeTheme}/>
            <Main dark={dark}/>
            <Projects/>
            <AboutMe/>
            <Skills />
            <Certificates />
            <Contacts />
            <Footer/>
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div<{ dark: boolean }>`
  background-color: ${props => props.dark ? theme.colors.dark : theme.colors.light};
  color: ${props => props.dark ? "white" : "black"};
`
