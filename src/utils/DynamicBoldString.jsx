import React from 'react';
import styled from "styled-components";

const DynamicBoldString = ({ text, isBlackText }) => {
  return (
    <Text dangerouslySetInnerHTML={{ __html: text }} isBlackText={isBlackText} />
  );
};

export default DynamicBoldString;

const Text = styled.p`
    color: ${props => props.isBlackText ? 'black' : 'white'}
`;
