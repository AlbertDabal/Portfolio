import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Description from './Items/Description';
import { ImageContainer } from './Items/ImageContainer';

const Wrapper = styled.div`
  height: 100vh;
  user-select: none;
  width: 100%;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(224deg, #2d27ff 0%, #ff0a6c 100%);
  background-size: cover;
  background-blend-mode: normal, difference;
`;

const Row = styled.div`
  width: 80%;
  display: flex;
  height: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Main = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const GetData = async () => {
      try {
        const lang = 'en';
        const res = await axios({ url: `./locales/${lang}/Main.json` });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetData();
  }, []);

  return (
    <Wrapper id="main">
      {data ? (
        <Row>
          <Description data={data} />
          <ImageContainer />
        </Row>
      ) : null}
    </Wrapper>
  );
};

export default Main;
