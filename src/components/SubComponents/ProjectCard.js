import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
const Card = styled(motion.div)`
  display: inline-block;
  width: 75%;
  height: 35vh;
  background-color: ${(props) => props.theme.text};
  border-radius: 15px;
  border: 2px solid ${(props) => props.theme.text};
  padding: 1.5rem;
  padding-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 1;
  h1 {
    color: ${(props) => props.theme.background};
    font-size: calc(1.2rem + 1vw);
    font-weight: 700;
    /* position: absolute;
    top: 5%; */
  }
  h3 {
    align-self: left;
    margin-top: 5%;
    font-size: calc(0.7rem + 0.5vw);
    line-height: 2.3rem;
    /* position: absolute;
    top: 20%; */
  }

  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.background};
    h1 {
      color: ${(props) => props.theme.text};
    }
    h3 {
      color: ${(props) => props.theme.text};
    }
  }
  @media (max-width: 800px) {
    width: 60%;
    h3 {
      font-size: calc(0.8rem + 0.8vw);
    }
    h1 {
      font-size: calc(1.4rem + 0.8vw);
    }
  }
  @media (max-width: 600px) {
    width: 40%;
  }
  @media (max-width: 400px) {
    width: 55%;
  }
`;
const Line = styled.div`
  width: 100%;
  /* position: absolute;
  top: 60%; */
  border: 2px solid ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.background};
  margin-top: 12%;
  ${Card}:hover & {
    background-color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.text};
  }
`;
const StyledButton = styled(Link).attrs((props) => ({
  target: "_blank",
  to: { pathname: props.link },
}))`
  cursor: pointer;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  text-decoration: none;
  align-self: flex-end;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin-top: 12%;
  width: 6rem;
  /* position: absolute;
  top: 70%;
  right: 10%; */
  font: inherit;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 0.03rem;
  ${Card}:hover & {
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme.text};
  }
`;

const anim_CardVariant = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    scale: [0.8, 1.5, 0.8, 1],
    transition: {
      duration: 0.7,
    },
  },
  hover: {
    scale: 0.8,
    transition: {
      duration: 0.1,
    },
  },
};

const ProjectCard = (props) => {
  const { title, description, link } = props.data;
  return (
    <Card variants={anim_CardVariant}>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <Line />
      <StyledButton link={link}>Visit</StyledButton>
    </Card>
  );
};

export default ProjectCard;
