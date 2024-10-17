import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { LINKEDIN_URL } from 'data/personal';
import { JOB_TITLE, INTRO } from 'data/intro-about';

const Intro = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <TextContainer>
          <SubTitle>
            Hello <span className="green">I'am</span>
          </SubTitle>
          <Title className="green">Amjad Tarif</Title>
          <JobTitle>{JOB_TITLE}</JobTitle>
          <IntroDescription>
            {INTRO}
          </IntroDescription>
          <Social>
            <SocialTitle>Check out my</SocialTitle>
            <IconsContainer>
              <Icon>
                <IconUrl href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </IconUrl>
              </Icon>
            </IconsContainer>
          </Social>
        </TextContainer>
      </Slide>
      <Slide direction="right">
        <Profile>
          <ProfileImg
            src='/assets/images/Amjad.jpeg'
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default Intro;

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

const SubTitle = styled.h4`
  padding: 1rem 0;
  font-weight: 500;
`;

const JobTitle = styled.h3`
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
`

const IntroDescription = styled.p`
  font-weight: 300;
`
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SocialTitle = styled.p`
  font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
`

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  border-radius: 50px;

  :hover {
    background-color: orange;
  }
`;

const IconUrl = styled.a`
  margin-top: 0.2rem;
  color: #fff;
`;

const Profile = styled.div``;

const ProfileImg = styled.img`
  width: 25rem;
  border-radius: 50px;
  filter: drop-shadow(0px 10px 10px #01be9570);
  transition: transform 400ms ease-in-out;

  @media (max-width: 790px) {
    width: 20rem;
  }

  @media (max-width: 660px) {
    width: 18rem;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  :hover {
    transform: translateY(-10px);
  }
`;