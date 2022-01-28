import { Test } from 'components/organisms/test/Test';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100vh;
`;

const App = () => {
  return (
    <Wrapper>
      <Test />
    </Wrapper>
  );
};

export default App;
