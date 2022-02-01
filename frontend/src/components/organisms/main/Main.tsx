import { Heading } from 'components/atoms/heading/Heading';
import { Button } from 'components/atoms/button/Button';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 93%;
  display: flex;
  align-items: flex-start;
  padding-top: 40vh;

  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 45vh;

  @media (min-width: 499px) {
    width: 80%;
  }
`;

export const Main = () => {
  return (
    <Wrapper id="main">
      <Heading small>FULL STACK DEVELOPER</Heading>
      <Heading bold>HI I’M ALBERT DĄBAL</Heading>
      <Button>SHOW CASE</Button>
    </Wrapper>
  );
};
