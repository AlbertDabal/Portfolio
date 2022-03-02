import React from 'react';
import styled from 'styled-components';

interface Props {
  other?: boolean;
}

export const Button = styled.a<Props>`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 8px 50px;
  text-transform: uppercase;
  background-color: ${({ theme, other }) => (other ? 'transparent' : theme.themeColor)};
  color: ${({ theme }) => theme.primaryColor};
  border: 3px solid #003f9d;
  text-decoration: none;

  @media (max-width: 499px) {
    padding: 4px 30px;
  }
`;
