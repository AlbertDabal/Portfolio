import { animationShowImage } from 'animation/animation';
import { motion } from 'framer-motion';
import profile from 'images/profile.webp';
import styled from 'styled-components';

const Image = styled.img`
  width: 50%;

  position: absolute;
  right: 10%;
  bottom: 0;

  @media (max-width: 1350px) {
    right: 0%;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ImageContainer = () => {
  return (
    <motion.div variants={animationShowImage(0.8)} initial="hidden" animate="visable">
      <Image src={profile} alt="profileImage" />
    </motion.div>
  );
};
