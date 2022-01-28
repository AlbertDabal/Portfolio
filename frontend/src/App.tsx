import { Navbar } from 'components/molecues/navbar/Navbar';
import { AboutMe } from 'components/organisms/about-me/AboutMe';
import { Main } from 'components/organisms/main/Main';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Main />
      <AboutMe />
    </Wrapper>
  );
};

export default App;
