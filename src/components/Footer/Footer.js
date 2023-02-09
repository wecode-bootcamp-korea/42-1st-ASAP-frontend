import React, { useState, useEffect } from 'react';
import FooterBlock from './FooterBlock';
import './Footer.scss';

function Footer() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    fetch('/data/footerData.json')
      .then(res => res.json())
      .then(data => setFooterData(data));
  }, []);

  return (
    <div className="Footer">
      <div className="footerBlockWrapper">
        <FooterBlock footerData={footerData} />
      </div>
      <div className="devider" />
      <div className="waterMarkBox">
        <span className="waterMark">© ASAP</span>
      </div>
    </div>
  );
}

export default Footer;
