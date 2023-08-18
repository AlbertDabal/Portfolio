import React from 'react';
import styled from 'styled-components';

interface Props {
  other?: boolean;
}

export const Button = styled.a<Props>`
  user-select: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 10px 50px;

  color: ${({ theme }) => 'white'};
  border-radius: 15px;
  background: linear-gradient(188deg, #2d27ff 0%, #ff0a6c 100%);
  box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.58);
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 499px) {
    padding: 4px 30px;
  }
`;
