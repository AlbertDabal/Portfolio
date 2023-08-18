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

  /* @media (max-width: 1100px) {
    font-size: 8rem;
    margin-bottom: 20px;
  }

  @media (max-width: 750px) {
    font-size: 4rem;
    margin-bottom: 20px;
  } */
`;

const StyledParagraph = styled(Paragraph)`
  padding-bottom: 2em;
`;

const Image = styled.img`
  width: 50%;
  position: absolute;
  right: 10%;

  @media (max-width: 750px) {
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;

  margin-bottom: 30%;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  border-radius: 15px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  padding: 15px 60px;
  background-color: ${({ theme }) => 'black'};
  color: ${({ theme }) => theme.primaryColorLight};
  text-decoration: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.8s all ease;
  &:hover {
  }
`;

const Row = styled.div`
  width: 80%;
  display: flex;
  max-width: 1200px;
  align-items: flex-end;
  justify-content: flex-start;
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
