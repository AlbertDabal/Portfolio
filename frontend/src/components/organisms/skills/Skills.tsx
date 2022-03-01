import { Heading } from 'components/atoms/heading/Heading';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import { SkillData } from 'data/SkillsData';
import React from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledHeading = styled(Heading)`
  border-bottom: 1px solid white;
  line-height: 0.1em;
  text-align: center;
  transform: rotate(90deg);
  transform-origin: 0 0;
  width: 85vh;
`;

const Main = styled.div`
  padding: 10% 25%;
`;

const Describe = styled.div`
  padding: 10%;
`;

const Item = styled.div`
  /* display: flex;
  width: 100%;
  flex-direction: column; */

  @media (min-width: 499px) {
    display: grid;
    margin-top: 10vh;
    grid-template-columns: 20% 20%;
    column-gap: 20%;
    row-gap: 15px;
  }
`;

export const Skills = () => {
  return (
    <BasicTemplate index={2}>
      <Wrapper>
        <StyledHeading bold>Skills</StyledHeading>
        <Item>
          {SkillData.map((item) => (
            <Main>
              <Paragraph bold other>
                {item.name}
              </Paragraph>
              <Describe>
                {item.items.map((item) => (
                  <Paragraph small>{item}</Paragraph>
                ))}
              </Describe>
            </Main>
          ))}
        </Item>
      </Wrapper>
    </BasicTemplate>
  );
};
