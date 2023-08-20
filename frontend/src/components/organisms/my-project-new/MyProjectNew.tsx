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
`;

const WrapperProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > div:nth-child(even) {
    flex-direction: row-reverse;
  }

  & > div:nth-child(odd) {
  }
`;

const MyProjectNew = () => {
  const [data, setData] = useState<any>(null);

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
      <div style={{ paddingBottom: '10vh' }}>
        <Title>{data?.title}</Title>
        <WrapperProject>
          {data?.projects &&
            data.projects.map(
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
      </div>
    </BasicTemplate>
  );
};

export default MyProjectNew;
