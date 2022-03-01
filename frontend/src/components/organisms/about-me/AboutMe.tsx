import { Button } from 'components/atoms/button/Button';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';
import profile from 'images/profile.png';
import { Heading } from 'components/atoms/heading/Heading';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;

  @media (min-width: 1000px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  box-shadow: 47px 47px 0px -41px #003f9d;
  padding: 10px;

  @media (min-width: 499px) {
    height: 60vh;
    width: auto;
  }
`;

const Description = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media (min-width: 499px) {
    height: 60vh;
    padding-right: 10%;
  }
`;

const StyledButton = styled(Button)`
  @media (min-width: 499px) {
    margin-top: 10vh;
  }
`;

export const AboutMe = () => {
  return (
    <BasicTemplate index={1} id="about-me">
      <Wrapper>
        <Description>
          <Heading bold>Who I am</Heading>
          <Paragraph small other>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen
          </Paragraph>
          <StyledButton>MY LINKEDIN</StyledButton>
        </Description>

        <Image src={profile} alt={profile} />
      </Wrapper>
    </BasicTemplate>
  );
};
