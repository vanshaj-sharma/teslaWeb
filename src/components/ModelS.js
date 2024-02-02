import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { Spec } from "./Spec";
import { Interior } from "./Interior";
import Header from "./Header";

const ModelS = () => {
  document.title = "Model S | Tesla";
  return (
    <Wrapper>
      <Header />
      <Content>
        <Section
          title="Model S"
          desc="Plaid"
          backgroundImg="model-s.jpg"
          arrow="true"
          range="396"
          speed="1.99"
          top="200"
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

export default ModelS;
