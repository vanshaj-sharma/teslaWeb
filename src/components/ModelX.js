import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { Spec } from "./Spec";
import { Interior } from "./Interior";
import Header from "./Header";

const ModelX = () => {
  document.title = "Model X | Tesla";
  return (
    <Wrapper>
      <Header />
      <Content>
        <Section
          title="Model X"
          desc="Plaid"
          backgroundImg="model-x.jpg"
          arrow="true"
          range="333"
          speed="2.5"
          top="175"
          hp="1,020"
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

export default ModelX;
