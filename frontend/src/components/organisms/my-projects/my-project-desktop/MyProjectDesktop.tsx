import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import { Heading } from 'components/atoms/heading/Heading';
import { Button } from 'components/atoms/button/Button';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  length?: number;
  element?: number;
  width?: number;
  ProjectsData?: any;
  title?: string;
  buttonName?: string;
  info?: string;
}

const Image = styled.div<Props>`
  transition: 0.2s all ease;
  /* filter: grayscale(100%); */

  height: 100%;
  background-position: center;
  background-size: cover;

  margin-right: 2vw;

  &:hover {
    > div {
      opacity: 0.9;
    }
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  /* overflow-x: hidden; */

  display: flex;
  flex-direction: column;
  align-items: center;

  .slide {
    width: 80%;
    max-width: 1150px;
  }

  /* max-width: 1150px; */

  @media (max-width: 1450px) {
    display: none;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Line = styled.hr`
  width: 30%;
  height: 1px;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Info = styled.div`
  display: flex;
  background-color: black;
  opacity: 0;
  width: 100%;
  padding: 10% 10%;

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  transition: 0.6s all ease;

  > * {
    margin-bottom: 40px;
  }
`;

const Bottom = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  margin-right: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  color: #003f9d;
  font-size: 1.7rem;
  text-transform: uppercase;
`;

const Main = styled.div`
  width: 80%;
  max-width: 1150px;
  margin-bottom: 30px;
`;

const StyledBiChevronLeft = styled(BiChevronLeft)`
  font-size: 60pt;
  position: absolute;
  margin-top: 38vh;
  padding: 30px;
  z-index: 997;
  box-sizing: content-box;
  left: auto;
  margin-left: -605px;
  color: #003f9d;
  cursor: pointer;
`;

const StyledBiChevronRight = styled(BiChevronRight)`
  font-size: 60pt;
  position: absolute;
  margin-top: 38vh;
  padding: 30px;
  z-index: 997;
  box-sizing: content-box;
  right: auto;
  margin-left: 605px;
  color: #003f9d;
  cursor: pointer;
`;

export const MyProjectDesktop = ({ width, ProjectsData, title, buttonName, info }: Props) => {
  const [element, setElement] = useState(0);

  useEffect(() => {
    if (element === 1) {
    } else {
    }
  });

  const Next = () => {};

  const Prev = () => {};

  return (
    <Wrapper id="my-project">
      <Main>
        <Heading bold>{title}</Heading>
        <Top>
          <StyledParagraph bold>{info}</StyledParagraph>
          <Line />
          <StyledHeading bold>{`0${element + 1}/0${ProjectsData.length}`}</StyledHeading>
        </Top>
      </Main>

      <StyledBiChevronLeft className="swiper-button-prev-unique" id="left-button" onClick={() => Prev()} />

      <StyledBiChevronRight className="swiper-button-next-unique" id="right-button" onClick={() => Next()} />

      <Swiper
        slidesPerView="auto"
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true
        }}
        navigation={{
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique'
        }}
        // loop={true}
        centeredSlides={true}
        onSlideChange={(swiper) => setElement(swiper.activeIndex)}
      >
        {ProjectsData.map(
          (items: {
            images: string;
            name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
            technology: any;
            description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
            website: string | undefined;
            github: string | undefined;
          }) => (
            <SwiperSlide className="slide">
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
                    {items.website && (
                      <StyledButton target="_blank" href={items.website}>
                        {buttonName}
                      </StyledButton>
                    )}
                    {items.github && (
                      <StyledButton other target="_blank" href={items.github}>
                        GITHUB
                      </StyledButton>
                    )}
                  </Bottom>
                </Info>
              </Image>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Wrapper>
  );
};
