import React, { useState, useEffect, useContext } from 'react';
import { MenuContext } from './MenuModal/Hide';
import Menu from './MenuModal/Menu';
import LoginModal from './LoginModal/LoginModal';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState('로그인');
  const [menuOpen, setMenuOpen] = useContext(MenuContext);
  const [menuSelected, setMenuSelected] = useState(0);
  const [navMenuList, setNavMenuList] = useState([]);

  useEffect(() => {
    fetch('/data/menulist.json')
      .then(res => res.json())
      .then(data => setNavMenuList(data));
  }, []);

  const menuSelect = id => {
    setMenuSelected(id - 1);
  };
  return (
    <>
      <div className={!menuOpen ? 'navbar' : 'navbar clicked'}>
        <ul className="navbar-left">
          {navMenuList.map(info => (
            <li
              key={info.id}
              className={
                !(menuSelected === info.id - 1) ? 'menuBtn' : 'menuBtn clicked'
              }
            >
              <a
                href="#none"
                className={!menuOpen ? 'bodyBtn' : 'bodyBtn clicked'}
                onClick={() => {
                  //

                  if (!menuOpen) {
                    setMenuOpen(menuOpen => !menuOpen);
                  }

                  menuSelect(info.id);
                }}
              >
                {info.text}
              </a>
            </li>
          ))}
          <li className="menuBtn">
            <a
              className={!menuOpen ? 'hiddenBtn' : 'closeBtn'}
              onClick={() => setMenuOpen(menuOpen => !menuOpen)}
              href="#none"
            >
              닫기
            </a>
          </li>
        </ul>
        <ul className="navbar-right">
          <li className="menuBtn">
            <div className="modalBtn">
              <button
                onClick={() => setIsOpen(prev => !prev)}
                className={!menuOpen ? 'navLoginBtn' : 'navLoginBtn clicked'}
              >
                {loginStatus}
              </button>
              <LoginModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setLoginStatus={setLoginStatus}
                setMenuOpen={setMenuOpen}
              />
            </div>
          </li>
          <li className="menuBtn">
            <button
              className={!menuOpen ? 'navLoginBtn' : 'navLoginBtn clicked'}
            >
              카트
            </button>
          </li>
        </ul>
      </div>
      <Menu
        menuOpen={menuOpen}
        menuSelected={menuSelected}
        setMenuOpen={setMenuOpen}
        navMenuList={navMenuList}
      />
    </>
  );
};

export default Nav;
