import React from 'react';
import styled from 'styled-components';

interface Props {
  other?: boolean;
  big?: boolean;
  bold?: boolean;
  light?: boolean;
}

export const Paragraph = styled.h3<Props>`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.s)};
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
  line-height: 26px;
  text-align: left;
  color: ${({ theme, light }) => (light ? theme.secondaryColorLight : theme.secondaryColorDark)};
`;
