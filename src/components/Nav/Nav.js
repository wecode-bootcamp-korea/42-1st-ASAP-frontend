import React, { useState, useEffect } from 'react';
import BodyMenu from '../../pages/Home/BodyMenu';
import { Link } from 'react-router-dom';
import Modal from '../../pages/Home/Modal';

import './Nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState('로그인');
  const [menuOpen, setMenuOpen] = useState(false);
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
  console.log(menuSelected);

  return (
    <>
      <div className="navbar">
        <ul className="navbar-left">
          {navMenuList.map(info => (
            <li key={info.id}>
              <a
                href="#none"
                className="bodyBtn"
                onClick={() => {
                  setMenuOpen(menuOpen => !menuOpen);
                  menuSelect(info.id);
                }}
              >
                {info.text}
              </a>
            </li>
          ))}
          <li>
            <a
              className={menuOpen ? 'closeBtn' : 'hiddenBtn'}
              onClick={() => setMenuOpen(menuOpen => !menuOpen)}
              href="#none"
            >
              닫기
            </a>
          </li>
        </ul>
        <ul className="navbar-right">
          <li>
            <div className="modalBtn">
              <button onClick={() => setIsOpen(prev => !prev)}>
                {loginStatus}
              </button>
              <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setLoginStatus={setLoginStatus}
              >
                Fancy
              </Modal>
            </div>
          </li>
          <li>
            <button>카트</button>
          </li>
        </ul>
      </div>
      <BodyMenu
        menuOpen={menuOpen}
        menuSelected={menuSelected}
        setMenuOpen={setMenuOpen}
        navMenuList={navMenuList}
      />
    </>
  );
};

export default Nav;
