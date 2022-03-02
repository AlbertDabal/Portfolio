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
  @media (max-width: 1000px) {
    padding-top: 2vh;
  }
`;

const Info = styled.div`
  @media (max-width: 1000px) {
    padding-left: 0;
    height: 30vh;
    padding-top: 50px;
  }
  padding-left: 10%;
  width: 100%;
  height: 30vh;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
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
  margin-top: 4vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 2vh;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.l};
  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const Contacts = () => {
  return (
    <BasicTemplate index={4} id="contacts">
      <Wrapper>
        <StyledHeading bold>Contacts</StyledHeading>
        <StyledParagraph bold>Let's Talk!</StyledParagraph>
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
