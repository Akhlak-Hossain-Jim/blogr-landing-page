import React from "react";
import styled from "styled-components";

import headerData from "../data/header.json";

export default function Footer() {
  const LinksData = headerData.nav.left;

  return (
    <Container>
      <div className="footer_content">
        <div className="footer_content__logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="footer_content__links">
          {React.Children.toArray(
            LinksData.LinkNames.map((data, index) => (
              <div className="footer_content__links_column">
                <div className="footer_content__links_column__title">
                  {data.title}
                </div>
                <div className="footer_content__links_column__links">
                  {React.Children.toArray(
                    data.names.map((link, i) => (
                      <a
                        href={LinksData.LinkUrls[index].links[i]}
                        className="footer_content__links_column__links_link"
                        onClick={(e) =>
                          LinksData.LinkUrls[index].links[i] === "" &&
                          e.preventDefault()
                        }
                      >
                        {link}
                      </a>
                    ))
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background: var(--footer-bg);
  color: var(--footer-text);
  border-radius: 0 100px 0 0;
  padding: 70px 23.82% 78px 11.459%;
  @media (max-width: 548px) {
    padding: 75px 24px 80px;
  }
  .footer_content {
    display: flex;
    gap: 19.743%;
    @media (max-width: 548px) {
      flex-direction: column;
      gap: 0;
      align-items: center;
      justify-content: center;
    }
    &__logo {
      width: min(101px, 100%);
      padding-bottom: 79px;
      & > img {
        width: 100%;
        height: auto;
      }
    }
    &__links {
      flex: 1;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 24px;
      @media (max-width: 548px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 52px;
      }
      &_column {
        display: flex;
        flex-direction: column;
        gap: 37px;
        @media (max-width: 548px) {
          align-items: center;
          justify-content: center;
          gap: 33px;
          width: 100%;
        }
        &:nth-child(2) {
          @media (min-width: 549px) {
            padding-right: 20px;
          }
        }
        &__title {
          font-weight: 700;
          font-size: 15px;
          line-height: 17px;
          letter-spacing: -0.01em;

          @media (max-width: 548px) {
            font-size: 18px;
            line-height: 21px;
          }
        }
        &__links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          @media (max-width: 548px) {
            gap: 12px;
          }
          &_link {
            font-weight: 400;
            font-size: 15px;
            line-height: 17px;
            color: var(--footer-text);
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
            @media (max-width: 548px) {
              font-weight: 400;
              font-size: 18px;
              line-height: 21px;
            }
          }
        }
      }
    }
  }
`;
/* @media (max-width:548px){} */
