import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  children: string;
  to: string;
  spy: boolean;
  smooth: boolean;
  offset: number;
  duration: number;
}

export const StyledLinkTest = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 50px;
  background-color: black;
  color: ${({ theme }) => theme.primaryColorLight};
  text-decoration: none;
  border-radius: 15px;
  cursor: pointer;

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 3px 0px rgba(0, 0, 0, 0.14),
    0px 3px 5px -2px rgba(0, 0, 0, 0.2);
`;

const LinkLocal = (props: Props) => {
  console.log('props', props);

  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
      <StyledLinkTest {...props}></StyledLinkTest>
    </motion.div>
  );
};

export default LinkLocal;
