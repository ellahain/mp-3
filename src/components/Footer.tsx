import styled from "styled-components";
import {Link} from "react-router";

const StyledFooter = styled.footer`
    background-color: #042A2B;
    color: white;
    padding: 2%;
    font: calc(2px + 1.25vw) "Roboto";
`

const StyledLink = styled(Link)`
color: lightgrey;
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved by Ella Hain <StyledLink to={`/`}>Credits</StyledLink> &#169;</p>
        </StyledFooter>
    );
}