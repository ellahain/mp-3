//could put styling here
import styled from "styled-components";
import {StyledHeader} from "./Home.tsx";
import {StyledMain} from "./Home.tsx";

export const LeftBorders = styled.p `
    border-left: 2px solid #321325;
    padding-left: 1%;
`

const StyledTable = styled.table`
    margin: auto;
`
export const TableDetail = styled.td`
    text-align: left;
    padding-top: 5%;
    font-size: calc(2px + 1.25vw);
`

export default function Education () {
    return (
        <StyledMain>
            <title>Education | Resume</title>
            <StyledHeader>Education</StyledHeader>
            <StyledTable>
                <tr>
                    <TableDetail>
                        <LeftBorders>High School, Dover-Sherborn High School <br/> Graduated May 2022</LeftBorders>
                    </TableDetail>
                    <TableDetail>
                        <ul>
                            <li>Algebra 1 & 2</li>
                            <li>Geometry</li>
                            <li>Physics</li>
                            <li>Chemistry</li>
                            <li>Biology</li>
                            <li>Calculus AB</li>
                            <li>AP US History</li>
                            <li>AP Language & Composition</li>
                            <li>AP Literature</li>
                        </ul>
                    </TableDetail>
                </tr>
                <tr>
                    <TableDetail>
                        <LeftBorders>B.A. in Computer Science, Boston University <br/> Expected Dec 2025</LeftBorders>
                    </TableDetail>
                    <TableDetail>
                        <ul>
                            <li>Intro to CS 1 & 2</li>
                            <li>Discrete Mathematics</li>
                            <li>Geometric Algorithms</li>
                            <li>Intro to Computer Systems</li>
                            <li>Probability in Computing</li>
                            <li>Intro to the Analysis of Algorithms</li>
                            <li>Spark! Software Engineering Immersion</li>
                            <li>Software Engineering</li>
                            <li>Databases</li>
                            <li>Justice Media Co-Lab</li>
                        </ul>
                    </TableDetail>
                </tr>
            </StyledTable>
        </StyledMain>
    );
}