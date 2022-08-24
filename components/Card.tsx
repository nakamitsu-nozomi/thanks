import { NextPage } from 'next';
import { Message } from '../entities';
import styled from 'styled-components';
import { useState } from 'react';

type Props = {
  message: Message;
};
export const Component: NextPage<Props> = ({ message }) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Card
      key={message.id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Face>
        <Contents>{message.contents}</Contents>
      </Face>
      <Inner isHover={isHover}>
        {!isHover && (
          <Image>
            <Img src={message.userIcon.url} alt={message.userName} />
          </Image>
        )}

        <Name>{message.userName}</Name>
      </Inner>
    </Card>
  );
};

const Card = styled.div`
  cursor: pointer;
  position: relative;
  width: 300px;
  height: 400px;
  margin: 20px;
  background: #f8f8f8;
  border-radius: 15px;
  /* box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5); */
`;
const Face = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
const Contents = styled.div`
  color: black;
  height: 100%;
  margin: auto;
`;
const Inner = styled.div<{ isHover: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ isHover }) => (isHover ? '60px ' : '100%')};
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  background-image: linear-gradient(
    40deg,
    #fffc00 0%,
    #fc00ff 45%,
    #00fffc 100%
  );
  border-radius: 15px;
`;
const Image = styled.div`
  width: 180px;
  height: 180px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
const Name = styled.p`
  font-size: 20px;
  color: #fff;
  transition: 0.5s;
  margin-top: 20px;
`;
