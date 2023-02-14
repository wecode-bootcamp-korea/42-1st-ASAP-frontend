import React, { useState } from 'react';
import './ShippingCheckbox.scss';

function Checkbox({ isCheckValid, onClickChecked, shippingCheckboxText }) {
  return (
    <div className="checkbox">
      <label id="shippingCheckboxLabel" for="shippingCheckbox">
        <input
          type="checkbox"
          id="shippingCheckbox"
          name="shipping"
          onChange={onClickChecked}
        />
      </label>
      <span className="shippingCheckboxText">{shippingCheckboxText}</span>
    </div>
  );
}

export default Checkbox;
