import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

export default function Menu() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  width: 324px;
  position: absolute;
  top: 80%;
  right: 32px;
  padding: 32px 25px 32px 24px;
  background-color: var(--text);
  box-shadow: var(--box-shadow);
  @media (min-width: 769px) {
    display: none;
  }
`;
