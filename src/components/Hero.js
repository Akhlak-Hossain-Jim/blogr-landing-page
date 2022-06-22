import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Hero() {
  return (
    <Container>
      <Header />
      <div className="hero_content">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="hero_content__buttons">
          <button>Start for Free</button>
          <button>Learn more</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("/images/intro-bg-desktop.svg"), var(--gradient-1);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 100% auto;
  border-bottom-left-radius: 100px;
  @media (max-width: 548px) {
    background-image: url("/images/intro-bg-mobile.svg"), var(--gradient-1);
  }
  .hero_content {
    padding: 66px 38px 155px 37px;
    text-align: center;
    @media (max-width: 548px) {
      padding: 54px 38px 155px 37px;
    }
    & > h1 {
      font-weight: 600;
      font-size: 64px;
      line-height: 81px;
      letter-spacing: -0.04em;
      color: var(--text);
      padding-bottom: 12px;
      @media (max-width: 548px) {
        font-size: 36px;
        line-height: 125%;
        padding-bottom: 15px;
      }
    }
    & > p {
      font-weight: 300;
      font-size: 20px;
      line-height: 25px;
      color: #ffffff;
      @media (max-width: 548px) {
        font-size: 18px;
        line-height: 23px;
      }
    }
    &__buttons {
      padding-top: 47px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;
      & > button {
        &:first-child {
          padding: 15px;
          padding-left: 17px;
          border-radius: 24px;
          background-color: var(--text);
          color: var(--cta-text);
          border: none;
          outline: none;

          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: 0.02em;
          font-family: var(--font-secondary);
          &:hover {
            background: var(--cta-hover-bg);
            color: var(--text);
          }
        }
        &:nth-child(2) {
          padding: 14px 23px 14px 24px;
          border-radius: 24px;
          background-color: transparent;
          color: var(--text);
          border: 1px solid var(--text);
          outline: none;

          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: 0.02em;
          font-family: var(--font-secondary);
          &:hover {
            background-color: var(--text);
            color: var(--cta-text);
          }
        }
      }
    }
  }
`;
