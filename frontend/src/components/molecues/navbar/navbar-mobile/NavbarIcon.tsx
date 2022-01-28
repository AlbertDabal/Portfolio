import React from 'react';
import styled from 'styled-components';

const styleItem = `
  width: 100%;
  height: 3px;
  background-color: red;
  position: absolute;
`;

const Wrapper = styled.div`
  width: 30px;
  height: 24px;
  position: absolute;
  left: 30px;
  top: 30px;
  display: inline-block;
  position: relative;
  cursor: pointer;

  > span {
    ${styleItem}
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.1s 0.2s ease-in-out;
    &:before {
      content: ' ';
      left: 0;

      ${styleItem}
      top: -10px;

      transition: transform 0.2s 0.2s ease-in-out;
    }

    &:after {
      content: ' ';
      left: 0;
      position: absolute;
      ${styleItem}
      content: '';
      left: 0;
      top: 10px;
      transition: transform 0.2s 0.2s ease-in-out;
    }
  }
`;

export const NavbarIcon = () => {
  return (
    <Wrapper>
      <span />
    </Wrapper>
  );
};
