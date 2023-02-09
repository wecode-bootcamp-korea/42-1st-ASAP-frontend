import React from 'react';
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import './Home.scss';

const Home = () => {
  return (
    <div className="mainArea">
      <FirstContainer />
      <SecondContainer />
    </div>
  );
};

export default Home;
