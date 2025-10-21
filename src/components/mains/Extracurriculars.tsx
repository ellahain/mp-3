import styled from "styled-components";
import {StyledMain} from "./Home.tsx";
import {StyledImage} from "./Work.tsx";
import {StyledHeader} from "./Home.tsx";

const LeftBorders = styled.p `
    border-left: 2px solid #321325;
    padding-left: 1%;
`

const TableDetail = styled.td`
    text-align: left;
    padding-top: 5%;
    font-size: calc(2px + 1.25vw);
`

const TableList = styled.ul `
    padding-left: 20%;
    text-align: left;
`


export default function Extracurriculars() {
    return (
        <StyledMain>
            <title>Extracurriculars | Resume</title>
            <StyledHeader>Extracurriculars</StyledHeader>
            <table>
                <tbody>
                    <tr>
                        <TableDetail>
                            <LeftBorders>Boston University Spark!</LeftBorders>
                            <TableList>
                                <li>DEI Ambassador</li>
                                <li>PM of Ignite Council</li>
                                <li>Space Ambassador</li>
                            </TableList>
                        </TableDetail>
                        <TableDetail>
                            <StyledImage className="extra-img" src="/spark1.jpg"
                                 alt="3 BU Students Standing in Front of Whiteboard"/>
                        </TableDetail>
                        <TableDetail>
                            <StyledImage className="extra-img" src="/spark2.jpg" alt="Group of Spark Employees"/>
                        </TableDetail>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <TableDetail>
                            <LeftBorders>FORGE Design Studios</LeftBorders>
                            <TableList>
                                <li>Project Manager</li>
                                <li>Program Coordinator</li>
                                <li>VP of Finance</li>
                            </TableList>
                        </TableDetail>
                        <TableDetail>
                            <StyledImage className="extra-img" src="/forge1.png" alt="FORGE E-Board"/>
                        </TableDetail>
                        <TableDetail>
                            <StyledImage className="extra-img" src="/forge2.jpg" alt="FORGE E-Board at Splash"/>
                        </TableDetail>
                    </tr>
                </tbody>
            </table>
        </StyledMain>
    );
}