import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductBox({ children, title, seeAll, to, linkstyle }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p className="title-box">{children}</p>
      <Link className={linkstyle ? 'scent' : 'see-all'} to={to}>
        {seeAll}
        <img
          className="see-all-arrow"
          src="./images/see-all-arrow.png"
          alt="see-all-arrow"
        />
      </Link>
    </>
  );
}
