import React from "react";
import styled from "styled-components";
import { Linkedin, Github } from "./SubComponents/AllSvgs";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Layout = styled(motion.div)`
  width: 100vw;
  height: 5vw;
  padding-top: 2.5rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: calc(1rem + 1vw);
  @media (max-width: 800px) {
    /* padding: 2.5rem 0; */
    padding-top: 5rem;
  }
  h1 {
    color: white;
    font-size: 4.5rem;
  }
  z-index: 2;
`;
const Line = styled(motion.div)`
  width: 10vw;
  border: 2px solid ${(props) => props.theme.darkText};
  background-color: ${(props) => props.theme.darkText};
`;
const MiddleLine = styled(motion.div)`
  width: 100%;
  border: 2px solid ${(props) => props.theme.darkText};
  background-color: ${(props) => props.theme.darkText};
  align-self: center;
  justify-self: center;
  text-align: center;
`;
const Logo = styled.div`
  padding-bottom: 1.5rem;
  h2 {
    font-family: "Rochester", cursive;
    font-weight: light;
    font-size: calc(4rem + 2.5vw);
    /* //CALCULATE */
    color: ${(props) => props.theme.darkText};
  }
`;
const LinkedInContainer = motion(styled(NavLink).attrs((_) => ({
  target: "_blank",
  to: { pathname: "https://www.linkedin.com/in/g-ajay-chandra/" },
}))`
  & > * {
    width: 4.8rem;
    height: 4.8rem;
    color: ${(props) => props.theme.darkText};
    transition: all 0.2s;
    @media (max-width: 800px) {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
  & > *:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`);
const GithubContainer = styled(LinkedInContainer).attrs((_) => ({
  target: "_blank",
  to: { pathname: "https://github.com/AjayChandraOfficial" },
}))``;

const MainNavigation = () => {
  return (
    <Layout exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <Line
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />
      <Logo>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [0.8, 1.2, 0.8, 1] }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Aj
        </motion.h2>
      </Logo>
      <MiddleLine
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <LinkedInContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [0.8, 1.2, 0.8, 1] }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Linkedin />
      </LinkedInContainer>
      <GithubContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [0.8, 1.2, 0.8, 1] }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Github />
      </GithubContainer>
      <Line
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />
    </Layout>
  );
};

export default MainNavigation;
