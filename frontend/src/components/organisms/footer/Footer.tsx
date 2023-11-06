import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        fontSize: 12,
        backgroundColor: 'black',
        width: '100%',
        color: '#ccc',
        textAlign: 'center',
        padding: '10px 0px'
      }}
    >
      Copyright © 2023 albertdabal.pl | All Rights Reserved Realization:{' '}
      <a style={{ color: 'white' }} target="_blank" href="https://github.com/AlbertDabal">
        AlbertDabal
      </a>
    </div>
  );
};

export default Footer;
