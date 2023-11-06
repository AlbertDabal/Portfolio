import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  children: string;
  other?: boolean;
  href: string;
  target: string;
}

export const StyledLink = styled.a`
  user-select: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding: 15px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 180px;
  color: ${({ theme }) => 'white'};
  border-radius: 15px;
  background: linear-gradient(188deg, #2d27ff 0%, #ff0a6c 100%);
  box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.58);
  text-decoration: none;
  cursor: pointer;
`;

const LinkOutside = (props: Props) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
      <StyledLink {...props}></StyledLink>
    </motion.div>
  );
};

export default LinkOutside;
