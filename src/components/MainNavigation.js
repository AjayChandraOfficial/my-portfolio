import React from "react";
import styled from "styled-components";
import { Linkedin, Github } from "./SubComponents/AllSvgs";
import { NavLink } from "react-router-dom";
const Layout = styled.div`
  z-index: 1;
  width: 100vw;
  height: 5vw;
  padding-top: 2.5rem;
  position: fixed;
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
`;
const Line = styled.div`
  width: 10vw;
  border: 2px solid ${(props) => props.theme.darkText};
  background-color: ${(props) => props.theme.darkText};
`;
const MiddleLine = styled.div`
  width: 100%;
  border: 2px solid ${(props) => props.theme.darkText};
  background-color: ${(props) => props.theme.darkText};
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
const LinkedInContainer = styled(NavLink).attrs((_) => ({
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
`;
const GithubContainer = styled(LinkedInContainer).attrs((_) => ({
  target: "_blank",
  to: { pathname: "https://github.com/AjayChandraOfficial" },
}))``;
const MainNavigation = () => {
  return (
    <Layout>
      <Line />
      <Logo>
        <h2>Aj</h2>
      </Logo>
      <MiddleLine />
      <LinkedInContainer>
        <Linkedin />
      </LinkedInContainer>
      <GithubContainer>
        <Github />
      </GithubContainer>
      <Line />
    </Layout>
  );
};

export default MainNavigation;
