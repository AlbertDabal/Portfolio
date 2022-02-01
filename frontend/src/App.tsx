import { Navbar } from 'components/molecues/navbar/Navbar';
import { AboutMe } from 'components/organisms/about-me/AboutMe';
import { Contacts } from 'components/organisms/constacts/Contacts';
import { Main } from 'components/organisms/main/Main';
import { MyProjects } from 'components/organisms/my-projects/MyProjects';
import { Skills } from 'components/organisms/skills/Skills';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Main />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Contacts />
    </Wrapper>
  );
};

export default App;
