import React from 'react';
import styled from 'styled-components';

interface Props {
  other?: boolean;
  small?: boolean;
}

export const Paragraph = styled.h3<Props>`
  font-size: ${({ theme, small }) => (small ? theme.fontSize.s : theme.fontSize.l)};
  color: ${({ small, other, theme }) =>
    other ? (small ? theme.secondaryColor : theme.themeColor) : theme.primaryColor};
`;
