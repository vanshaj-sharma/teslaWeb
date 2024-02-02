import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { Spec } from "./Spec";
import { Interior } from "./Interior";
import Header from "./Header";

const ModelY = () => {
  document.title = "Model Y | Tesla";
  return (
    <Wrapper>
      <Header />
      <Content>
        <Section
          title="Model Y"
          backgroundImg="model_y_1.jpeg"
          arrow="true"
          range="330"
          speed="3.5"
          top="155"
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

export default ModelY;
