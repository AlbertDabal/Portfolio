import { Heading } from 'components/atoms/heading/Heading';
import { Button } from 'components/atoms/button/Button';
import React from 'react';
import styled from 'styled-components';
import baner from 'images/baner.png';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import profile from 'images/profile-main.png';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
  height: 100vh;
  user-select: none;
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
  @media (max-width: 750px) {
    font-size: 5rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  padding-bottom: 2em;
  width: 30%;
  @media (max-width: 750px) {
    width: 60%;
  }
`;

const Image = styled.img`
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 8px 50px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.themeColor};
  color: ${({ theme }) => theme.primaryColor};
  border: 3px solid #003f9d;
  text-decoration: none;
  cursor: pointer;
  transition: 0.8s all ease;
  &:hover {
    opacity: 0.7;
  }
`;

export const Main = () => {
  return (
    <Wrapper id="main">
      <Image src={profile} />
      <Title>Hi, I am Albert</Title>
      <StyledParagraph small other>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's{' '}
      </StyledParagraph>
      <StyledLink to="about-me" spy={true} smooth={true} offset={-70} duration={500}>
        SHOW CASE
      </StyledLink>
    </Wrapper>
  );
};
