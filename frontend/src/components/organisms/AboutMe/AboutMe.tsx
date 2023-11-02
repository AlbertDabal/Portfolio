import { useEffect, useState } from 'react';
import { BasicTemplate } from 'templates/BasicTemplate';

import axios from 'axios';
import Description from './Items/Description';
import MainSkills from './Items/MainSkills';
import SocialInfo from './Items/SocialInfo';

const AboutMe = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = navigator.language === 'en' || navigator.language === 'pl' ? navigator.language : 'en';
        const res = await axios({ url: `./locales/${lang}/AboutMe.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <BasicTemplate index={1} id="about-me" backgroundColorStyle="black">
      <div style={{ position: 'relative' }}>
        {data && <Description data={data} />}
        <MainSkills />
        <SocialInfo />
      </div>
    </BasicTemplate>
  );
};

export default AboutMe;
