import { NavbarData } from 'data/NavabarData';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from 'images/logo.png';

interface Props {
  colorChange?: boolean;
}

const WrapperMain = styled.div<Props>`
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  transition: 0.8s all ease;
  left: 0;
  background-color: ${({ colorChange, theme }) => (colorChange ? theme.backgroundColor : 'transparent')};
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  color: ${({ theme }) => '#333333'};
  cursor: pointer;
  user-select: none;
  padding: 1.5em 1em;
`;

const Wrapper = styled.nav`
  /* border-bottom: 1px solid ${({ theme }) => theme.secondaryColor}; */
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0em 2em;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  width: 700px;

  > .active {
    color: white;
  }
  justify-content: space-between;
`;

const Logo = styled.img`
  user-select: none;
  cursor: pointer;
`;

export const NavbarDesktop = ({ colorChange }: Props) => {
  return (
    <WrapperMain colorChange={colorChange}>
      <Wrapper>
        {console.log(colorChange)}
        <Link to="main" spy={true} smooth={true} offset={-70} duration={500}>
          <Logo src={logo} />
        </Link>
        <Menu>
          {NavbarData.map((item) => (
            <StyledLink activeClass="active" to={item.link} spy={true} smooth={true} offset={-70} duration={500}>
              {item.name.toUpperCase()}
            </StyledLink>
          ))}
        </Menu>
      </Wrapper>
    </WrapperMain>
  );
};
