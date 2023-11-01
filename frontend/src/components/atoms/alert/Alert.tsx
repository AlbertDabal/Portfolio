import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';

const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 20%;
  right: 20%;
  display: flex;
  height: 10vh;
  opacity: 0.9;
  z-index: 9999;
  background: linear-gradient(188deg, #2d27ff 0%, #ff0a6c 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  font-weight: 600;
  transition: 0.8s all ease;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const Alert = () => {
  return <Wrapper>Thanks for email ;)</Wrapper>;
};
