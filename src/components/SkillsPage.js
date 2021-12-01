import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { AllSKills } from "./SubComponents/AllSkills";
import SkillComponent from "./SubComponents/SkillComponent";
import ParticleComponent2 from "./SubComponents/ParticleComponent2";
import spaceman from "../assets/Images/spaceman.png";
import { NavLink } from "react-router-dom";
const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  /* position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0; */
  position: relative;
  overflow: hidden;

  background-color: ${(props) => props.theme.background};
`;
const Center = styled.div`
  width: 70%;
  position: absolute;
  overflow: hidden;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  h1 {
    color: ${(props) => props.theme.text};
    font-size: calc(2rem + 2vw);
  }
  @media (max-width: 800px) {
    h1 {
      font-size: calc(1rem + 4vw);
    }
  }
`;
const Line = styled(motion.div)`
  width: 30vw;

  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.text};
  @media (max-width: 800px) {
    width: calc(10rem + 20vw);
    /* display: none; */
  }
`;
const SkillsContainer = styled(motion.div)`
  width: 70%;
  height: 20%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  /* background-color: ${(props) => props.theme.text}; */
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr 1fr;
  row-gap: 2rem;
  & > :nth-child(9) {
    /* display: none;
     */
    grid-column: 3;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(6, 1fr);
    top: 50%;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    top: 35%;
    & > :nth-child(9) {
      /* display: none;
     */

      grid-column: 1;
    }
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    & > :nth-child(9) {
      /* display: none;
     */

      grid-column: 1;
    }
  }
  @media (max-width: 200px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(12, 1fr);
    & > :nth-child(9) {
      /* display: none;
     */
      grid-column: 1;
    }
  } ;
`;

const SkillsContainerVariants = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    transition: { type: "tween", when: "beforeChildren" },
  },
};
const float = keyframes`
0%{ transform:translateY(0)}
50%{ transform:translateY(20px)translateX(20px)}
100%{transform:translateY(0)}
`;

const Spaceman = styled.div`
  position: absolute;
  display: none;
  width: 10vw;
  right: 5%;
  top: 20%;
  animation: ${float} 5s ease infinite;
  img {
    width: 100%;
  }
  z-index: 5;
`;
const Home = styled(NavLink)`
  position: absolute;

  top: 50%;
  left: calc(3rem + 1vw);
  text-decoration: none;
  transform: translate(-50%, -50%) rotate(-90deg);
  h2 {
    font-size: calc(2rem + 1.3vw);
  }
  color: ${(props) => props.theme.darkText};
  @media (max-width: 800px) {
    top: 65%;
  }
  z-index: 3;
`;
const anim_BoxVariant = {
  exit: { x: 0, transition: { duration: 0.2 } },
};

const SkillsPage = () => {
  return (
    <Box exit={{ opacity: 0, transition: { duration: 0.8 } }}>
      <Center>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { type: "spring", duration: 1, delay: 0.2 },
          }}
          // exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          Technologies I use
        </motion.h1>
        <Line
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { type: "spring", duration: 1, delay: 0.2 },
          }}
          // exit={{ opacity: 0, transition: { duration: 0.4 } }}
        />
      </Center>
      <SkillsContainer
        variants={SkillsContainerVariants}
        initial="from"
        animate="to"
        // exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        {AllSKills.map((item) => (
          <SkillComponent key={item.id} data={item} />
        ))}
      </SkillsContainer>
      <ParticleComponent2 />
      <Spaceman>
        <img src={spaceman} alt="Astronaut" />
      </Spaceman>
      <Home to="/">
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
          initial={{ y: -200 }}
          animate={{
            y: 0,
            transition: { type: "spring", delay: 0.6, duration: 1 },
          }}
          exit={{ y: -200, transition: { duration: 0.6 } }}
        >
          Home
        </motion.h2>
      </Home>
    </Box>
  );
};

export default SkillsPage;
