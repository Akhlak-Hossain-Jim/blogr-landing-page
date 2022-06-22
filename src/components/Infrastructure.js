import React from "react";
import styled from "styled-components";

export default function Infrastructure() {
  return (
    <Container>
      <div className="infrastructure_container">
        <div className="infrastructure_container__left">
          <img
            src="/images/illustration-phones.svg"
            alt="phones illustration"
          />
        </div>
        <div className="infrastructure_container__right">
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("/images/infrastructure-bg-desktop.svg"),
    var(--gradient-2);
  background-position: top left;
  border-radius: 0 100px;
  background-repeat: no-repeat;
  background-size: auto;
  margin-bottom: 117px;
  @media (max-width: 548px) {
    background-image: url("/images/infrastructure-bg-mobile.svg"),
      var(--gradient-2);
    margin-bottom: 80px;
  }
  .infrastructure_container {
    width: min(1190px, 100%);
    margin: 0 auto;
    padding-right: 56px;
    display: flex;
    align-items: center;
    gap: 58px;
    @media (max-width: 548px) {
      padding: 0;
      margin: auto;
      padding: 0;
      flex-direction: column;
      gap: 0;
    }
    &__left {
      width: min(552px, 100%);
      margin: -69px 0 -110px;
      @media (max-width: 548px) {
        margin: -186px 0 8.27px;
      }
      & > img {
        width: 100%;
        height: auto;
      }
    }
    &__right {
      width: min(524px, 100%);
      color: var(--text);
      @media (max-width: 548px) {
        text-align: center;
        padding: 0 29px 114px;
      }
      & > h2 {
        font-weight: 600;
        font-size: 40px;
        line-height: 175%;
        letter-spacing: -0.037em;
      }
      & > p {
        font-weight: 300;
        font-size: 16px;
        line-height: 175%;
        letter-spacing: 0.031em;
      }
    }
  }
`;
