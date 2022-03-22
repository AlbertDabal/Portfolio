import axios from 'axios';
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

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = navigator.language === 'en' || navigator.language === 'pl' ? navigator.language : 'en';
        const res = await axios({ url: `./locales/${lang}/Projects.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);

    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });
  return (
    <>
      {window.innerWidth >= 1000
        ? data && <MyProjectDesktop ProjectsData={data.projects} title={data.title} width={width} />
        : data && <MyProjectMobile ProjectsData={data.projects} title={data.title} />}
    </>
  );
};
