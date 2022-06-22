import styled from "styled-components";

import About from "./components/About";
import Editor from "./components/Editor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Infrastructure from "./components/Infrastructure";

export default function App() {
  return (
    <Container>
      <main>
        <Hero />
        <Editor />
        <Infrastructure />
        <About />
      </main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
