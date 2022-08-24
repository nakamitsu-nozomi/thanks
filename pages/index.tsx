import { client } from '../libs/client';
import { message } from '../types/cms-types';
import { GetStaticPropsResult, NextPage } from 'next';
type Message = message;
type Result = {
  messages: Message[];
};
const Home: NextPage<Result> = ({ messages }) => {
  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p>{message.userName}</p>
            <p>{message.contents}</p>
            <img src={message.userIcon.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
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
