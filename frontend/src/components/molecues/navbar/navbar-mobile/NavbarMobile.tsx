import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiMenu, BiPlus } from 'react-icons/bi';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Heading } from 'components/atoms/heading/Heading';
import axios from 'axios';

interface Props {
  colorChange?: boolean;
}

const Wrapper = styled.nav<Props>`
  @media (min-width: 1101px) {
    display: none;
  }
  background-color: ${({ colorChange, theme }) => (colorChange ? 'black' : 'transparent')};
  width: 100%;
  display: flex;
  transition: 0.8s all ease;
  z-index: 999;
  height: 8vh;
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
  font-weight: 400;
  color: black;
  cursor: pointer;
  user-select: none;
`;

const MainWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  transition: 0.3s all ease;
`;

const Menu = styled.div`
  height: 40vh;
  margin: 40% 20% 0% 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavbarMobile = ({ colorChange }: Props) => {
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
    <Wrapper colorChange={colorChange}>
      {!isOpen ? (
        <StyledBiMenu onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <StyledBiPlus onClick={() => setIsOpen(!isOpen)} />
      )}

      <MainWrapper style={isOpen ? { display: 'flex' } : { display: 'none' }}>
        <Menu>
          {data &&
            data.map((item: { link: string; name: string }) => (
              <StyledLink
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.name.toUpperCase()}
              </StyledLink>
            ))}
        </Menu>
      </MainWrapper>
    </Wrapper>
  );
};
