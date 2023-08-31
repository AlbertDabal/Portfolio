import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from 'images/logo.png';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import { Button } from 'components/atoms/button/Button';
import axios from 'axios';

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
  background-color: ${({ colorChange, theme }) => (colorChange ? 'black' : 'transparent')};
  @media (max-width: 1100px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  color: ${({ theme }) => 'hsla(0, 0%, 71%, 1)'};
  cursor: pointer;
  user-select: none;
  padding: 1.5em 1em;
  text-transform: capitalize;
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
  width: 600px;

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
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = navigator.language === 'en' || navigator.language === 'pl' ? navigator.language : 'en';
        const res = await axios({ url: `./locales/${lang}/Navbar.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <WrapperMain colorChange={colorChange}>
      <Wrapper>
        <Link to="main" spy={true} smooth={true} offset={-70} duration={500}>
          <Logo src={process.env.PUBLIC_URL + '/images/logo.png'} />
        </Link>
        <Menu>
          {data &&
            data.map((item: { link: string; name: string }) => (
              <StyledLink activeClass="active" to={item.link} spy={true} smooth={true} offset={-60} duration={500}>
                {item.name}
              </StyledLink>
            ))}
        </Menu>
      </Wrapper>
    </WrapperMain>
  );
};
