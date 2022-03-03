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

const Image = styled.img<Props>`
  transition: 0.1s all ease;
  /* filter: grayscale(100%); */
  opacity: 0.1;

  &:nth-child(1) {
    margin-left: 20vw;
  }
  &:nth-last-child(1) {
  }
  max-width: 90vw;
  height: 70vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  overflow-x: hidden;
`;

const Slider = styled.div<Props>`
  width: 100%;
  display: flex;
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

export const MyProjectDesktop = () => {
  const [element, setElement] = useState(1);

  const NextElement = () => {
    if (ProjectsData.length > element) {
      document.querySelector<HTMLElement>(`#slider img:nth-child(${element + 1})`)!.style.opacity = '1';
      setElement(element + 1);

      document.getElementById('slider')!.style.transform = `translateX(calc(${element} * -58vw))`;
    } else {
    }
  };

  const PrevProject = async () => {
    if (3 > element) {
      document.getElementById('slider')!.style.transform = `translateX(0)`;
      setElement(1);
    } else {
      const test = element - 1;
      await setElement(element - 1);

      console.log(element);
      document.getElementById('slider')!.style.transform = `translateX(calc(${test - 1} * -58vw))`;
    }
  };

  useEffect(() => {
    document.querySelector<HTMLElement>('#slider img:nth-child(1)')!.style.opacity = '1';
  });

  return (
    <BasicTemplate index={5} id="my-project">
      <>
        <Wrapper>
          <Top>
            <Heading bold>My projects</Heading>
            <Line />
            <StyledHeading bold>{`0${element}/0${ProjectsData.length}`}</StyledHeading>
          </Top>

          <Slider id="slider" length={ProjectsData.length}>
            {ProjectsData.map((items) => (
              <Image element={element} src={process.env.PUBLIC_URL + '/images/projects' + items.images} />
            ))}
          </Slider>
        </Wrapper>
        <StyledButton onClick={() => PrevProject()}>PREV</StyledButton>
        <StyledButton onClick={() => NextElement()}>NEXT</StyledButton>
      </>
    </BasicTemplate>
  );
};
