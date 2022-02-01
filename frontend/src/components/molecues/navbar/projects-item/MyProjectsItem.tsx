import { Button } from 'components/atoms/button/Button';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import React from 'react';

import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 35vh;
`;

const Wrapper = styled.div``;

interface Props {
  dataItem: Project;
}

interface Project {
  name: string;
  technology: string[];
  description: string;
  images: string;
  link: string;
}

export const MyProjectsItem = ({ dataItem }: Props) => {
  return (
    <Wrapper>
      <Paragraph small bold>
        01/05
      </Paragraph>

      <Paragraph bold>{dataItem.name}</Paragraph>
      <Paragraph small>{`${dataItem.technology},`}</Paragraph>
      <Paragraph small other>
        {dataItem.description}
      </Paragraph>
      <Button>read more</Button>
      <Image src={dataItem.images} />
    </Wrapper>
  );
};
