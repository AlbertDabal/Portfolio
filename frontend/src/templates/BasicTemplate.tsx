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
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 499px) {
    padding-top: 30px;
  }

  @media (min-width: 499px) {
    width: 85%;
  }
`;

const Main = styled.div`
  margin-top: 8vh;
  width: 90%;

  @media (min-width: 499px) {
    padding: 0% 3%;
  }

  @media (max-width: 1180px) {
    padding: 0% 1%;
  }
`;

export const BasicTemplate = ({ children, index, id }: Props) => {
  return (
    <Wrapper id={id}>
      <Paragraph bold small>{`0${index}`}</Paragraph>
      <Main>{children}</Main>
    </Wrapper>
  );
};
