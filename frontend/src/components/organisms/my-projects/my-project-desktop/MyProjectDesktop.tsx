import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import { Heading } from 'components/atoms/heading/Heading';
import { BasicTemplate } from 'templates/BasicTemplate';
import { Button } from 'components/atoms/button/Button';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface Props {
  length?: number;
  element?: number;
  width?: number;
  ProjectsData?: any;
  title?: string;
}

const Image = styled.div<Props>`
  transition: 0.2s all ease;
  /* filter: grayscale(100%); */
  opacity: 0.1;
  &:nth-child(1) {
  }
  &:nth-last-child(1) {
  }
  background-image: url('https://i.wpimg.pl/730x0/m.autokult.pl/350z-2cf75dd8822a6157ce2153781c4.jpg');
  background-size: cover;
  background-position: center;
  width: 65vw;
  height: 70vh;
  margin-right: 2vw;

  &:hover {
    > div {
      opacity: 0.9;
    }
  }
`;

const Wrapper = styled.div`
  height: 88vh;
  overflow-x: hidden;
  width: 80%;
  max-width: 1150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Slider = styled.div<Props>`
  margin-top: 15vh;
  display: flex;
  flex-direction: row;
  position: absolute;
  transition: 1s all ease;
  left: auto;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.hr`
  width: 40%;
  height: 1px;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Bottom = styled.div`
  margin-top: 20%;
  width: 40%;
  justify-content: space-between;
  display: flex;
`;

const LeftButton = styled(Button)`
  background-color: transparent;
  border: none;
  display: flex;
  position: absolute;
  margin-top: 10vh;
  height: 70vh;
  left: auto;
  width: 400px;
  margin-left: -400px;
  align-items: center;
  justify-content: flex-end;
`;

const RightButton = styled(Button)`
  background-color: transparent;
  border: none;
  display: flex;
  height: 70vh;
  position: absolute;
  margin-top: 10vh;
  right: auto;
  width: 400px;
  margin-left: 65vw;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  background-color: black;
  opacity: 0;
  width: 100%;
  padding: 10% 10%;

  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  transition: 0.6s all ease;
`;

const StyledBiChevronLeft = styled(BiChevronLeft)`
  font-size: 60pt;
`;

const StyledBiChevronRight = styled(BiChevronRight)`
  font-size: 60pt;
`;

export const MyProjectDesktop = ({ width, ProjectsData, title }: Props) => {
  const [element, setElement] = useState(1);

  const NextElement = () => {
    if (ProjectsData.length > element) {
      document.getElementById('right-button')!.style.display = `flex`;
      console.log(element);
      document.querySelector<HTMLElement>(`#slider div:nth-child(${element})`)!.style.opacity = '0.1';

      document.querySelector<HTMLElement>(`#slider div:nth-child(${element + 1})`)!.style.opacity = '1';
      setElement(element + 1);
      document.getElementById('left-button')!.style.display = `flex`;
      document.getElementById(
        'slider'
      )!.style.transform = `translateX(calc((${element} * -65vw) - (2vw * ${element})))`;
      if (ProjectsData.length === element + 1) {
        document.getElementById('right-button')!.style.display = `none`;
      }
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
        document.getElementById('left-button')!.style.display = `none`;
        document.querySelector<HTMLElement>(`#slider div:nth-child(${test + 1})`)!.style.opacity = '0.1';
        setElement(1);
      } else {
        await setElement(element - 1);
        document.querySelector<HTMLElement>(`#slider div:nth-child(${test})`)!.style.opacity = '1';
        document.querySelector<HTMLElement>(`#slider div:nth-child(${test + 1})`)!.style.opacity = '0.1';
        document.getElementById('left-button')!.style.display = `flex`;
        document.getElementById('right-button')!.style.display = `flex`;
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
      document.getElementById('left-button')!.style.display = `none`;
    } else {
    }
  });

  return (
    <Wrapper id="my-project">
      <Top>
        <Heading bold>{title}</Heading>
        <Line />
        {console.log(ProjectsData)}
        <StyledHeading bold>{`0${element}/0${ProjectsData.length}`}</StyledHeading>
      </Top>

      <Slider id="slider" length={ProjectsData.length}>
        {ProjectsData.map(
          (items: {
            images: string;
            name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
            technology: any;
            description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
            link: string | undefined;
          }) => (
            <Image
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/projects' + items.images})`
              }}
              element={element}
            >
              <Info>
                <Paragraph bold>{items.name}</Paragraph>
                <Paragraph small>{`${items.technology},`}</Paragraph>
                <Paragraph small other>
                  {items.description}
                </Paragraph>
                <Bottom>
                  <Button target="_blank" href={items.link}>
                    VISIT SITE
                  </Button>
                  <Button other target="_blank" href={items.link}>
                    GITHUB
                  </Button>
                </Bottom>
              </Info>
            </Image>
          )
        )}
      </Slider>

      <LeftButton id="left-button" onClick={() => PrevProject()}>
        <StyledBiChevronLeft />
      </LeftButton>
      <RightButton id="right-button" onClick={() => NextElement()}>
        <StyledBiChevronRight />
      </RightButton>
    </Wrapper>
  );
};
