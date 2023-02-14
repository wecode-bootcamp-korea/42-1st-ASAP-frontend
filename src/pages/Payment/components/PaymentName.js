import React from 'react';
import InputTemplate from './InputTemplate';
import './PaymentName.scss';

function PaymentName({
  lastName,
  firstName,
  value,
  email,
  element,
  displayText,
  inputStyle,
  onClickName,
}) {
  return (
    <div className="paymentName">
      <form className="inputForm">
        <div className="inputWrapper">
          <InputTemplate
            name={lastName}
            value={value}
            inputStyle={inputStyle}
            element="성"
            displayText={displayText}
          />
          <InputTemplate
            name={firstName}
            value={value}
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

export default PaymentName;
