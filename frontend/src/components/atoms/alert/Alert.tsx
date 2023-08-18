import React from 'react';
import styled from 'styled-components';
import { Button } from '../button/Button';
import { Heading } from '../heading/Heading';
import { Paragraph } from '../paragraph/Paragraph';

const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 20%;
  right: 20%;
  display: flex;
  height: 10vh;
  opacity: 0.9;
  z-index: 9999;
  background-color: #1a7a1a;
  transition: 0.8s all ease;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Alert = () => {
  return (
    <Wrapper>
      <Paragraph bold>THANKS FOR THE EMAIL</Paragraph>
    </Wrapper>
  );
};
