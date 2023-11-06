import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

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
  transition: 0.4s all ease;
  &:hover {
    transform: perspective(1000px) translateZ(50px);
  }
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0em 2em;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 600px;

  > .active {
    color: white;
    text-decoration: underline;
    text-underline-offset: 11px;
    text-decoration-thickness: 2px;
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
        const lang = 'en';
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
          <Logo alt="logo" src={process.env.PUBLIC_URL + '/images/logo.webp'} />
        </Link>
        <Menu>
          {data &&
            data.map((item: { link: string; name: string }, index: any) => (
              <StyledLink
                key={index}
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
        </Menu>
      </Wrapper>
    </WrapperMain>
  );
};
