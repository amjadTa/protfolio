import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Icons } from 'utils/skills-icons';
import { PROFISSIONAL_ABOUT, PERSONAL_ABOUT, VOLUNTEERING } from 'data/intro-about';
import DynamicBoldString from 'utils/DynamicBoldString';
import PdfDownloadFile from 'helpers/PdfDownloadFile';
import Button from 'utils/Button';

const About = () => {
  const handleLetsTalkClick = () => {
    window.location.replace('#footer');
  };

  return (
    <Container id="about">
      <Slide direction="left">
        <TextContainer>
          <Title className="green">About my experience</Title>
          {PROFISSIONAL_ABOUT.map((item, index) => {
            return (
              <DynamicBoldString key={index} text={item} />
            )
          })}
          <br />
          <SkillsIcons>
            {Icons.map((icon, index) => {
              return (
                <Div key={index}>
                  {icon.icon}
                  <Div key={index} className="label-tooltip">
                    {icon.name}
                  </Div>
                </Div>
              );
            })}
          </SkillsIcons>
          <PdfDownloadFile />
        </TextContainer>
      </Slide>
      <Slide direction="right">
        <TextContainer>
          <Title className="green">About my self</Title>
          {PERSONAL_ABOUT.map((item, index) => {
            return (
              <DynamicBoldString key={index} text={item} />
            )
          })}
          {VOLUNTEERING.map((item, index) => {
            return (
              <DynamicBoldString key={index} text={item} />
            )
          })}
          <br />
          <Button text={`Let's talk`} onClick={handleLetsTalkClick} />
        </TextContainer>
      </Slide>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Secular One", sans-serif;
  letter-spacing: 2px;
`;

const SkillsIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const Div = styled.div``;
