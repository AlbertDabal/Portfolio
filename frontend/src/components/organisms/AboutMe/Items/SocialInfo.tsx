import React from 'react';
import { motion, Variants } from 'framer-motion';
import github from 'images/technology-icon/github.png';
import linkedin from 'images/technology-icon/linkedin.png';
import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

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

const AnimatedContainerWhenScroll = ({ children }: any) => (
  <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
    {children}
  </motion.div>
);

const SocialInfo = () => {
  return (
    <AnimatedContainerWhenScroll>
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
    </AnimatedContainerWhenScroll>
  );
};

export default SocialInfo;
