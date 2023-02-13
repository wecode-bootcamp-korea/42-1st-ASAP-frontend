import React, { useState, useEffect } from 'react';
import InputTemplate from './InputTemplate';
import './PaymentStep02.scss';

function PaymentStep02({
  성,
  이름,
  value,
  element,
  displayText,
  inputStyle,
  onClickName,
}) {
  return (
    <div className="paymentStep02">
      <form className="inputForm">
        <div className="inputWrapper">
          <InputTemplate
            value={성}
            inputStyle={inputStyle}
            element="성"
            displayText={displayText}
          />
          <InputTemplate
            value={이름}
            inputStyle={inputStyle}
            element="이름"
            displayText={displayText}
          />
        </div>
        <button className="btnGo" onClick={onClickName}>
          배송 세부 정보로 계속
        </button>
      </form>
    </div>
  );
}

export default PaymentStep02;
