import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border: 3px solid #0fe0d0;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 8px 50px;
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryColor};
`;
