import React, { useState, useEffect } from 'react';
import { NavbarDesktop } from './navbar-desktop/NavbarDesktop';
import { NavbarMobile } from './navbar-mobile/NavbarMobile';

export const Navbar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });
  return <>{window.innerWidth >= 1000 ? <NavbarDesktop /> : <NavbarMobile />}</>;
};
