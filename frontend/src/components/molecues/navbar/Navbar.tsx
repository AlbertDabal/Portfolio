import React, { useState, useEffect } from 'react';
import { NavbarDesktop } from './navbar-desktop/NavbarDesktop';
import { NavbarMobile } from './navbar-mobile/NavbarMobile';

export const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);

    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);
  return (
    <>
      <NavbarDesktop colorChange={colorChange} />
      <NavbarMobile />
    </>
  );
};
