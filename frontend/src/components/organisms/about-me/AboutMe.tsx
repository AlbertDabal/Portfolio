import { Button } from 'components/atoms/button/Button';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';
import profile from 'images/profile.jpg';
import { Heading } from 'components/atoms/heading/Heading';
import axios from 'axios';

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
  box-shadow: none;

  margin-bottom: 50px;
  margin-right: 50px;
  @media (min-width: 499px) {
    height: 70vh;
    box-shadow: 30px 30px 0px -10px #003f9d;
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
  line-height: 3rem;
  padding-right: 0px;

  @media (min-width: 700px) {
    padding: 0px 40px 0px 0px;
  }
`;

export const AboutMe = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = navigator.language === 'en' || navigator.language === 'pl' ? navigator.language : 'en';
        const res = await axios({ url: `./locales/${lang}/AboutMe.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);
  return (
    <BasicTemplate index={1} id="about-me">
      <Wrapper>
        {data && (
          <Description>
            <Heading bold>{data.title}</Heading>
            <StyledParagraph small other>
              {data.description}
            </StyledParagraph>
            <Bottom>
              <StyledButton target="_blank" href={data.linkedinLink}>
                {data.linkedinButton}
              </StyledButton>
              <StyledButton other href={process.env.PUBLIC_URL + `/data/${data.cvLink}`} target="_blank">
                {data.cvButton}
              </StyledButton>
            </Bottom>
          </Description>
        )}
        <Image src={profile} alt={profile} />
      </Wrapper>
    </BasicTemplate>
  );
};
