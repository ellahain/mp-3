import {Link} from "react-router";
import styled from 'styled-components';



/*learned how to do media screens in these styled components from Medium: https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172*/
const StyledNav = styled.nav`
    background-color: #916C80;
    width: 30%;
    
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`

const StyledList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    color: white;
    @media screen and (max-width: 1000px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

const StyledItem = styled.li`
    border: 3px solid #321325;
    background-color: #321325;
    text-decoration: none;
    color: white;
    margin-top: 20%;
    padding: 3%;
    text-align: center;
    font: calc(2px + 2vw) "Roboto Condensed", sans-serif;
    
    @media screen and (max-width: 1000px) {
        border: 3px solid #321325;
        background-color: #321325;
        margin-top: 0;
        padding: 0;
    }
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font: calc(2px + 2vw) "Sniglet", system-ui;
`




export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledItem><StyledLink to={`/`}>Home</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/education`}>Education</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/work`}>Work</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/projects`}>Projects</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/skills`}>Skills</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/extracurriculars`}>Extracurriculars</StyledLink></StyledItem>
            </StyledList>
        </StyledNav>
    );
}