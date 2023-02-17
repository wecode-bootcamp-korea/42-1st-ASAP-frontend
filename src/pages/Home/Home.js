import React, { useContext } from 'react';
import { MenuContext } from '../../components/Nav/MenuModal/Hide';
import FirstContainer from './FirstContainer/FirstContainer';
import SecondContainer from './SecondContainer/SecondContainer';
import Slider from '../../components/Slider/Slider';

import './Home.scss';

const Home = () => {
  const [menuOpen, setMenuOpen] = useContext(MenuContext);

  return (
    <div className={!menuOpen ? 'mainArea' : 'mainAreaClose'}>
      <FirstContainer />
      {/* <SecondContainer /> */}
      <Slider />
    </div>
  );
};

export default Home;
