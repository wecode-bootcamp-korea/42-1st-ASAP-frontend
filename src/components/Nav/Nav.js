import React, { useState, useEffect, useContext, Component } from 'react';
import { MenuContext } from './MenuModal/Hide';
import { Link } from 'react-router-dom';
import Menu from './MenuModal/Menu';
import LoginModal from './LoginModal/LoginModal';
import './Nav.scss';

export const quantityTotal = React.createContext();

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState('로그인');
  const [menuOpen, setMenuOpen] = useContext(MenuContext);
  const [menuSelected, setMenuSelected] = useState(0);
  const [navMenuList, setNavMenuList] = useState([]);
  const [navCartData, setNavCartData] = useState([]);

  const token = localStorage.getItem('login-token');

  useEffect(() => {
    fetch('/data/menulist.json')
      .then(res => res.json())
      .then(data => setNavMenuList(data));
  }, []);

  useEffect(() => {
    fetch('http://10.58.52.200:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setNavCartData(data.data));
  }, []);

  const menuSelect = id => {
    setMenuSelected(id - 1);
  };

  function quantityTotal() {
    let quantity = 0;
    for (let i = 0; i < navCartData.length; i++) {
      quantity += navCartData[i].info[0].quantity;
    }
    return quantity;
  }

  const deleteToken = () => {
    localStorage.removeItem('login-token');
    setIsOpen(() => prev => !prev);
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
                onClick={
                  token === null ? () => setIsOpen(prev => !prev) : deleteToken
                }
                className={!menuOpen ? 'navLoginBtn' : 'navLoginBtn clicked'}
              >
                {token === null ? '로그인' : '로그아웃'}
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
            <Link className="cartLink" to="/payment">
              <button
                className={!menuOpen ? 'navLoginBtn' : 'navLoginBtn clicked'}
              >
                카트
                <span className="cartCount">{quantityTotal()}</span>
              </button>
            </Link>
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
