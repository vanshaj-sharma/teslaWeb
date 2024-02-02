import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  range,
  speed,
  top,
  hp,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <div>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              {leftBtnText && <LeftButton>{leftBtnText}</LeftButton>}
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </ButtonGroup>
          </Fade>

          {range && (
            <ContentDiff>
              <div className="Info-bar">
                <div className="Specs">
                  <h2>{range} mi</h2>
                  <p>Range (EPA est.)</p>
                </div>
                <div className="Specs">
                  <h2>{speed}s</h2>
                  <p>0-60 mph*</p>
                </div>
                <div className="Specs">
                  <h2>{top} mph</h2>
                  <p>Top Speed</p>
                </div>
                {hp && (
                  <div className="Specs hp">
                    <h2>{hp} hp</h2>
                    <p>Peak Power</p>
                  </div>
                )}
                <div className="order_btn">
                  <button> ORDER NOW </button>
                </div>
              </div>
            </ContentDiff>
          )}
          <Fade bottom>
            <DownArrow src="/images/down-arrow.svg" />
          </Fade>
        </Buttons>
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  ${"" /* margin-top: 20px; */}
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;

const ContentDiff = styled.div`
  .Info-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    h2 {
      color: white;
      font-weight: 400;
      font-size: 1.8rem;
      letter-spacing: 0.6px;
    }
    p {
      padding-top: 8px;
      color: white;
      font-weight: 200;
      font-size: 0.8rem;
      letter-spacing: 0.3px;
    }
    button {
      outline: none;
      border: white solid 4px;
      border-radius: 20px;
      padding: 8px 55px;
      background-color: transparent;
      color: white;
      transition: all 300ms ease-in;
      cursor: pointer;
      :hover {
        background-color: white;
        color: #141414;
      }
    }

    @media screen and (max-width: 600px) {
      .hp {
        display: none;
      }
      .order_btn {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 20px;
      }
      button {
        width: 90%;
        padding: 10px auto;
      }
      .Specs {
        margin: 10px 12px;
      }
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
  .Specs {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 40px;
  }

  animation: transform 1s;
  animation-timing-function: ease-in;
  @keyframes transform {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;
