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
  width: 80%;
  max-width: 1150px;
`;

const Main = styled.div``;

export const BasicTemplate = ({ children, index, id }: Props) => {
  return (
    <Wrapper id={id}>
      <Main>{children}</Main>
    </Wrapper>
  );
};
