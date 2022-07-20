import React from 'react';
import WritePost from '@components/WritePost';
import Newsfeed from '@components/Newsfeed';

const Home: React.FC = () => {
  const x = 5;

  return (
    <>
      <WritePost />
      <Newsfeed />
    </>
  );
};

export default Home;
