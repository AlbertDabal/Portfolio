import { Button } from 'components/atoms/button/Button';
import { Heading } from 'components/atoms/heading/Heading';
import { Paragraph } from 'components/atoms/paragraph/Paragraph';
import { NavbarDesktop } from 'components/molecues/navbar/navbar-desktop/NavbarDesktop';
import { NavbarMobile } from 'components/molecues/navbar/navbar-mobile/NavbarMobile';
import React from 'react';

export const Test = () => {
  return (
    <div>
      <h1>Heading</h1>
      <Heading bold>HI I’M ALBERT DĄBAL</Heading>
      {/* <Heading bold>Rubik ExtraBold 32</Heading> */}
      <Heading small>Rubik Regular 20</Heading>
      <Heading small bold>
        Rubik ExtraBold 20
      </Heading>
      <h1>Paragraph</h1>
      <Paragraph>Poppins ExtraBold 32 </Paragraph>
      <Paragraph other>Poppins ExtraBold 32 thame</Paragraph>
      <Paragraph>Poppins Regular 16</Paragraph>
      <Paragraph other>Poppins Extra Bold 16</Paragraph>
      <h1>Button</h1>
      <Button>show case</Button>
      <h1>Navbar</h1>
      {/* <NavbarDesktop /> */}
      <NavbarMobile />
    </div>
  );
};
