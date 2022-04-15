import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { MyProjectsItem } from 'components/molecues/projects-item/MyProjectsItem';
import { Heading } from 'components/atoms/heading/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';

interface Props {
  length?: number;
  element?: number;
  width?: number;
  ProjectsData?: any;
  title?: string;
  buttonName?: string;
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin-left: 20%;
  @media (max-width: 500px) {
    margin-left: 10%;
  }
  @media (min-width: 1001px) {
    display: none;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 40px;
`;

export const MyProjectMobile = ({ ProjectsData, title, buttonName }: Props) => {
  const [selectItem, setSelectItem] = useState(0);

  return (
    <Wrapper id="my-project">
      <StyledHeading bold>{title}</StyledHeading>
      <Swiper
        pagination={{
          clickable: true
        }}
        slidesPerView={1.2}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        {ProjectsData.map((item: any) => (
          <SwiperSlide className="slide">
            <MyProjectsItem
              buttonName={buttonName}
              index={selectItem + 1}
              length={ProjectsData.length}
              dataItem={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};
