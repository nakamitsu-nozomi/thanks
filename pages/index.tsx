import { client } from '../libs/client';
import { GetStaticPropsResult, NextPage } from 'next';
import * as Card from '../components/Card';
import { Message } from '../entities';
import styled from 'styled-components';

type Result = {
  messages: Message[];
};
const Home: NextPage<Result> = ({ messages }) => {
  return (
    <Container>
      <Cards>
        {messages.map((message) => (
          <Card.Component message={message} />
        ))}
      </Cards>
    </Container>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Result>
> => {
  const result = await client.gets('message', {
    orders: 'createdAt',
  });
  if (!result) {
    throw Error('データがありません');
  }
  return {
    props: {
      messages: result.contents,
    },
  };
};
export default Home;

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
  width: 100%;
  height: 100vh;
  padding: 40px;
  font-family: 'Yusei Magic', sans-serif;
  /* background-color: #a9c9ff; */
  /* background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%); */
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
