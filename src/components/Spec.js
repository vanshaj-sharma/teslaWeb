import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

export const Spec = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);
  return (
    <Wrapper>
      <Content>
        <div className="row">
          <div className="col" data-aos="fade-right">
            <img src="/images/game.jpg" alt="game" />
          </div>
          <div className="col text" data-aos="fade-left">
            <h3> Game from Anywhere </h3>
            <p>
              {" "}
              Up to 10 teraflops of processing power enables in-car gaming
              on-par with today’s newest consoles. Wireless controller
              compatibility lets you game from any seat.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text1" data-aos="fade-right">
            <h3> Stay Connected </h3>
            <p>
              {" "}
              Multi-device Bluetooth, wireless and USB-C charging for every
              passenger, with enough power to fast-charge your tablets and
              laptop.{" "}
            </p>
          </div>
          <div className="col" data-aos="fade-left">
            <img src="/images/connected.jpg" alt="connected" />
          </div>
        </div>
        <div className="row">
          <div className="col" data-aos="fade-right">
            <img src="/images/audio.jpg" />
          </div>
          <div className="col text" data-aos="fade-left">
            <h3> Your Best Audio System </h3>
            <p>
              {" "}
              Up to 10 teraflops of processing power enables in-car gaming
              on-par with today’s newest consoles. Wireless controller
              compatibility lets you game from any seat.{" "}
            </p>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 150vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  width: 80%;
  height: 80%;

  .row {
    display: flex;
    height: 40vh;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    width: 100%;
  }

  .col {
    width: 100%;
    h3 {
      color: white;
      font-weight: 400;
      font-size: 1.4rem;
      letter-spacing: 0.6px;
      padding: 20px 0;
      word-spacing: 2px;
    }
    p {
      color: white;
      font-weight: 300;
      font-size: 0.95rem;
      letter-spacing: 0.4px;
      word-spacing: 1.2px;
      line-height: 25px;
    }
  }

  .text {
    h3,
    p {
      padding-left: 120px;
      padding-right: 20px;
    }
  }
  .text1 {
    h3,
    p {
      padding-right: 120px;
    }
  }

  @media screen and (max-width: 750px) {
    .col {
      h3,
      p {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 96%;
    height: 96%;

    .col {
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.8rem;
        line-height: 18px;
      }
    }
  }
`;
