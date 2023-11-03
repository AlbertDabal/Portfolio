import { Button } from 'components/atoms/Button/Button';
import { Heading } from 'components/atoms/Heading/Heading';
import { Input } from 'components/atoms/Input/Input';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { TextArea } from 'components/atoms/Textarea/TextArea';
import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';
import emailjs from 'emailjs-com';
import { Alert } from 'components/atoms/Alert/Alert';
import axios from 'axios';
import email from 'images/technology-icon/email.png';
import phone from 'images/technology-icon/phone.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  min-height: 80vh;
  padding-top: 5vh;
  @media (max-width: 1000px) {
    padding-top: 2vh;
    top: 50px;
    padding: 50px 25px;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 90px;
  margin-bottom: 40px;
  margin-top: 60px;
`;

const Form = styled.form`
  position: absolute;
  top: -50px;
  right: 30px;
  width: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  background-color: white;
  padding: 50px 30px;
  border-radius: 15px;
  box-shadow: 5px 11px 27px 0px rgba(0, 0, 0, 0.25);
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 2vh;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0px;

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

const Image = styled.img`
  width: 25px;
  height: auto;
`;

const Submit = styled.input`
  cursor: pointer;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 22px 35px;
  border-radius: 15px;
  background: black;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => 'white'};
  text-decoration: none;
  align-self: flex-end;
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
        const lang = 'en';
        const res = await axios({ url: `./locales/${lang}/Contacts.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <div id="contacts" style={{ width: '100%', paddingTop: 100 }}>
      <BasicTemplate backgroundColorStyle="linear-gradient(75deg, #2D27FF 33.05%, #FF0A6C 99.47%), #FFF">
        <div style={{ position: 'relative' }}>
          <Wrapper>
            {done && <Alert />}
            {data && (
              <div style={{ width: '100%' }}>
                <Footer>
                  <Info>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                      <StyledHeading bold>{data.title}</StyledHeading>
                      <Paragraph light>
                        <div dangerouslySetInnerHTML={{ __html: data.subtitle }} />
                      </Paragraph>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Image src={phone} />
                        <Paragraph light>{data.phoneValue}</Paragraph>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Image src={email} />
                        <Paragraph light>{data.email}</Paragraph>
                      </div>
                    </div>
                  </Info>
                  <Form onSubmit={sendEmail}>
                    <div style={{ width: '100%' }}>
                      <Paragraph bold>{data.emailPlaceholder}</Paragraph>
                      <Input name="email" />
                    </div>
                    <div style={{ width: '100%' }}>
                      <Paragraph bold>Message</Paragraph>
                      <TextArea name="message" placeholder={data.textPlaceholder} />
                    </div>
                    <Submit type="submit" value={data.buttonSend} />
                  </Form>
                </Footer>
              </div>
            )}
          </Wrapper>
        </div>
      </BasicTemplate>
    </div>
  );
};
