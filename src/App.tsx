import "./App.css";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Footer} from "./layout/footer/Footer";
import {AboutMe} from "./layout/sections/aboutme/AboutMe";
import {Projects} from "./layout/sections/projects/Projects";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects />
            <AboutMe />
            <Footer/>
        </div>
    );
}

export default App;
