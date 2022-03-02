import React, { useState, useEffect } from 'react';
import { NavbarDesktop } from './navbar-desktop/NavbarDesktop';
import { NavbarMobile } from './navbar-mobile/NavbarMobile';

export const Navbar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });
  return (
    <>
      {window.innerWidth >= 1000 ? (
        <NavbarDesktop colorChange={colorChange} />
      ) : (
        <NavbarMobile colorChange={colorChange} />
      )}
    </>
  );
};
