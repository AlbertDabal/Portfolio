import { Button } from 'components/atoms/button/Button';
import { Heading } from 'components/atoms/heading/Heading';
import { Input } from 'components/atoms/input/Input';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import { TextArea } from 'components/atoms/textarea/TextArea';
import React from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding-top: 10vh;
`;

const Info = styled.div`
  @media (max-width: 1000px) {
    padding-left: 0;
    height: 30vh;
  }
  padding-left: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10vh;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

export const Contacts = () => {
  return (
    <BasicTemplate index={4} id="contacts">
      <Wrapper>
        <Heading bold>Let’s talk!</Heading>
        <Footer>
          <Form>
            <Input placeholder="Your Email" />
            <TextArea placeholder="Please describe your problem" />
            <StyledButton>SEND EMAIL</StyledButton>
          </Form>
          <Info>
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
          </Info>
        </Footer>
      </Wrapper>
    </BasicTemplate>
  );
};
