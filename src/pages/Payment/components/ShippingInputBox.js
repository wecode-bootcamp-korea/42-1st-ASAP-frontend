import React, { useState } from 'react';
import './ShippingInputBox.scss';

function ShippingInputBox({ shippingInputText, displayText, name }) {
  return (
    <div className="shippingTextBoxWrapper">
      <input
        type="text"
        id="shippingTextBox"
        placeholder=" "
        onChange={displayText}
        name={name}
      />
      <label for="shippingTextBox" className="shippingTextBoxLabel">
        {shippingInputText}
      </label>
    </div>
  );
}

export default ShippingInputBox;
