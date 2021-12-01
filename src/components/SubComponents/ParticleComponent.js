import Particles from "react-particles-js";

import config from "../../assets/ParticleConfig/particlesjs-bg3.json";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1;
`;
const ParticleComponent = () => {
  return (
    <Container>
      <Particles style={{ position: "absolute", top: 0 }} params={config} />
    </Container>
  );
};

export default ParticleComponent;
