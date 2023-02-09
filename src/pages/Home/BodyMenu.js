import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BodyMenu.scss';

const BodyMenu = ({ menuOpen, menuSelected, setMenuOpen, navMenuList }) => {
  if (!menuOpen) return null;
  return (
    <div
      className="bodyMenuOn"
      style={{ backgroundColor: navMenuList[menuSelected].color }}
    >
      <div className="bodyMenu-right">
        <div className="right-container">
          <img
            src="images/asaplogo.png"
            onClick={() => setMenuOpen(menuOpen => !menuOpen)}
            alt="logo"
          />

          {navMenuList[menuSelected].detail.map(con => (
            <ul key={con.id}>
              {con.head.map(inside => (
                <li>{inside.content}</li>
              ))}
            </ul>
          ))}

          <div />
        </div>
      </div>
      <div className="bodyMenu-imageContainer">
        <img
          src={`images/product0${navMenuList[menuSelected].id}.png`}
          alt="hand"
        />
      </div>
    </div>
  );
};

export default BodyMenu;
