import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';
import Card from './card/Card';

const Title = styled.h1`
  background: linear-gradient(182deg, #4924ec 0%, #cb1291 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  font-weight: 700;
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  justify-content: flex-start;
  align-self: start;
`;

const WrapperProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > div:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 1400px) {
      flex-direction: column;
    }
  }

  & > div:nth-child(odd) {
    @media (max-width: 1400px) {
      flex-direction: column;
    }
  }
`;

const Button = styled.button`
  margin-top: 20px;
  border-radius: 15px;
  background: linear-gradient(180deg, #2d27ff 0%, #ff0a6c 130.39%);
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  padding: 15px 75px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  cursor: pointer;

  transition: 0.8s all ease;
  &:hover {
    opacity: 0.8;
  }
`;

const MyProjectNew = () => {
  const [data, setData] = useState<any>(null);
  const [moreShow, setMoreShow] = useState<boolean>(false);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = navigator.language === 'en' || navigator.language === 'pl' ? navigator.language : 'en';
        const res = await axios({ url: `./locales/${lang}/Projects.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <BasicTemplate id="my-project">
      <div style={{ paddingBottom: '10vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Title>{data?.title}</Title>
        <WrapperProject>
          {data?.projects &&
            data.projects
              .filter((item: any, idx: number) => (moreShow ? idx < 10 : idx < 3))
              .map(
                (
                  items: {
                    images: string;
                    name: string;
                    technology: any;
                    description: string;
                    website: string | undefined;
                    github: string | undefined;
                  },
                  index: number
                ) => (
                  <Card
                    images={items.images}
                    name={items.name}
                    description={items.description}
                    website={items.website}
                    github={items.github}
                    index={index}
                  />
                )
              )}
        </WrapperProject>
        {!moreShow && <Button onClick={() => setMoreShow(true)}>See More...</Button>}
      </div>
    </BasicTemplate>
  );
};

export default MyProjectNew;
