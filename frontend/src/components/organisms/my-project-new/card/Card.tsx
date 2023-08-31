import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Heading } from 'components/atoms/heading/Heading';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';

interface Props {
  images?: string;
  name?: string;
  description?: string;
  github?: string;
  website?: string;
  index: number;
}

interface Color {
  other?: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 40vh;
  height: 100%;
  background-color: white;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Image = styled.img`
  height: 40vh;
  width: 60%;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  /* filter: grayscale(100%); */
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  height: 40vh;
  width: auto;
  background-position: center;
  background-size: cover;

  margin-right: 2vw; */
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const Button = styled.button<Color>`
  border: none;
  outline: none;
  color: white;
  background: ${({ other }) => (!other ? '#2d27ff' : '#FF0A6C')};
  font-size: 16px;
  font-weight: 600;
  padding: 10px 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: pointer;
  transition: 0.8s all ease;
  &:hover {
    opacity: 0.8;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  gap: 15px;
`;

const Card = ({ images, name, description, github, website, index }: Props) => {
  return (
    <Wrapper>
      {images && <Image src={`${process.env.PUBLIC_URL + '/images/projects' + images}`} />}
      <Info>
        <Title>{name}</Title>
        <Paragraph>{description}</Paragraph>
        <WrapperButton>
          <Button>Github</Button>
          <Button other>Site</Button>
        </WrapperButton>
      </Info>
    </Wrapper>
  );
};

export default Card;
