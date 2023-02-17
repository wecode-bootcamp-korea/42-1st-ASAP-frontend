import React from 'react';
import './FooterCheckbox.scss';

function FooterCheckbox({ text }) {
  return (
    <div className="footerCheckbox">
      <input type="checkbox" id="footerCheckboxSelect" />
      <label htmlFor="checkbox1" />
      <p className="checkboxText">{text}</p>
    </div>
  );
}

export default FooterCheckbox;
