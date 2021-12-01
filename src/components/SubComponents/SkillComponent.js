import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
`;
const SkillComponent = (props) => {
  const { title, component, textColor } = props.data;
  return (
    <Container text={textColor}>
      {component()}
      <h2>{title}</h2>
    </Container>
  );
};

export default SkillComponent;
