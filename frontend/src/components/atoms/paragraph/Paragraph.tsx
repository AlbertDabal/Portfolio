import React from 'react';
import styled from 'styled-components';

interface Props {
  other?: boolean;
  small?: boolean;
  bold?: boolean;
}

export const Paragraph = styled.h3<Props>`
  font-size: ${({ theme, small }) => (small ? theme.fontSize.s : theme.fontSize.l)};
  font-weight: ${({ bold }) => (bold ? '800' : '400')};
  color: ${({ small, other, theme }) =>
    other ? (small ? theme.secondaryColor : theme.themeColor) : theme.primaryColor};
`;
