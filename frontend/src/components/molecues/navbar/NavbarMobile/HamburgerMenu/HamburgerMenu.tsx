import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import styled from 'styled-components';

interface Props {
  isOpen?: boolean;
  setIsOpen?: any;
}

const HamburgerMenu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div>
      <input style={{ display: 'none' }} type="checkbox" id="checkbox" checked={isOpen} />
      <label className="burger" htmlFor="checkbox" onClick={() => setIsOpen(!isOpen)}>
        <button aria-label="menu">
          <div className="container top">
            <div className="line top"></div>
          </div>
          <div className="container bottom">
            <div className="line bottom"></div>
          </div>
        </button>
      </label>
    </div>
  );
};

export default HamburgerMenu;
