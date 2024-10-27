import styled from "styled-components";
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Intro from 'components/Intro/Intro';
import About from 'components/About/About';
import Experience from 'components/Experience/Experience';

function App() {
  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Intro />
      </HeaderContainer>
      <About />
      <br />
      <Experience />
      <br />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div``;
const HeaderContainer = styled.div`
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;
