import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiMenu, BiPlus } from 'react-icons/bi';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Heading } from 'components/atoms/heading/Heading';
import axios from 'axios';
import HamburgerMenu from 'components/molecues/hamburger-menu/HamburgerMenu';
import { motion } from 'framer-motion';

interface Props {
  isOpen?: boolean;
}

const Wrapper = styled.nav<Props>`
  @media (min-width: 1101px) {
    display: none;
  }
  background-color: black;
  width: 100%;
  display: flex;
  transition: 0.5s all ease;
  z-index: 9999;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '50px')};

  position: fixed;
  top: 0;

  > svg {
    position: absolute;
    top: 0;
    font-weight: 300;
    right: 0;
    margin: 40px;
    font-size: 70px;

    padding-bottom: 2px;
    margin: 0 8px;
    cursor: pointer;
    z-index: 999;
  }

  > span {
    font-weight: 100;
  }
`;

const StyledBiMenu = styled(BiMenu)`
  transition: color 200ms linear;
  color: white;
  &:hover {
    color: #585858;
  }
`;

const StyledBiPlus = styled(BiPlus)`
  transition: color 200ms linear;
  &:hover {
    color: #585858;
  }
  color: black;
  transform: rotate(45deg);
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 800;
  color: white;
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  color: ${({ theme }) => 'hsla(0, 0%, 71%, 1)'};

  &:hover {
    transform: perspective(1000px) translateZ(50px);
  }
`;

const Menu = styled.div`
  transition: 0.5s all ease;
  height: 40vh;
  margin: 40% 20% 0% 20%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  justify-content: space-between;
  align-items: flex-start;
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <Wrapper isOpen={isOpen}>
      <div style={{ position: 'absolute', right: 0 }}>
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <Menu style={isOpen ? { opacity: 1 } : { opacity: 0 }}>
        <motion.ul variants={variants} animate={isOpen ? 'open' : 'closed'}>
          {data &&
            data.map((item: { link: string; name: string }) => (
              <StyledLink
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                {item.name}
              </StyledLink>
            ))}
        </motion.ul>
      </Menu>
    </Wrapper>
  );
};
