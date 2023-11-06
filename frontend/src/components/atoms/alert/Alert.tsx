import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';
import { motion } from 'framer-motion';
import { animationShowImage, animationSlideLeft } from 'animation/animation';
import done from 'images/icons/done.svg';
import error from 'images/icons/error.svg';

interface Wrapper {
  isError: boolean;
}

const Wrapper = styled.div<Wrapper>`
  display: flex;
  padding: 19px 20px;
  background: ${({ isError }) => (isError ? '#EB4D09' : '#72c70d')};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  border-left: ${({ isError }) => (isError ? '8px solid #8F0000' : '8px solid #1a8100')};
`;

export const Alert = ({ isError }: Wrapper) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2vh',
        left: 0,
        width: '100%',

        zIndex: 9999
      }}
    >
      <motion.div
        variants={animationSlideLeft(0.4)}
        initial="hidden"
        animate="visable"
        style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}
      >
        <Wrapper isError={isError}>
          {!isError ? (
            <>
              <img src={done} />
              <span>Just sent me an email, thanks ;)</span>
            </>
          ) : (
            <>
              <img src={error} />
              <span>Error, thanks for reporting to me </span>
            </>
          )}
        </Wrapper>
      </motion.div>
    </div>
  );
};
