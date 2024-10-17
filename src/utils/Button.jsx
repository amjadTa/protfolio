import React from 'react';
import styled from "styled-components";

const Button = ({text, ...props}) => {
    return (
        <ButtonStyle {...props}>{text}</ButtonStyle>
    )
}

export default Button;

const ButtonStyle = styled.button`
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    border-radius: 15px;
    margin-bottom: 15px;

    :hover {
        filter: drop-shadow(0px 10px 10px #01be9570);
    }
`;