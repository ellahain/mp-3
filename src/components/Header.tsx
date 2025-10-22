import styled from "styled-components";

/*Styling for header*/
const StyledHeader = styled.header`
    background-color: #042A2B;
    color: white;
    padding: 2%;
    font: calc(2px + 1.25vw) "Roboto";
    
    @media screen and (max-width: 1000px){
        text-align: center;
    }
`


export default function Header() {
    return(
        <StyledHeader>
            <h1>Ella's Resume</h1>
            <p>Welcome to my resume!</p>
        </StyledHeader>
    );
}