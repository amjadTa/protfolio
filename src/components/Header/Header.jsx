import React from 'react'
import styled from 'styled-components';
import { GiCandleFlame } from "react-icons/gi";

const Header = () => {
  return (
    <Container>
        <Logo>
            <LogoTitle>Amjad Tarif</LogoTitle>
        </Logo>
        <NavContainer>
            <Nav><NavUrl href="#home">Home</NavUrl></Nav>
            <Nav><NavUrl href="#about">About</NavUrl></Nav>
            <Nav><NavUrl href="#experience">Experience</NavUrl></Nav>
            <Nav><NavUrl href="#footer">Contact Me</NavUrl></Nav>
        </NavContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;

    @media(max-width: 840px){
        width: 90%;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const LogoSpan = styled.span`
    font-size: 1.8rem;
`;

const LogoTitle = styled.h1`
    font-weight: 600;
    font-size: 1.2rem;
`;

const NavContainer = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
`

const Nav = styled.span`
    margin-left: 1rem;
`;

const NavUrl = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    position: relative;
    :before{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
    }
    :hover:before{
        transform: scale(1);
        transform-origin: left;
    }
    :hover{
        opacity: 0.7;
    }
`;