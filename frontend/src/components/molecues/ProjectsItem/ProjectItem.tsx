import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import React from 'react';

import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background-color: #1d1d1d;
  padding: 20px;
  padding-bottom: 30px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  text-align: center;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(1) {
    margin-right: 5px;
  }
  &:nth-child(2) {
    margin-left: 5px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 20vh;

  @media (max-width: 720px) {
    min-height: 25vh;
  }

  @media (max-width: 450px) {
    min-height: 35vh;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 10px 0px;
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

export const ProjectItem = ({ dataItem, index, length, buttonName }: Props) => {
  return (
    <Wrapper>
      <Top>
        <StyledParagraph>{dataItem.name}</StyledParagraph>
        <StyledParagraph>{`${dataItem.technology},`}</StyledParagraph>
        <StyledParagraph other>{dataItem.description}</StyledParagraph>
      </Top>
      <Bottom>
        {dataItem.website && (
          <StyledButton target="_blank" href={dataItem.website}>
            {buttonName}
          </StyledButton>
        )}

        {dataItem.github && (
          <StyledButton target="_blank" href={dataItem.github}>
            GITHUB
          </StyledButton>
        )}
      </Bottom>

      <Image src={process.env.PUBLIC_URL + '/images/projects' + dataItem.images} />
    </Wrapper>
  );
};
