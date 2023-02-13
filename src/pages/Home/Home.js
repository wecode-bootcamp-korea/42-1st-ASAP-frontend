import React, { useContext } from 'react';
import FirstContainer from './FirstContainer/FirstContainer';
import SecondContainer from './SecondContainer/SecondContainer';
import { MenuContext } from '../../components/Nav/MenuModal/Hide';

import './Home.scss';

const Home = () => {
  const [menuOpen, setMenuOpen] = useContext(MenuContext);

  return (
    <div className={!menuOpen ? 'mainArea' : 'mainAreaClose'}>
      <FirstContainer />
      <SecondContainer />
      <div className="borderLine" />
    </div>
  );
};

export default Home;
