import { Heading } from 'components/atoms/heading/Heading';
import { Button } from 'components/atoms/button/Button';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import baner from 'images/baner.png';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import { Link } from 'react-scroll';
import axios from 'axios';
import profile from 'images/profile.png';

const Wrapper = styled.div`
  height: 100vh;
  user-select: none;
  width: 100%;
  justify-content: flex-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(224deg, #2d27ff 0%, #ff0a6c 100%);
  background-size: cover;
  background-blend-mode: normal, difference;
`;

const Title = styled(Heading)`
  font-size: 6rem;

  @media (max-width: 800px) {
    font-size: 3rem;
  }
  /*
  @media (max-width: 750px) {
    font-size: 4rem;
    margin-bottom: 20px;
  } */
`;

const StyledParagraph = styled(Paragraph)`
  padding-bottom: 2em;

  @media (max-width: 800px) {
    padding-bottom: 1em;
  }
`;

const Image = styled.img`
  width: 50%;

  position: absolute;
  right: 10%;
  bottom: 0;

  @media (max-width: 1350px) {
    right: 0%;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;

  margin-bottom: 50px;

  /* margin-bottom: 30%;

  @media (max-width: 1100px) {
    margin-bottom: 40%;
  }

  @media (max-width: 800px) {
    margin-bottom: 100%;
  } */
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 50px;
  background-color: ${({ theme }) => 'black'};
  color: ${({ theme }) => theme.primaryColorLight};
  text-decoration: none;
  border-radius: 15px;
  cursor: pointer;
  transform: scale(1);
  transform-origin: center;

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 3px 0px rgba(0, 0, 0, 0.14),
    0px 3px 5px -2px rgba(0, 0, 0, 0.2);
  transition: 0.5s all ease;
  &:hover {
    transform: perspective(1000px) translateZ(100px);
  }
`;

const Row = styled.div`
  width: 80%;
  display: flex;
  height: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Main = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = navigator.language === 'en' || navigator.language === 'pl' ? navigator.language : 'en';
        const res = await axios({ url: `./locales/${lang}/Main.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <Wrapper id="main">
      {data ? (
        <Row>
          <Description>
            <div>
              <Title bold>{data.title}</Title>
              <Title>{data.subtitle}</Title>
            </div>
            <StyledParagraph light>
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
            </StyledParagraph>
            <StyledLink to="about-me" spy={true} smooth={true} offset={-60} duration={500}>
              {data.button}
            </StyledLink>
          </Description>
          <Image src={profile} alt={profile} />
        </Row>
      ) : null}
    </Wrapper>
  );
};
