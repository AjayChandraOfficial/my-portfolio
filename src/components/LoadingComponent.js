import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #e9ce5d;
  background-color: #121212;
  h1 {
    color: #121212;
    color: #e9ce5d;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: calc(2.5rem + 2.5vw);
  }
`;
const LoadingComponent = () => {
  return (
    <Box>
      <h1>Loading...</h1>
    </Box>
  );
};

export default LoadingComponent;
