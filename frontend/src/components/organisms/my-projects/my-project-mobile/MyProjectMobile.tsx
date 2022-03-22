import React, { useState } from 'react';
import styled from 'styled-components';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { ProjectsData } from 'data/ProjectsData';
import { MyProjectsItem } from 'components/molecues/navbar/projects-item/MyProjectsItem';
import { Heading } from 'components/atoms/heading/Heading';

interface Props {
  length?: number;
  element?: number;
  width?: number;
  ProjectsData?: any;
  title?: string;
}

const Wrapper = styled.div`
  height: 90vh;
  width: 80%;
  max-width: 1150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Top = styled.div`
  margin-bottom: 20px;
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
  margin-top: 20px;
  > svg {
    cursor: pointer;
    color: #585858;
    font-weight: 300;
    font-size: 40px;
    transition: color 200ms linear;
  }
`;

export const MyProjectMobile = ({ ProjectsData, title }: Props) => {
  const [selectItem, setSelectItem] = useState(0);

  const NextProject = () => {
    if (ProjectsData.length > selectItem + 1) {
      setSelectItem(selectItem + 1);
    } else {
    }
  };

  const PrevProject = () => {
    if (0 > selectItem - 1) {
      setSelectItem(0);
    } else {
      setSelectItem(selectItem - 1);
    }
  };
  return (
    <Wrapper id="my-project">
      <Top>
        <Heading bold>{title}</Heading>
        <FiArrowRight onClick={() => NextProject()} />
      </Top>
      <MyProjectsItem index={selectItem + 1} length={ProjectsData.length} dataItem={ProjectsData[selectItem]} />
      <Bottom>
        <FiArrowLeft onClick={() => PrevProject()} />
      </Bottom>
    </Wrapper>
  );
};
