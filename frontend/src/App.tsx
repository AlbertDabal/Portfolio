import HamburgerMenu from 'components/molecues/hamburger-menu/HamburgerMenu';
import { Navbar } from 'components/molecues/navbar/Navbar';
import { AboutMe } from 'components/organisms/about-me/AboutMe';
import { Contacts } from 'components/organisms/constacts/Contacts';
import Footer from 'components/organisms/footer/Footer';
import { Main } from 'components/organisms/main/Main';
import MyProjectNew from 'components/organisms/my-project-new/MyProjectNew';
import { MyProjects } from 'components/organisms/my-projects/MyProjects';
import React, { useEffect } from 'react';
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
      <MyProjectNew />
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
