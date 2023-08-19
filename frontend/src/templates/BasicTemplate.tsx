import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactElement;
  index?: number;
  id?: string;
  backgroundColorStyle?: string;
}
const WrapperAll = styled.div<Props>`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ backgroundColorStyle: backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
`;

const Wrapper = styled.div`
  min-height: 70vh;
  height: 100%;
  width: 80%;
  max-width: 1200px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Main = styled.div``;

export const BasicTemplate = ({ children, index, id, backgroundColorStyle }: Props) => {
  return (
    <WrapperAll backgroundColorStyle={backgroundColorStyle}>
      <Wrapper id={id}>
        <Main>{children}</Main>
      </Wrapper>
    </WrapperAll>
  );
};
