import { Button } from 'components/atoms/button/Button';
import { Heading } from 'components/atoms/heading/Heading';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';
import project from 'images/project/project-1.png';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { ProjectsData } from 'data/ProjectsData';
import { MyProjectsItem } from 'components/molecues/navbar/projects-item/MyProjectsItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 82vh;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  > svg {
    cursor: pointer;
    color: white;
    font-weight: 300;
    font-size: 40px;
    transition: color 200ms linear;
  }
`;

const Bottom = styled.div`
  > svg {
    cursor: pointer;
    color: #585858;
    font-weight: 300;
    font-size: 40px;
    transition: color 200ms linear;
  }
`;

export const MyProjects = () => {
  const [selectItem, setSelectItem] = useState(0);
  return (
    <BasicTemplate index={3} id="my-project">
      <Wrapper>
        <Top>
          <Heading bold>I created At</Heading>
          <FiArrowRight />
        </Top>
        <MyProjectsItem dataItem={ProjectsData[selectItem]} />
        <Bottom>
          <FiArrowLeft />
        </Bottom>
      </Wrapper>
    </BasicTemplate>
  );
};
