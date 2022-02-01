import { Button } from 'components/atoms/button/Button';
import { Heading } from 'components/atoms/heading/Heading';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 60vh;
`;

export const Contacts = () => {
  return (
    <BasicTemplate index={4} id="contacts">
      <Wrapper>
        <Heading bold>Let’s talk!</Heading>
        <Paragraph bold other>
          PHONE
        </Paragraph>
        <Paragraph small other>
          887 692 891
        </Paragraph>
        <Paragraph bold other>
          EMAIL
        </Paragraph>
        <Paragraph small other>
          albert.dabal22@gmail.com
        </Paragraph>
        <Button>hire me</Button>
      </Wrapper>
    </BasicTemplate>
  );
};
