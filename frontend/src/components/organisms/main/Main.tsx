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
  text-align: center;
  font-size: 8rem;

  @media (max-width: 1100px) {
    font-size: 8rem;
    margin-bottom: 20px;
  }

  @media (max-width: 750px) {
    font-size: 4rem;
    margin-bottom: 20px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  padding-bottom: 2em;
  width: 35%;

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 750px) {
    width: 90%;
  }
`;

const Image = styled.img`
  @media (max-width: 750px) {
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 8px 50px;
  background-color: ${({ theme }) => theme.themeColor};
  color: ${({ theme }) => theme.primaryColor};
  border: 3px solid #003f9d;
  text-decoration: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.8s all ease;
  &:hover {
    opacity: 0.7;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
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
            <Title bold>{data.title}</Title>
            <StyledParagraph small other>
              {data.subtitle}
            </StyledParagraph>
            <StyledLink to="about-me" spy={true} smooth={true} offset={-70} duration={500}>
              {data.button}
            </StyledLink>
          </Description>
          <Image src={profile} alt={profile} />
        </Row>
      ) : null}
    </Wrapper>
  );
};
