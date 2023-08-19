import { Button } from 'components/atoms/button/Button';
import { Heading } from 'components/atoms/heading/Heading';
import { Input } from 'components/atoms/input/Input';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import { TextArea } from 'components/atoms/textarea/TextArea';
import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';
import emailjs from 'emailjs-com';
import { Alert } from 'components/atoms/alert/Alert';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  background-color: #0e0e0e;
  padding: 50px;

  position: absolute;
  top: -50px;
  padding-top: 5vh;
  @media (max-width: 1000px) {
    padding-top: 2vh;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const Form = styled.form`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 2vh;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 20px;

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

const Submit = styled.input`
  transition: 0.8s all ease;
  &:hover {
    opacity: 0.7;
  }
  cursor: pointer;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 25px 80px;
  border-radius: 15px;
  background: linear-gradient(188deg, #2d27ff 0%, #ff0a6c 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => 'white'};
  text-decoration: none;
`;

export const Contacts = () => {
  const [done, setDone] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const target: any = e.currentTarget;
    const reset: any = e.target;

    console.log(e.currentTarget);

    emailjs.sendForm('gmail', 'template_xhvqv3e', target, `${process.env.REACT_APP_YOUR_USER_ID}`).then(
      (result) => {
        console.log(result.text);
        setDone(false);
        setTimeout(() => {}, 2000);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setDone(true);
    reset.reset();
  };

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = navigator.language === 'en' || navigator.language === 'pl' ? navigator.language : 'en';
        const res = await axios({ url: `./locales/${lang}/Contacts.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <BasicTemplate index={4} backgroundColorStyle="black">
      <div style={{ position: 'relative' }}>
        <Wrapper id="contacts">
          {done && <Alert />}
          {data && (
            <div style={{ width: '100%' }}>
              <StyledHeading bold>{data.title}</StyledHeading>
              <Footer>
                <Form onSubmit={sendEmail}>
                  <Input name="email" placeholder={data.emailPlaceholder} />
                  <TextArea name="message" placeholder={data.textPlaceholder} />
                  <Submit type="submit" value={data.buttonSend} />
                </Form>
                <Info>
                  <div>
                    <Paragraph other>{data.phoneValue}</Paragraph>
                  </div>
                  <div>
                    <Paragraph other>{data.email}</Paragraph>
                  </div>
                </Info>
              </Footer>
            </div>
          )}
        </Wrapper>
      </div>
    </BasicTemplate>
  );
};
