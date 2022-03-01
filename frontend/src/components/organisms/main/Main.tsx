import { Heading } from 'components/atoms/heading/Heading';
import { Button } from 'components/atoms/button/Button';
import React from 'react';
import styled from 'styled-components';
import baner from 'images/baner.png';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import profile from 'images/profile-main.png';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 15em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('${baner}') no-repeat;
  background-size: cover;
  background-blend-mode: normal, difference;
`;

const Title = styled(Heading)`
  font-size: 10rem;
`;

const StyledParagraph = styled(Paragraph)`
  width: 30%;
  text-align: center;
  padding-bottom: 2em;
`;

const Image = styled.img`
  border-radius: 50%;
`;

export const Main = () => {
  return (
    <Wrapper id="main">
      <Image src={profile} />
      <Title>Hi i’am Albert</Title>
      <StyledParagraph small other>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's{' '}
      </StyledParagraph>
      <Button>SHOW CASE</Button>
    </Wrapper>
  );
};
