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
}

interface Project {
  name: string;
  technology: string[];
  description: string;
  images: string;
  link: string;
}

export const MyProjectsItem = ({ dataItem, index, length }: Props) => {
  return (
    <Wrapper>
      <Paragraph small bold>
        {`0${index}/0${length}`}
      </Paragraph>

      <Paragraph bold>{dataItem.name}</Paragraph>
      <Paragraph small>{`${dataItem.technology},`}</Paragraph>
      <Paragraph small other>
        {dataItem.description}
      </Paragraph>
      <Button>read more</Button>
      <Image src={process.env.PUBLIC_URL + '/images/projects' + dataItem.images} />
    </Wrapper>
  );
};
