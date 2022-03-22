import { Navbar } from 'components/molecues/navbar/Navbar';
import { AboutMe } from 'components/organisms/about-me/AboutMe';
import { Contacts } from 'components/organisms/constacts/Contacts';
import { Main } from 'components/organisms/main/Main';
import { MyProjects } from 'components/organisms/my-projects/MyProjects';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <MyProjects />
      <Contacts />
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
