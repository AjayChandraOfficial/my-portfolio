import React from "react";
import { NavLink } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import styled from "styled-components";
import { motion } from "framer-motion";
const MainContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;

  @media (max-width: 700px) {
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const BottomContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  /* CHANGE BOTTOM HEIGH HERE */
  height: 15%;
  background-color: ${(props) => props.theme.darkText};
  @media (max-width: 700px) {
    right: 0;
    position: fixed;
    /* top: 20; */
    bottom: 25%;
    width: 25%;
    height: 30%;
    border-radius: 15px;
  }
`;
const ContactCard = styled(motion.div)`
  position: absolute;
  bottom: 10;
  width: 40%;
  height: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Change card color here */
  background-color: #353535;
  border-radius: 15px;
  box-shadow: 8px 4px 8px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    color: ${(props) => props.theme.darkText};
    font-size: calc(2rem + 1vw);
    text-shadow: 5px 4px 5px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 700px) {
    background: none;
    box-shadow: none;
    top: 50%;
    width: 40%;
    left: 50%;
    flex-direction: column;
    justify-content: space-evenly;
    h1 {
      display: inline-block;
      color: ${(props) => props.theme.background};
      font-size: calc(2rem + 1vw);
      text-shadow: none;
    }
  }
`;
const ContactButton = styled(NavLink)`
  cursor: pointer;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.darkText};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 12px 15px;
  width: 10rem;

  font: inherit;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.03rem;
  transition: all 0.1s;
  &:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.text};
    box-shadow: 8px 4px 8px 3px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 700px) {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.darkText};
    width: calc(5rem + 5vw);
  }
  @media (max-width: 400px) {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.darkText};
    width: calc(3rem + 3vw);
    align-items: center;
    justify-content: center;
  }
`;
const AboutContainer = styled(motion.div)`
  backdrop-filter: blur(10px);
  position: absolute;
  left: calc(6rem + 5vw);
  top: 20%;
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    flex-direction: column;
    height: 100%;
    gap: 2rem;
  }
  @media (max-width: 400px) {
    left: calc(3rem + 3vw);
  }
`;
const About = styled(motion.div)`
  border-radius: 14px;
  border: 3px solid ${(props) => props.theme.darkText};
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  h1 {
    color: ${(props) => props.theme.darkText};
    font-size: calc(2rem + 1vw);
    align-self: center;
  }
  h3 {
    color: ${(props) => props.theme.darkText};
    font-size: calc(1rem + 1vw);
  }
  @media (max-width: 400px) {
    padding: 0 1rem;
    width: 60%;
  }
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.darkText};
  font-family: inherit;
  font-weight: bold;
  font-size: calc(0.5rem + 1vw);
`;
const Resume = styled(motion.div)`
  border-radius: 14px;
  border: 3px solid ${(props) => props.theme.darkText};
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  ul {
    padding: 0 2rem;
    margin-top: -4rem;
  }
  h3 {
    color: ${(props) => props.theme.darkText};
    font-size: calc(1rem + 1vw);
  }
  @media (max-width: 400px) {
    padding: 0 1rem;
    width: 60%;
  }
`;

const ResumeButton = styled(ContactButton)`
  background: none;
  border: 1px solid ${(props) => props.theme.darkText};
  padding: 10px 10px;
  width: 8rem;
  h4 {
    color: ${(props) => props.theme.darkText};
    font-size: 1.5rem;
  }
  &:hover {
    transform: scale(1);
    background-color: ${(props) => props.theme.darkText};
    box-shadow: 8px 4px 8px 3px rgba(0, 0, 0, 0.25);
    h4 {
      color: ${(props) => props.theme.background};
    }
  }
  @media (max-width: 400px) {
    width: 4rem;
    h4 {
      font-size: 1rem;
    }
  }
`;
const Home = motion(styled(NavLink)`
  position: absolute;
  text-decoration: none;
  top: 0%;
  left: 50%;
  transform: translate(-50%);
  h2 {
    font-size: calc(2rem + 1.3vw);
  }

  color: ${(props) => props.theme.darkText};
  @media (max-width: 800px) {
    bottom: 5%;
  }
  z-index: 3;
`);
const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: calc(0.8rem + 1vw);
  }
  @media (max-width: 400px) {
    padding: 0 1rem;
    flex-direction: column;
  }
`;

const AboutContainerVariants = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const AboutChildrenVaraints = {
  from: { opacity: 0 },
  to: {
    opacity: 1,

    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
const BottomContainerVariants = {
  from: { y: 1000 },
  to: { y: 0, transition: { when: "beforeChildren", duration: 1 } },
};
const BottomContainerChildVariants = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};
const AboutPage = () => {
  return (
    <MainContainer exit={{ y: 1000, transition: { duration: 0.8 } }}>
      <MainNavigation exit={{ opacity: 0, transition: { duration: 0.4 } }} />
      <AboutContainer
        variants={AboutContainerVariants}
        initial="from"
        animate="to"
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        <About variants={AboutChildrenVaraints}>
          <h1>About me</h1>
          <h3>
            I am a frontend developer based in India, I love to create simple
            yet beautiful websites with great user experience.
          </h3>
          <h3>
            I love designing & implementing highly-responsive user interface
            components using ReactJS.
          </h3>
        </About>
        <Resume variants={AboutChildrenVaraints}>
          <h3>My key skills include:</h3>
          <ul>
            <ListItem>Coding</ListItem>
            <ListItem> Debugging</ListItem>
            <ListItem> Webpage Designing</ListItem>
            <ListItem> Webpage optimization</ListItem>
            <ListItem>Graphic Designing</ListItem>
          </ul>
          <ResumeContainer>
            <h3>Checkout my Resume here</h3>
            <ResumeButton
              target="_blank"
              to={{ pathname: "mailto:ajaychandraofficial@gmail.com" }}
            >
              <h4>Resume</h4>
            </ResumeButton>
          </ResumeContainer>
        </Resume>
      </AboutContainer>
      <BottomContainer
        variants={BottomContainerVariants}
        initial="from"
        animate="to"
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        <ContactCard variants={BottomContainerChildVariants}>
          <h1>Let's talk?</h1>

          <ContactButton
            target="_blank"
            to={{ pathname: "mailto:ajaychandraofficial@gmail.com" }}
          >
            <h3>Contact me</h3>
          </ContactButton>
        </ContactCard>
      </BottomContainer>
      <Home to="/">
        <motion.h2
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          Home
        </motion.h2>
      </Home>
    </MainContainer>
  );
};

export default AboutPage;
