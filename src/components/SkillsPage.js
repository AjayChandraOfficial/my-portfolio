import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { AllSKills } from "./SubComponents/AllSkills";
import SkillComponent from "./SubComponents/SkillComponent";
const Box = styled.div`
  width: 100vw;
  height: 100vh;
  /* position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0; */
  background-color: ${(props) => props.theme.background};
`;
const Center = styled.div`
  width: 70%;
  position: absolute;
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
const SkillsContainer = styled.div`
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
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
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
const SkillsPage = () => {
  return (
    <Box>
      <Center>
        <h1>Technologies I use</h1>
        <Line />
      </Center>
      <SkillsContainer>
        {AllSKills.map((item) => (
          <SkillComponent key={item.id} data={item} />
        ))}
      </SkillsContainer>
    </Box>
  );
};

export default SkillsPage;
