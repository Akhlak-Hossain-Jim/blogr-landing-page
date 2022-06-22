import React from "react";
import styled from "styled-components";
import headerData from "../data/header.json";
import Menu from "./Menu";
import Nav from "./Nav";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Container>
      <div className="header_logo">
        <img
          src={`/images/${headerData.logo}`}
          alt={`${headerData.brandName} logo`}
        />
      </div>
      <div className="header_nav">
        <Nav />
      </div>
      <div className="header_ham" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img src={`/images/${headerData.hamIconClose}`} alt="close menu" />
        ) : (
          <img src={`/images/${headerData.hamIcon}`} alt="open menu" />
        )}
      </div>
      {isOpen && <Menu />}
    </Container>
  );
}

const Container = styled.header`
  width: min(1112px, 100%);
  margin: 0 auto;
  padding: 59px 0;
  display: flex;
  align-items: center;
  gap: 64px;
  position: relative;
  @media (max-width: 1212px) {
    padding: 59px 50px;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  @media (max-width: 548px) {
    padding: 56px 24px;
  }
  .header {
    &_logo {
      width: min(101px, 100%);
      img {
        width: 100%;
        height: auto;
        object-position: top;
      }
      @media (max-width: 548px) {
        width: min(82px, 100%);
      }
    }
    &_nav {
      flex: 1;
      @media (max-width: 768px) {
        display: none;
      }
    }
    &_ham {
      @media (min-width: 769px) {
        display: none;
      }
    }
  }
`;
