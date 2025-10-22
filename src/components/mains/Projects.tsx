import {useState} from "react";
import useResult from "./useResult.ts";
import styled from "styled-components";
import {StyledMain} from "./Home.tsx";

const StyledInput = styled.input`
    width: 60%;
    height: 8vh;
    border: #FFFFFF 4px solid;
    background-color: transparent;
    text-align: center;
    margin: 2% auto;
    display: block;
    color: white;
    font: calc(2px + 2vw) "Permanent Marker", cursive;
`

/*This page has a unique main header*/
const StyledHeader = styled.h3`
    font: calc(5px + 2vw) "Roboto", sans-serif;
    color: white;
`

const StyledLabel = styled.label`
    color: white;
    font: calc(2px + 2vw) "Permanent Marker", cursive;
`
/*This page has an image as the background*/
const StyledBack = styled(StyledMain)`
    background-image: url("/classroom.jpg");
    @media screen and (max-width: 1000px) {
        height: 100vh;
        width: 100%;
        padding: 3%;
    }
`

/*Div for holding calculator contents*/
const StyledDiv = styled.div`
    width: 75%;
    margin: 15% auto;
`
const StyledButton = styled.button`
    width: 10%;
    height: 5%;
    color: white;
    background: transparent;
    border: none;
    font: calc(2px + 2vw) "Permanent Marker", cursive;
`

const StyledPositive = styled.h3`
    color: white;
    font: calc(2px + 2vw) "Permanent Marker", cursive;
`

const StyledNegative = styled.h3`
    color: red;
    font: calc(2px + 2vw) "Permanent Marker", cursive;
`

export default function Projects() {


    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");


    function addition() {
        setResult(String(Number(first)+Number(second)));
    }

    function subtraction() {
        setResult(String(Number(first)-Number(second)));
    }
    function multiplication() {
        setResult(String(Number(first)*Number(second)));
    }
    function division() {
        setResult(String(Number(first)/Number(second)));
    }

    function myPower() {
        let result = 1;

        for (let i = 0; i<Number(second);i++){
            result = result*Number(first)
        }
        setResult(String(result));

    }

    function myClear() {
        setFirst("");
        setSecond("");
        setResult("");

    }

    const isPositive = useResult(result);


    return (
        <StyledBack>
            <title>Projects | Resume</title>
            <StyledHeader>Projects: Classroom Calculator</StyledHeader>
            <StyledDiv>
                <StyledLabel>First Number</StyledLabel>
                <StyledInput onChange={(e) => setFirst(e.target.value)} value={first}/>
                <StyledLabel>Second Number</StyledLabel>
                <StyledInput onChange={(e) => setSecond(e.target.value)} value={second}/>
                <StyledButton onClick={addition}>+</StyledButton>
                <StyledButton onClick={subtraction}>-</StyledButton>
                <StyledButton onClick={multiplication}>*</StyledButton>
                <StyledButton onClick={division}>/</StyledButton>
                <StyledButton onClick={myPower}>**</StyledButton>
                <StyledButton onClick={myClear}>Clear</StyledButton>
                {isPositive ? <StyledPositive>{result}</StyledPositive> : <StyledNegative>{result}</StyledNegative>}
            </StyledDiv>
        </StyledBack>
    );
}