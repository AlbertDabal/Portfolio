import React, { useState } from 'react';
import styled from 'styled-components';
import { NavbarIcon } from './NavbarIcon';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: fixed;
  top: 0;
`;

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <NavbarIcon />
    </Wrapper>
  );
};
