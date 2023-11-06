import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';
import Card from './Card/Card';
import { AnimatePresence, motion, Variants } from 'framer-motion';

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
`;

const Button = styled.div`
  text-decoration: none;
  border: none;
  outline: none;
  color: white;
  background: linear-gradient(180deg, #2d27ff 0%, #ff0a6c 130.39%);
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 80px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: pointer;

  @media (max-width: 1100px) {
    background: transparent;
    box-shadow: none;
    color: black;
    text-decoration: underline;
    font-weight: 600;
    & > span {
      text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

const MyProject = () => {
  const [data, setData] = useState<any>(null);
  const [moreShow, setMoreShow] = useState<boolean>(false);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = 'en';
        const res = await axios({ url: `./locales/${lang}/Projects.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  const AnimatedContainerWhenScroll = ({ children }: any) => (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      {children}
    </motion.div>
  );

  const cardVariants: Variants = {
    offscreen: {
      x: '-100vw'
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.8
      }
    }
  };

  return (
    <BasicTemplate id="my-project">
      <div style={{ paddingBottom: '15vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    technology: string;
                    description: string;
                    website: string | undefined;
                    github: string | undefined;
                    alt: string;
                  },
                  index: number
                ) => (
                  <Card
                    images={items.images}
                    name={items.name}
                    technology={items.technology}
                    description={items.description}
                    website={items.website}
                    github={items.github}
                    alt={items.alt}
                    index={index}
                  />
                )
              )}
        </WrapperProject>

        {!moreShow && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            // style={{ display: 'flex', alignSelf: 'center', justifySelf: 'center' }}
          >
            <Button onClick={() => setMoreShow(true)}>See More...</Button>
          </motion.div>
        )}
      </div>
    </BasicTemplate>
  );
};

export default MyProject;
