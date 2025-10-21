import styled from "styled-components";

export const StyledMain = styled.div`
    background-color: #DDF2EB;
    color: #3D0814;
    height: 100vh;
    width: 70%;
    padding: 5%;
    font: calc(2px + 1.25vw) "Sniglet", system-ui;
    @media screen and (max-width: 1000px) {
        background-color: #DDF2EB;
        height: 100vh;
        width: 100%;
        padding: 3%;
    }
`

export const StyledHeader = styled.h3`
    font: calc(5px + 2vw) "Roboto", sans-serif;
    `
const StyledText = styled.p`
    text-align: left;
`


const StyledImage = styled.img `
    max-width: 100%;
    height: auto;
    float: left;
    margin: 5% 5%;
`


export default function Home () {
    return (
        <StyledMain>
            <title>Home | Resume</title>
            <StyledHeader>Home</StyledHeader>
            <StyledImage src="/ella.JPG" alt="Photo of Ella Hain"/>
            <br/>
            <br/>
            <StyledText>Hi there! Welcome to my online resume. My name is Ella Hain and I'm a computer science major at Boston
                University. You can learn more about my educational background in
                the <strong><em>Education</em></strong> tab!</StyledText>
            <br/>
            <StyledText>Despite having a computer science background, I've become interested in the publishing industry and have
                been developing my skills through internships at different publishing houses! You can learn more about
                my work experience in the <strong><em>Work</em></strong> tab.</StyledText>
            <br/>
            <StyledText>While in University, I've become involved in many extracurriculars, but 2 have been my longest which you
                can learn more about in my <strong><em>Extracurriculars</em></strong> tab.</StyledText>
            <br/>
            <StyledText>Additionally, I have a mix of technical, design, and publishing skills which you can find on
                my <strong><em>Skills</em></strong> page!</StyledText>
            <br/><StyledText>I hope you enjoy learning more about me and thank you for being here!</StyledText>
        </StyledMain>
    );
}