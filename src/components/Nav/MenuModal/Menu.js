import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = props => {
  const { menuOpen, menuSelected, setMenuOpen, navMenuList } = props;
  const clickedMenu = navMenuList[menuSelected];

  if (!menuOpen) return null;

  return (
    <div
      className="bodyMenuOn"
      style={{
        backgroundColor: clickedMenu.color,
      }}
    >
      <div className="bodyMenu-right">
        <div className="right-container">
          <img
            className="menuLogo"
            src="images/asaplogo.png"
            onClick={() => setMenuOpen(menuOpen => !menuOpen)}
            alt="logo"
          />
          <div className="ulContainer">
            {clickedMenu.detail.map(con => (
              <ul key={con.id} className="category">
                <div className="ulTitle">{con.title}</div>
                {con.list.map(inside => (
                  <Link
                    to={inside.path}
                    key={inside.id}
                    onClick={() => setMenuOpen(menuOpen => !menuOpen)}
                    className="link"
                  >
                    <li className="list">{inside.content}</li>
                  </Link>
                ))}
              </ul>
            ))}
          </div>

          <div />
        </div>
      </div>
      <div className="bodyMenu-imageContainer">
        <img
          className="productImg"
          src={`images/sample0${clickedMenu.id}.png`}
          alt="hand"
        />
      </div>
    </div>
  );
};

export default Menu;
