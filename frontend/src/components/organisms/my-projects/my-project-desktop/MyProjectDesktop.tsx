import React, { useEffect, useState } from 'react';
import { ProjectsData } from 'data/ProjectsData';
import styled from 'styled-components';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import { Heading } from 'components/atoms/heading/Heading';
import { BasicTemplate } from 'templates/BasicTemplate';
import { Button } from 'components/atoms/button/Button';

interface Props {
  length?: number;
  element?: number;
}

const Image = styled.div<Props>`
  transition: 0.2s all ease;
  /* filter: grayscale(100%); */
  opacity: 0.1;
  border: 1px solid red;
  &:nth-child(1) {
    margin-left: 2vw;
  }
  &:nth-last-child(1) {
  }
  background-image: url('https://i.wpimg.pl/730x0/m.autokult.pl/350z-2cf75dd8822a6157ce2153781c4.jpg');
  background-size: cover;
  width: 65vw;
  height: 70vh;
  margin-right: 2vw;
`;

const Wrapper = styled.div`
  height: 88vh;
  overflow-x: hidden;
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Slider = styled.div<Props>`
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  position: absolute;
  transition: 1s all ease;
  left: 0;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3vh;
`;

const Line = styled.hr`
  width: 40%;
  height: 1px;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledButton = styled(Button)``;

const Bottom = styled.div`
  display: flex;
`;

export const MyProjectDesktop = () => {
  const [element, setElement] = useState(1);

  const NextElement = () => {
    if (ProjectsData.length > element) {
      console.log(element);
      document.querySelector<HTMLElement>(`#slider div:nth-child(${element})`)!.style.opacity = '0.1';

      document.querySelector<HTMLElement>(`#slider div:nth-child(${element + 1})`)!.style.opacity = '1';
      setElement(element + 1);

      document.getElementById(
        'slider'
      )!.style.transform = `translateX(calc((${element} * -65vw) - (2vw * ${element})))`;
    } else {
    }
  };

  const PrevProject = async () => {
    const test = element - 1;
    if (element < 2) {
    } else {
      if (element < 3) {
        console.log(element);
        document.getElementById('slider')!.style.transform = `translateX(0)`;
        document.querySelector<HTMLElement>(`#slider div:nth-child(${test + 1})`)!.style.opacity = '0.1';
        setElement(1);
      } else {
        await setElement(element - 1);
        document.querySelector<HTMLElement>(`#slider div:nth-child(${test})`)!.style.opacity = '1';
        document.querySelector<HTMLElement>(`#slider div:nth-child(${test + 1})`)!.style.opacity = '0.1';
        console.log(element);
        document.getElementById('slider')!.style.transform = `translateX(calc((${test - 1} * -65vw) - (2vw * ${
          test - 1
        })`;
      }
    }
  };

  useEffect(() => {
    if (element === 1) {
      document.querySelector<HTMLElement>('#slider div:nth-child(1)')!.style.opacity = '1';
    } else {
    }
  });

  return (
    <Wrapper id="my-project">
      <Top>
        <Heading bold>My projects</Heading>
        <Line />
        <StyledHeading bold>{`0${element}/0${ProjectsData.length}`}</StyledHeading>
      </Top>

      <Slider id="slider" length={ProjectsData.length}>
        {ProjectsData.map((items) => (
          <Image
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/images/projects' + items.images})`
            }}
            element={element}
          />
        ))}
      </Slider>
      <Bottom>
        <StyledButton onClick={() => PrevProject()}>PREV</StyledButton>
        <StyledButton onClick={() => NextElement()}>NEXT</StyledButton>
      </Bottom>
    </Wrapper>
  );
};
