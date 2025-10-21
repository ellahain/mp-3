import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Work from "./mains/Work.tsx";
import Projects from "./mains/Projects.tsx";
import Skills from "./mains/Skills.tsx";
import Extracurriculars from "./mains/Extracurriculars.tsx";


import styled from "styled-components";

const SqueezeMargins = styled.div`
    width: 80vw;
    margin: 0 auto;
`

const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: center;
    
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export default function Root() {
    return (
        <SqueezeMargins>
            <Header/>
                <ResponsiveContainer>
                <Nav/>
                    <Routes>
                        <Route path={`/`} element={<Home/>}/>
                        <Route path={`/education`} element={<Education/>}/>
                        <Route path={`/work`} element={<Work/>}/>
                        <Route path={`/projects`} element={<Projects/>}/>
                        <Route path={`/skills`} element={<Skills/>}/>
                        <Route path={`/extracurriculars`} element={<Extracurriculars/>}/>
                    </Routes>
                </ResponsiveContainer>
            <Footer/>
        </SqueezeMargins>
    );
}