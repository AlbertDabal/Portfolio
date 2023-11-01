import { Navbar } from 'components/molecues/Navbar/Navbar';
import AboutMe from 'components/organisms/AboutMe/AboutMe';
import { Contacts } from 'components/organisms/Constacts/Contacts';
import Footer from 'components/organisms/Footer/Footer';
import Main from 'components/organisms/Main/Main';
import MyProject from 'components/organisms/MyProject/MyProject';
import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }
`;

const App = () => {
  useEffect(() => {
    const userLang = navigator.language;
    sessionStorage.setItem('Lang', userLang);
  });

  return (
    <Wrapper>
      <Navbar />
      <Main />
      <AboutMe />
      <MyProject />
      <Contacts />
      <Footer />
    </Wrapper>
  );
};

function Loading() {
  return (
    <div style={{ height: '100vh' }}>
      <span></span>
    </div>
  );
}

export default App;
