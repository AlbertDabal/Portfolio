import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactElement;
  index: number;
  id?: string;
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 90%;
  display: flex;
`;

const Main = styled.div`
  margin-top: 8vh;
  width: 90%;
`;

export const BasicTemplate = ({ children, index, id }: Props) => {
  return (
    <Wrapper id={id}>
      <Paragraph bold small>{`0${index}`}</Paragraph>
      <Main>{children}</Main>
    </Wrapper>
  );
};
