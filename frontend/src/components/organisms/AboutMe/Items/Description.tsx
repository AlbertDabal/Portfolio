import { Heading } from 'components/atoms/Heading/Heading';
import LinkOutside from 'components/atoms/Link/LinkOutside';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { motion, Variants } from 'framer-motion';
import laptop from 'images/laptop.webp';
import styled from 'styled-components';

interface Props {
  data: {
    title: string;
    descriptionTop: string;
    description: string;
    cvButton: string;
    cvLink: string;
  };
}

const Info = styled.div`
  min-height: 30vh;
  width: 42.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  align-items: flex-start;
  text-align: justify;

  @media (max-width: 1110px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  margin-top: 15vh;

  @media (max-width: 1300px) {
    margin-top: 7vh;
  }

  @media (max-width: 800px) {
    margin-top: 4vh;
  }

  @media (max-width: 500px) {
    margin-top: 4vh;
  }

  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10vh;
  position: relative;

  @media (max-width: 1110px) {
    margin-bottom: 5vh;
  }
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 2.7rem;
  padding-right: 0px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  object-fit: contain;
  position: absolute;

  @media (max-width: 1300px) {
    width: 80%;
    margin-top: -170px;
  }

  @media (max-width: 1110px) {
    display: none;
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

const imageVariants: Variants = {
  offscreen: {
    x: '100vw'
  },
  onscreen: {
    x: 100,
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

const Description = ({ data }: Props) => {
  const { title, descriptionTop, description, cvButton, cvLink } = data;

  return (
    <Wrapper>
      <AnimatedContainerWhenScroll>
        <motion.div variants={cardVariants}>
          <Info>
            <Heading bold>{title}</Heading>
            <StyledParagraph bold light>
              {descriptionTop}
            </StyledParagraph>
            <StyledParagraph style={{ marginRight: 40 }} light>
              {description}
            </StyledParagraph>
            <Bottom style={{ marginTop: 30 }}>
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  delay: 1.3,
                  duration: 0.5,
                  scale: {
                    duration: 1.5,
                    delay: 1.4
                  }
                }}
              >
                <LinkOutside other href={process.env.PUBLIC_URL + `/data/${cvLink}`} target="_blank">
                  {cvButton}
                </LinkOutside>
              </motion.div>
            </Bottom>
          </Info>
        </motion.div>
      </AnimatedContainerWhenScroll>

      <AnimatedContainerWhenScroll>
        <motion.div
          style={{
            position: 'absolute',
            marginTop: '-770px'
          }}
          variants={imageVariants}
        >
          <Image draggable={false} src={laptop} alt={laptop} />
        </motion.div>
      </AnimatedContainerWhenScroll>
    </Wrapper>
  );
};

export default Description;
