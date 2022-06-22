import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <div className="about__left">
        <img src="/images/about-bg-desktop.svg" alt="about illustration" />
        <img src="/images/about-bg-mobile.svg" alt="about illustration" />
      </div>
      <div className="about__right">
        <h3 className="about__right_title">Free, open, simple</h3>
        <p className="about__right_description">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h3 className="about__right_title">Powerful tooling</h3>
        <p className="about__right_description">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: min(1325px, 100%);
  padding-right: 50px;
  margin-right: auto;
  margin-bottom: 302px;
  @media (max-width: 548px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 94px;
  }
  .about {
    &__left {
      position: absolute;
      top: 0;
      left: 0;
      width: 46.038%;
      height: 100%;
      @media (max-width: 548px) {
        position: unset;
        width: 100%;
        height: auto;
      }
      & > img {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
        &:first-child {
          @media (max-width: 548px) {
            display: none;
          }
        }
        &:nth-child(2) {
          @media (min-width: 549px) {
            display: none;
          }
        }
      }
    }
    &__right {
      width: min(537px, 100%);
      padding: 30px 0 0;
      margin-left: auto;
      @media (max-width: 548px) {
        padding: 52px 26px 0 35px;
      }
      &_title {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        letter-spacing: -0.008em;
        color: var(--heading);
        padding: 75px 0 0;
        @media (max-width: 548px) {
          line-height: 32px;
          text-align: center;
          padding: 43px 16px 0;
        }
      }
      &_description {
        padding: 25px 0 0;
        font-weight: 300;
        font-size: 16px;
        line-height: 175%;
        letter-spacing: 0.03em;
        color: var(--body-text);
        @media (max-width: 548px) {
          padding: 14px 0 0;
          text-align: center;
        }
      }
    }
  }
`;
