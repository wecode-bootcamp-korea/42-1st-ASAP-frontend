import React, { useState, useEffect } from 'react';
import './InputTemplate.scss';

function InputTemplate({ value, element, displayText, inputStyle }) {
  return (
    <div className="inputTemplate">
      <input
        name={element}
        type="text"
        placeholder=" "
        id={inputStyle}
        value={value}
        onChange={displayText}
      />
      <label className="labelInput" for="{inputStyle}">
        {element}
      </label>
    </div>
  );
}

export default InputTemplate;
