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

  padding-top: 10vh;
  @media (max-width: 1000px) {
    padding-top: 2vh;
  }
`;

const Info = styled.div`
  @media (max-width: 1000px) {
    padding-left: 0;
    height: 30vh;
    padding-top: 40px;
  }
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
  margin-top: 4vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 2vh;
  }
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

const Submit = styled.input`
  transition: 0.8s all ease;
  &:hover {
    opacity: 0.7;
  }
  cursor: pointer;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 8px 50px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.themeColor};
  color: ${({ theme }) => theme.primaryColor};
  border: 3px solid #003f9d;
  text-decoration: none;

  @media (max-width: 499px) {
    padding: 4px 30px;
  }
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
    <BasicTemplate index={4} id="contacts">
      <Wrapper>
        {done && <Alert />}
        {data && (
          <div style={{ width: '100%' }}>
            <StyledHeading bold>{data.title}</StyledHeading>
            <Footer>
              <form onSubmit={sendEmail}>
                <Input name="email" placeholder={data.emailPlaceholder} />
                <TextArea name="message" placeholder={data.textPlaceholder} />
                <Submit type="submit" value={data.buttonSend} />
              </form>
              <Info>
                <Paragraph bold other>
                  {data.phone}
                </Paragraph>
                <Paragraph other>{data.phoneValue}</Paragraph>
                <Paragraph bold other>
                  EMAIL
                </Paragraph>
                <Paragraph other>{data.email}</Paragraph>
              </Info>
            </Footer>
          </div>
        )}
      </Wrapper>
    </BasicTemplate>
  );
};
