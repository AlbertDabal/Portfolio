import { animationShowElement, animationSlideLeft } from 'animation/animation';
import { Heading } from 'components/atoms/Heading/Heading';
import LinkLocal from 'components/atoms/Link/LinkLocal';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  data: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
}

const Title = styled(Heading)`
  font-size: 6rem;

  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  padding-bottom: 2em;

  @media (max-width: 800px) {
    padding-bottom: 1em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;

  margin-bottom: 50px;
`;

const Description = ({ data }: Props) => {
  const { title, subtitle, description, button } = data;

  return (
    <Wrapper>
      <motion.div variants={animationSlideLeft(0.1)} initial="hidden" animate="visable">
        <Title bold>{title}</Title>
        <Title>{subtitle}</Title>
      </motion.div>

      <motion.div variants={animationShowElement(1)} initial="hidden" animate="visable">
        <StyledParagraph light>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </StyledParagraph>
      </motion.div>
      <Button button={button} />
    </Wrapper>
  );
};

interface ButtonProps {
  button: string;
}

const Button = ({ button }: ButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: [1, 1.1, 1] }}
      transition={{
        delay: 1.5,
        duration: 0.5,
        scale: {
          duration: 1.5,
          delay: 1.4
        }
      }}
    >
      <LinkLocal to="about-me" spy={true} smooth={true} offset={-30} duration={500}>
        {button}
      </LinkLocal>
    </motion.div>
  );
};

export default Description;
