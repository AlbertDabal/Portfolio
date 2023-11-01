import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';

import profile2 from 'images/profile2.png';
import { Heading } from 'components/atoms/Heading/Heading';
import axios from 'axios';
import css from 'images/technology-icon/css.png';
import html from 'images/technology-icon/html.png';
import js from 'images/technology-icon/js.png';
import react from 'images/technology-icon/react.png';
import ts from 'images/technology-icon/ts.png';
import github from 'images/technology-icon/github.png';
import linkedin from 'images/technology-icon/linkedin.png';
import { motion, Variants } from 'framer-motion';
import Description from './Items/Description';

const StyledParagraph = styled(Paragraph)`
  line-height: 2.7rem;
  padding-right: 0px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  padding-bottom: 150px;
  position: relative;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const IconBox = styled.a`
  background-color: #141414;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 5px;
  text-decoration: none;
`;

const GroupSocial = styled.div`
  display: flex;
  gap: 30px;
  position: absolute;
  right: 0;
  bottom: -100px;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    bottom: 80px;
    flex-direction: row;
  }
`;

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

const imageVariantsOther: Variants = {
  offscreen: {
    x: '100vw'
  },
  onscreen: {
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.8,
      delay: 0.5
    }
  }
};

const infoVariant: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5
    }
  }
};

const AboutMe = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = navigator.language === 'en' || navigator.language === 'pl' ? navigator.language : 'en';
        const res = await axios({ url: `./locales/${lang}/AboutMe.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <BasicTemplate index={1} id="about-me" backgroundColorStyle="black">
      <div style={{ position: 'relative' }}>
        {data && <Description data={data} />}
        <Row>
          <div style={{ flex: 1 }}>
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
              <motion.div variants={cardVariants}>
                <img style={{ width: '100%', height: 'auto' }} src={profile2} />
              </motion.div>
            </motion.div>
          </div>
          <div style={{ flex: 1, display: 'flex' }}>
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
              <motion.div variants={imageVariantsOther}>
                <Heading bold>Main skills</Heading>
                <div style={{ display: 'flex', gap: 60, marginTop: 40, flexWrap: 'wrap' }}>
                  <img src={react} />
                  <img src={js} />
                  <img src={ts} />
                  <img src={css} />
                  <img src={html} />
                </div>
                <Heading style={{ marginTop: 40, marginBottom: 20 }} bold>
                  Other skills
                </Heading>
                <StyledParagraph big light bold>
                  <ul style={{ listStyle: 'square', marginLeft: 30 }}>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>GIT</li>
                    <li>Docker</li>
                  </ul>
                </StyledParagraph>
              </motion.div>
            </motion.div>
          </div>
        </Row>
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
          <motion.div variants={infoVariant}>
            <GroupSocial>
              <IconBox target="_blank" href="https://github.com/AlbertDabal">
                <img src={github} />
                <Paragraph bold big light>
                  Github
                </Paragraph>
              </IconBox>
              <IconBox target="_blank" href="https://www.linkedin.com/in/albert-d%C4%85bal/">
                <img src={linkedin} />
                <Paragraph bold big light>
                  Linkedin
                </Paragraph>
              </IconBox>
            </GroupSocial>
          </motion.div>
        </motion.div>
      </div>
    </BasicTemplate>
  );
};

export default AboutMe;
