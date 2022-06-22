import React from "react";
import styled from "styled-components";
import headerData from "../data/header.json";

export default function Nav() {
  const NavData = headerData.nav;

  const DownIcon = () => (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L5 5L9 1" stroke-width="2" />
    </svg>
  );

  return (
    <Container>
      <div className="nav_left">
        {React.Children.toArray(
          NavData.left.LinkNames.map((data, index) => (
            <div className="nav_left__links_header">
              <div className="nav_left__links_header__text">
                {data.title}
                <span>
                  <DownIcon />
                </span>
              </div>
              <div className="nav_left__links_header__linkBox">
                <div className="nav_left__links_header__linkBox_bg">
                  {React.Children.toArray(
                    data.names.map((data, i) => (
                      <a
                        href={NavData.left.LinkUrls[index].links[i]}
                        className="nav_left__links_header__linkBox_link"
                        onClick={(e) =>
                          NavData.left.LinkUrls[index].links[i] === "" &&
                          e.preventDefault()
                        }
                      >
                        {data}
                      </a>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="nav_right">
        <a href={NavData.right.one.url} className="nav_right__login">
          {NavData.right.one.title}
        </a>
        <a href={NavData.right.two.url} className="nav_right__signup">
          {NavData.right.two.title}
        </a>
      </div>
    </Container>
  );
}

const Container = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  font-family: var(--font-secondary);
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .nav {
    &_left {
      display: flex;
      align-items: center;
      gap: 31px;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      &__links_header {
        position: relative;
        @media (max-width: 768px) {
          width: 100%;
        }
        &__text {
          display: flex;
          align-items: center;
          gap: 7px;
          border-bottom: 2px solid transparent;
          color: var(--text);
          font-weight: 700;
          font-size: 16px;
          line-height: 18px;
          cursor: pointer;
          & > span > svg > path {
            stroke: var(--text);
            opacity: 0.75;
          }
          @media (max-width: 768px) {
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: var(--heading);
            justify-content: center;
            width: 100%;
            & > span > svg > path {
              stroke: var(--nav-item-mob);
              opacity: 1;
            }
          }
        }
        &__linkBox {
          display: none;
        }
        &:hover,
        &:focus {
          border-bottom: 2px solid var(--text);
          & > span {
            transform: rotate(180deg);
            transform-origin: center;
          }
          .nav_left__links_header__linkBox {
            position: absolute;
            top: 100%;
            left: -10%;
            display: flex;
            @media (max-width: 768px) {
              position: relative;
              top: 0;
              left: 0;
              width: 100%;
            }
            &_bg {
              display: flex;
              flex-direction: column;
              text-align: left;
              gap: 16px;
              background-color: var(--text);
              /* color: ; */
              padding: 32px 24px;
              border-radius: 6px;
              margin-top: 26px;
              @media (max-width: 768px) {
                margin: 0;
                align-items: center;
                justify-content: center;
                background-color: var(--footer-text);
                width: 100%;
              }
            }
            &_link {
              font-weight: 400;
              font-size: 15px;
              line-height: 17px;
              color: var(--body-text);
              text-transform: capitalize;
              text-decoration: none;
              &:hover {
                font-weight: 700;
                color: var(--footer-bg);
              }
            }
          }
        }
      }
    }
    &_right {
      display: flex;
      align-items: center;
      gap: 32px;
      @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        padding-top: 32px;
        gap: 23px;
        border-top: 1px solid var(--body-text);
      }
      &__login,
      &__signup {
        color: var(--text);
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        text-decoration: none;
        cursor: pointer;
        @media (max-width: 768px) {
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          color: var(--heading);
        }
      }
      &__signup {
        width: min(137px, 100%);
        text-align: center;
        padding: 15px 30px;
        color: var(--cta-text);
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        text-decoration: none;
        background: var(--text);
        border-radius: 24px;
        cursor: pointer;
        &:hover {
          background: var(--cta-hover-bg);
          color: var(--text);
        }
        @media (max-width: 768px) {
          background: var(--gradient-1);
          color: var(--text);
        }
      }
    }
  }
`;
