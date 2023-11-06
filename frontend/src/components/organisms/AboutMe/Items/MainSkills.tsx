import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

import { Heading } from 'components/atoms/Heading/Heading';
import { motion, Variants } from 'framer-motion';
import profile2 from 'images/profile2.webp';
import css from 'images/technology-icon/css.webp';
import html from 'images/technology-icon/html.webp';
import js from 'images/technology-icon/js.webp';
import react from 'images/technology-icon/react.webp';
import ts from 'images/technology-icon/ts.webp';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  padding-bottom: 150px;
  position: relative;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 2.7rem;
  padding-right: 0px;
`;

const Row = styled.div`
  flex: 1;
`;

const Box = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  margin-bottom: 40px;
`;

const List = styled.ul`
  margin-top: 30px;
  list-style: square;
  margin-left: 30px;
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

const AnimatedContainerWhenScroll = ({ children }: any) => (
  <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
    {children}
  </motion.div>
);

const mainSkillsData = [react, js, ts, css, html];

const otherSkillsData = ['Express', 'MongoDB', 'MySQL', 'GIT', 'Docker'];

const MainSkills = () => {
  return (
    <Wrapper>
      <Row>
        <AnimatedContainerWhenScroll>
          <motion.div variants={cardVariants}>
            <img alt="profile2" style={{ width: '100%', height: 'auto' }} src={profile2} />
          </motion.div>
        </AnimatedContainerWhenScroll>
      </Row>
      <Row>
        <AnimatedContainerWhenScroll>
          <motion.div variants={imageVariantsOther}>
            <Column>
              <Heading bold>Main skills</Heading>
              <Box>
                {mainSkillsData.map((item, index) => (
                  <img key={index} alt="skills" src={item} />
                ))}
              </Box>
            </Column>
            <Column>
              <Heading bold>Other skills</Heading>
              <StyledParagraph big light bold>
                <List>
                  {otherSkillsData.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </List>
              </StyledParagraph>
            </Column>
          </motion.div>
        </AnimatedContainerWhenScroll>
      </Row>
    </Wrapper>
  );
};

export default MainSkills;
