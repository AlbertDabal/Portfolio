import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 8px 50px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.themeColor};
  color: ${({ theme }) => theme.primaryColor};

  @media (max-width: 499px) {
    padding: 4px 30px;
  }
`;
