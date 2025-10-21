import styled from "styled-components";
import {StyledMain} from "./Home.tsx";
import {StyledHeader} from "./Home.tsx";



const StyledList = styled.ul `
    list-style: none;
    padding-left: 0;
`

export const StyledImage = styled.img `
    max-width: 100%;
    padding-top: 5%;
`


export default function Work () {
    return (
        <StyledMain>
            <title>Work | Resume</title>
            <StyledHeader>Work Experience</StyledHeader>
            <StyledImage src="/beacon.png" alt="Beacon Press Logo"/>
                <h4>Audiobook Production Intern at Beacon Press</h4>
                <StyledList>
                    <li>Research the audiobook industry for the latest methods and trends</li>
                    <li>Manage an audiobook production schedule</li>
                    <li>Develop future production strategies</li>
                </StyledList>

                <StyledImage src="/hachette.png" alt="Hachette and Storey Logo"/>
                    <h4>Marketing and Publicity Intern at Hachette Book Group</h4>
                    <StyledList>
                        <li>Wrote marketing copy for backlist titles</li>
                        <li>Helped create Amazon A+ content</li>
                        <li>Assisted with publicity campaigns</li>
                    </StyledList>

                    <StyledImage src="/insourcelogo.png" alt="Insource Logo"/>
                        <h4>Information Technology Intern at Insource Services</h4>
                        <StyledList>
                            <li>Provisioned devices</li>
                            <li>Learned Microsoft AD</li>
                        </StyledList>
        </StyledMain>
    );
}