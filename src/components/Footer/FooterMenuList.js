import React from 'react';

function FooterMenuList({ menu }) {
  return (
    <li className="text">
      <a className="linkText" href="temp.html">
        {menu}
      </a>
    </li>
  );
}
export default FooterMenuList;
