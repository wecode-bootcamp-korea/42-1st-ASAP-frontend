import React from 'react';
import './RadioBox.scss';

function RadioBox({ sizeText, changeRadio }) {
  return (
    <div className="RadioBox">
      <input type="radio" className="radioButton" onChange={changeRadio} />
      <span className="radioText">{sizeText}</span>
    </div>
  );
}

export default RadioBox;
