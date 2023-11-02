import LinkOutside from 'components/atoms/Link/LinkOutside';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

interface Props {
  images?: string;
  name?: string;
  technology: string;
  description: string;
  github?: string;
  website?: string;
  index: number;
}

interface Color {
  other?: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 40vh;
  height: 100%;
  background-color: white;
  padding: 30px;
  @media (max-width: 1100px) {
    padding: 20px;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1100px) {
    align-self: start;
  }

  flex: 4;
  height: 100%;
`;

const Image = styled.img`
  height: auto;
  object-fit: contain;
  width: 100%;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const Button = styled.a<Color>`
  text-decoration: none;
  border: none;
  outline: none;
  color: white;
  background: ${({ other }) => (!other ? '#2d27ff' : '#FF0A6C')};
  font-size: 16px;
  font-weight: 600;
  padding: 10px 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: pointer;
  transition: 0.4s all ease;
  &:hover {
    transform: perspective(1000px) translateZ(50px);
  }
`;

const WrapperButton = styled.div`
  display: flex;
  gap: 15px;
`;

const Card = ({ images, name, description, technology, github, website, index }: Props) => {
  return (
    <Wrapper>
      <div style={{ flex: 6 }}>
        {images && <Image src={`${process.env.PUBLIC_URL + '/images/projects' + images}`} />}
      </div>
      <Info>
        <Title>{name}</Title>
        <Paragraph>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <i>
            <div dangerouslySetInnerHTML={{ __html: technology }} />
          </i>
        </Paragraph>
        <WrapperButton>
          {github && (
            <Button target="_blank" href={github}>
              Github
            </Button>
          )}
          {website && (
            <Button target="_blank" href={website} other>
              Site
            </Button>
          )}
        </WrapperButton>
      </Info>
    </Wrapper>
  );
};

export default Card;
