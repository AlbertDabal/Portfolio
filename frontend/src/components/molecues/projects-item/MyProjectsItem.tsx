import { Button } from 'components/atoms/button/Button';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import React from 'react';

import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 35vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  align-items: flex-start;
`;

interface Props {
  dataItem: Project;
  index?: number;
  length?: number;
  buttonName?: string;
}

interface Project {
  name: string;
  technology: string[];
  description: string;
  images: string;
  website: string;
  github: string;
}

export const MyProjectsItem = ({ dataItem, index, length, buttonName }: Props) => {
  return (
    <Wrapper>
      <Paragraph bold>{dataItem.name}</Paragraph>
      <Paragraph small>{`${dataItem.technology},`}</Paragraph>
      <Paragraph small other>
        {dataItem.description}
      </Paragraph>
      {dataItem.website && (
        <Button target="_blank" href={dataItem.website}>
          {buttonName}
        </Button>
      )}

      {dataItem.github && (
        <Button target="_blank" href={dataItem.github}>
          GITHUB
        </Button>
      )}

      <Image src={process.env.PUBLIC_URL + '/images/projects' + dataItem.images} />
    </Wrapper>
  );
};
