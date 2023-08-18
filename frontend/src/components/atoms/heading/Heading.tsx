import React from 'react';
import styled from 'styled-components';

interface Props {
  bold?: boolean;
  color?: boolean;
  small?: boolean;
}

export const Heading = styled.h1<Props>`
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
  font-size: ${({ theme, small }) => (small ? theme.fontSize.m : theme.fontSize.xl)};
  color: ${({ theme }) => theme.primaryColorLight};
  @media (max-width: 800px) {
    font-size: ${({ theme, small }) => (small ? theme.fontSize.m : theme.fontSize.l)};
  }
`;
