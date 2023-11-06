import axios from 'axios';
import { Alert } from 'components/atoms/Alert/Alert';
import { Heading } from 'components/atoms/Heading/Heading';
import { Input } from 'components/atoms/Input/Input';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { TextArea } from 'components/atoms/Textarea/TextArea';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import email from 'images/technology-icon/email.webp';
import phone from 'images/technology-icon/phone.webp';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';

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
    padding: 20px 0px;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 90px;
  margin-bottom: 40px;
  margin-top: 60px;

  @media (max-width: 1000px) {
    margin-top: 20px;
  }
`;

const Form = styled.form`
  @media (min-width: 1000px) {
    position: absolute;
    top: -50px;
    right: 30px;
    width: 50%;
  }

  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  background-color: white;
  padding: 50px 30px;

  @media (max-width: 1000px) {
    padding: 50px 15px 20px 15px;
  }

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
    gap: 30px;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0px;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: black;
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

  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;

const MainWrapper = styled.div`
  padding-top: 100px;
  width: 100%;

  @media (max-width: 1000px) {
    padding-top: 0px;
  }
`;

export const Contacts = () => {
  const [done, setDone] = useState<any>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const target: any = e.currentTarget;

    const reset: any = e.target;

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
        target,
        `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(null);
          }, 2500);
        },
        (error) => {
          setDone(false);
          console.log(error.text);
        }
      );

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
    <MainWrapper id="contacts">
      <BasicTemplate backgroundColorStyle="linear-gradient(75deg, #2D27FF 33.05%, #FF0A6C 99.47%), #FFF">
        <div style={{ position: 'relative' }}>
          <Wrapper>
            {done !== null && <Alert isError={done === false} />}
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
                      <StyledParagraph bold>{data.emailPlaceholder}</StyledParagraph>
                      <Input name="email" />
                    </div>
                    <div style={{ width: '100%' }}>
                      <StyledParagraph bold>Message</StyledParagraph>
                      <TextArea name="message" placeholder={data.textPlaceholder} />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      style={{ display: 'flex', alignSelf: 'flex-end' }}
                    >
                      <Submit type="submit" value={data.buttonSend} />
                    </motion.div>
                  </Form>
                </Footer>
              </div>
            )}
          </Wrapper>
        </div>
      </BasicTemplate>
    </MainWrapper>
  );
};
