import React from 'react';
import './InputTemplate.scss';

function InputTemplate({
  inputs,
  name,
  value,
  element,
  displayText,
  inputStyle,
}) {
  return (
    <div className="inputTemplate">
      <input
        name={name}
        type="text"
        placeholder=" "
        id="inputTrue"
        value={value}
        onChange={displayText}
      />
      <label className="labelInput" for="inputTrue">
        {element}
      </label>
    </div>
  );
}

export default InputTemplate;
