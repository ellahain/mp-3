import styled from "styled-components";
import {StyledMain} from "./Home.tsx";
import {StyledImage} from "./Work.tsx";
import {StyledHeader} from "./Home.tsx";

/*Unique styling for this page's table*/
const StyledTable = styled.table`
    padding: 18% 0 0 7%;
    margin: auto;
    width: 100%;
`

const StyledRow = styled.th`
    padding: 0 0 25% 0;
`

export default function Skills() {
    return (
        <StyledMain>
            <title>Skills | Resume</title>
            <StyledHeader>Skills</StyledHeader>
            <StyledTable>
                    <StyledRow>Python<br/><StyledImage src="/python.png" alt="Python Logo"/></StyledRow>
                    <StyledRow>Java<br/><StyledImage src="/javalogo.png" alt="Java Logo"/></StyledRow>
                    <StyledRow>C<br/><StyledImage src="/C_Logo.png" alt="C Logo"/></StyledRow>
                <tr>
                    <StyledRow>Figma <br/> <StyledImage src="/Figma-logo.png" alt="Figma Logo"/></StyledRow>
                    <StyledRow>Photoshop <br/> <StyledImage src="/photologo.png" alt="Photoshop Logo"/></StyledRow>
                    <StyledRow>Illustrator <br/> <StyledImage src="/illustrator.png" alt="Illustrator Logo"/></StyledRow>
                </tr>

            </StyledTable>
        </StyledMain>
    );
}