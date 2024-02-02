import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { Spec } from "./Spec";
import { Interior } from "./Interior";

const Model3 = () => {
  document.title = "Model 3 | Tesla";
  return (
    <Wrapper>
      <Content>
        <Section
          title="Model 3"
          backgroundImg="model3_2.jpeg"
          arrow="true"
          range="358"
          speed="3.1"
          top="162"
        />
      </Content>
      <Content>
        <Interior />
      </Content>
      <Content>
        <Spec />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Content = styled.div``;

export default Model3;
