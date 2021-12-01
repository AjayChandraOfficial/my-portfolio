import React from "react";
import styled from "styled-components";
import { AllProjects } from "./SubComponents/AllProjects";
import ProjectCard from "./SubComponents/ProjectCard";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Box = styled(motion.div)`
  height: 100vh;
  position: relative;

  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 1;
  @media (max-width: 800px) {
    overflow-y: scroll;
  }
`;

const LeftHeading = styled.div`
  position: fixed;
  overflow: hidden;
  left: 15%;
  top: 23%;
  h1 {
    color: ${(props) => props.theme.text};
    font-size: calc(2rem + 2vw);
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 600px) {
    left: 25%;
  }
`;
const Line = styled(motion.div)`
  position: fixed;
  left: 15%;
  top: 32%;
  width: 26%;
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.text};
  @media (max-width: 800px) {
    width: calc(10rem + 20vw);
    display: none;
  }
`;
const ProjectsContainer = styled(motion.div)`
  position: absolute;
  top: 45%;
  left: calc(4rem + 4vw);
  display: grid;
  grid-template-columns: repeat(4, minmax(calc(3rem + 3vw), 1fr));
  grid-gap: calc(3rem + 3vw);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: calc(3rem + 3vw);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: calc(5rem + 5vw);
  }
  @media (max-width: 600px) {
    top: 35%;
    left: 20%;
    grid-template-columns: repeat(1, 1fr);

    row-gap: calc(5rem + 5vw);
  }
  & > *:hover {
  }
`;

const Home = styled(NavLink)`
  position: absolute;

  top: 30%;
  right: calc(3rem + 1vw);
  text-decoration: none;
  transform: translate(50%, -50%) rotate(90deg);
  h2 {
    font-size: calc(2rem + 1.3vw);
  }
  color: ${(props) => props.theme.darkText};
  @media (max-width: 800px) {
    top: 65%;
  }
  z-index: 3;
`;

const anim_ProjectVariant = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const ProjectsPage = () => {
  return (
    <Box exit={{ x: -1000, transition: { duration: 0.8 } }}>
      <LeftHeading>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { type: "spring", duration: 1, delay: 0.2 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          My Projects
        </motion.h1>
        <Line
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { type: "spring", duration: 1, delay: 0.2 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        />
      </LeftHeading>
      <ProjectsContainer
        variants={anim_ProjectVariant}
        initial="from"
        animate="to"
        exit="exit"
      >
        {AllProjects.map((item) => (
          <ProjectCard key={item.id} data={item}></ProjectCard>
        ))}
      </ProjectsContainer>
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
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          Home
        </motion.h2>
      </Home>
    </Box>
  );
};

export default ProjectsPage;
