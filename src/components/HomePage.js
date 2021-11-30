import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import myImage from "../assets/Images/myImage.png";
import ParticleComponent from "./SubComponents/ParticleComponent";
import { motion } from "framer-motion";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  position: relative;
  overflow: hidden;
  z-index: 0;
`;

const CenterContainer = styled.div`
  width: 70%;
  line-height: 1.5;
  position: absolute;
  left: 50%;
  top: 22%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  z-index: 1;
  /* P */
  flex-direction: column;
  align-items: left;
  color: ${(props) => props.theme.text};
  font-weight: 800;

  h1 {
    font-size: calc(2rem + 3vw);
    /* SHADOW */
    /* text-shadow: 1px 6px 10px #080808; */
  }
  h3 {
    font-size: calc(1rem + 1.3vw);
    /* SHADOW */

    /* text-shadow: 1px 6px 10px #080808; */
  }
  @media (max-width: 800px) {
    gap: 2.5rem;
    align-items: flex-start;
  }
`;
const CenterProfile = styled.div`
  align-self: center;
  margin-top: 4vw;
  border: 2px solid ${(props) => props.theme.darkText};
  background-color: ${(props) => props.theme.darkText};
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  transition: all 0.4s;
  /* SHADOW */

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 1px 1px 8px 8px #080808;

    /* background-color: ${(props) => props.theme.text}; */
    img {
      /* transform: scale(1.05); */
    }
  }
  img {
    position: absolute;
    transition: all 0.4s;
    z-index: 2;
    bottom: -1.2%;
    width: 20rem;
    /* @media (max-width: 800px) {
      width: 14rem;
    } */
  }
  @media (max-width: 800px) {
    width: 14rem;
    height: 14rem;
    img {
      width: 14rem;
    }
  }
`;

const Work = styled(NavLink)`
  position: absolute;

  top: 50%;
  left: calc(3rem + 1vw);
  text-decoration: none;
  transform: translate(-50%, -50%) rotate(90deg);
  h2 {
    font-size: calc(2rem + 1.3vw);
  }
  color: ${(props) => props.theme.darkText};
  z-index: 1;
  @media (max-width: 800px) {
    top: 65%;
  }
`;
const Skills = styled(NavLink)`
  position: absolute;
  text-decoration: none;
  top: 50%;
  right: calc(0.5rem + 1vw);
  transform: rotate(-90deg) translateY(50%);
  h2 {
    font-size: calc(2rem + 1.3vw);
  }

  color: ${(props) => props.theme.darkText};
  z-index: 1;
  @media (max-width: 800px) {
    top: 65%;
  }
`;
const About = styled(NavLink)`
  position: absolute;
  text-decoration: none;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%);
  h2 {
    font-size: calc(2rem + 1.3vw);
  }

  color: ${(props) => props.theme.darkText};
  @media (max-width: 800px) {
    bottom: 5%;
  }
  z-index: 1;
`;
const HomePage = () => {
  return (
    <Container>
      <CenterContainer>
        <h1>Hey There! I am Ajay,</h1>
        <h3>a designer and developer</h3>
        <h3>who enjoys building great stuff!</h3>
        <CenterProfile>
          <img src={myImage} alt="Developer Profile Pic" className="noselect" />
        </CenterProfile>
      </CenterContainer>

      <Work to="/">
        <motion.h2
          whileHover={{
            scale: 1.1,
            transition: {
              delay: 0,
              type: "spring",
              mass: 0.4,
              stiffness: 200,
              damping: 1,
            },
          }}
          initial={{ y: 200 }}
          animate={{
            y: 0,
            transition: { type: "spring", delay: 0.6, duration: 1 },
          }}
        >
          Projects
        </motion.h2>
      </Work>

      <Skills to="/">
        <motion.h2
          whileHover={{
            scale: 1.1,
            transition: {
              delay: 0,
              type: "spring",
              mass: 0.4,
              stiffness: 200,
              damping: 1,
            },
          }}
          initial={{ y: 200 }}
          animate={{
            y: 0,
            transition: { type: "spring", delay: 0.6, duration: 1 },
          }}
          transition={{ type: "spring", delay: 0.6, duration: 1 }}
        >
          Skills
        </motion.h2>
      </Skills>
      <About to="/">
        <motion.h2
          whileHover={{
            scale: 1.1,
            transition: {
              delay: 0,
              type: "spring",
              mass: 0.4,
              stiffness: 200,
              damping: 1,
            },
          }}
          initial={{ y: 200 }}
          animate={{
            y: 0,
            transition: { type: "spring", delay: 0.6, duration: 1 },
          }}
          transition={{ type: "spring", delay: 0.6, duration: 1 }}
        >
          About
        </motion.h2>
      </About>
      <ParticleComponent />
    </Container>
  );
};

export default HomePage;
