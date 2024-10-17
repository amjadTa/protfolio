import React, { useState } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { DEATILS, LINKEDIN_URL } from 'data/personal';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SERVICE = 'service_76bix8h';
const TEMPLATE = 'template_r3wlzvg';
const USER = 'EuraADznh_VT8MGC3';

const Footer = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(SERVICE, TEMPLATE, { fullName, email, message }, USER)
      .then(
        () => {
          toast.success('Email send successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          setFullName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          toast.error('FAILED to send email, please try later!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        },
      );
  };

  return (
    <Container id="footer">
      <ProfileContainer>
        <Slide direction="left" delay={1}>
          <h1>Portfolio</h1>
        </Slide>
        <AddressContainer>
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>{DEATILS.Address}</p>
          </Slide>
        </AddressContainer>
        <ContactDeatilsContainer>
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+972505690866">{DEATILS.Phone}</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href={`mailto:${DEATILS.Email}`}>{DEATILS.Email}</a>
            </Slide>
          </div>
        </ContactDeatilsContainer>
        <SocialContainer>
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
          </div>
        </SocialContainer>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </ProfileContainer>
      <Form>
        <Slide direction="right">
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input value={fullName} type="text" placeholder="Fullname..." onChange={(e) => { setFullName(e.target.value) }} />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input value={email} type="email" placeholder="Email..." onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea value={message} cols="30" rows="10" placeholder="Message..." onChange={(e) => { setMessage(e.target.value) }}></textarea>
            </div>
            <button onClick={handleSendEmail}>Submit</button>
          </form>
        </Slide>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ProfileContainer = styled.div`
  flex: 1;

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
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

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;

const AddressContainer = styled.div`
  padding: 1rem 0;
  h1 {
    font-size: 1.2rem;
  }

  p {
    width: 60%;
    padding-top: 0.5rem;
    @media (max-width: 650px) {
      width: 100%;
    }
  }
`;

const ContactDeatilsContainer = styled.div`
  h1 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    a {
      text-decoration: none;
      color: lightgray;
      :hover {
        color: orange;
      }
    }
  }
`;

const SocialContainer = styled.div`
  h1 {
    font-size: 1.2rem;
    padding: 1rem 0;
  }

  .icons {
    display: flex;
    align-items: center;

    span {
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

      a {
        margin-top: 0.2rem;
        color: #fff;
      }
    }
  }
`;

const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;

const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;