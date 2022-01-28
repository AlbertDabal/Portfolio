import { Heading } from 'components/atoms/heading/Heading';
import { NavbarData } from 'data/NavabarData';
import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

const WrapperMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: fixed;
  top: 0;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
  user-select: none;
`;

const Wrapper = styled.nav`
  width: 85%;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  display: flex;
  justify-content: space-between;
  text-align: center;

  padding: 30px 10px;
`;

const Menu = styled.ul`
  display: flex;
  width: 35%;
  > .active {
    border-bottom: 1px solid #333;
  }
  justify-content: space-between;
`;

export const NavbarDesktop = () => {
  return (
    <WrapperMain>
      <Wrapper>
        <Menu>
          {NavbarData.map((item) => (
            <StyledLink activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
              {item.name.toUpperCase()}
            </StyledLink>
          ))}
        </Menu>
        <Heading small>PL</Heading>
      </Wrapper>
    </WrapperMain>
  );
};
