import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BasicTemplate } from 'templates/BasicTemplate';
import { MyProjectDesktop } from './my-project-desktop/MyProjectDesktop';
import { MyProjectMobile } from './my-project-mobile/MyProjectMobile';

export const MyProjects = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);

    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });
  return <>{window.innerWidth >= 1000 ? <MyProjectDesktop width={width} /> : <MyProjectMobile />}</>;
};
