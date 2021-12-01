import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 0rem; */
  h2 {
    font-size: calc(0.7rem + 1vw);
    font-weight: bold;
    color: ${(props) => props.text};
  }
  & > :first-child {
    transform: scale(0.7);
  }
  /* @media (max-width: 400px) {
    & > :first-child {
      transform: scale(0.5);
    } */
`;
const ContainerVariants = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    scale: [0.8, 1.2, 0.8, 1],
    transition: { type: "spring", duration: 1, delay: 0.4 },
  },
};
const SkillComponent = (props) => {
  const { title, component, textColor } = props.data;
  return (
    <Container text={textColor} variants={ContainerVariants}>
      {component()}
      <h2>{title}</h2>
    </Container>
  );
};

export default SkillComponent;
