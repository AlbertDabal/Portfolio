import { Button } from 'components/atoms/button/Button';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';
import profile from 'images/profile.jpg';
import { Heading } from 'components/atoms/heading/Heading';
import pdf from 'data/CV.pdf';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10vh;

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  box-shadow: 30px 30px 0px -10px #003f9d;
  margin-bottom: 50px;
  margin-right: 50px;
  @media (min-width: 499px) {
    height: 70vh;
    width: auto;
  }
`;

const Description = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media (min-width: 499px) {
    height: 60vh;
  }
`;

const StyledButton = styled(Button)`
  margin: 10px 30px 10px 0px;
  max-width: 30vh;
  text-align: center;
  transition: 0.8s all ease;
  &:hover {
    opacity: 0.7;
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 4rem;
  padding-right: 0px;

  @media (min-width: 700px) {
    padding: 0px 40px 0px 0px;
  }
`;

export const AboutMe = () => {
  return (
    <BasicTemplate index={1} id="about-me">
      <Wrapper>
        <Description>
          <Heading bold>About me</Heading>
          <StyledParagraph small other>
            As a front-end developer, you know how to make a seamless web app that helps users accomplish what they need
            to do. You have a strong combination of technical ability and creativity. It can be really difficult to
            channel this wide-ranging skillset properly on a resume to impress employers.
          </StyledParagraph>
          <Bottom>
            <StyledButton target="_blank" href="https://www.linkedin.com/in/albert-d%C4%85bal-552907148/">
              MY LINKEDIN
            </StyledButton>
            <StyledButton other href={pdf} target="_blank">
              SHOW CV
            </StyledButton>
          </Bottom>
        </Description>

        <Image src={profile} alt={profile} />
      </Wrapper>
    </BasicTemplate>
  );
};
