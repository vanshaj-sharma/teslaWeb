import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

export const Interior = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);
  return (
    <Wrapper>
      <div className="title">
        <h1 data-aos="fade-up">All-New Interior</h1>
      </div>
      <Content></Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  .title {
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    h1 {
      color: white;
      font-weight: 500;
      letter-spacing: 0.8px;
      font-size: 2rem;
    }
  }
`;

const Content = styled.div`
  background-image: url("/images/new-interior.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  height: 85vh;
`;
