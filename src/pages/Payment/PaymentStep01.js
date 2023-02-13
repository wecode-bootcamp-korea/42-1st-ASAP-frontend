import React, { useState, useEffect } from 'react';
import PaymentStep02 from './PaymentStep02';
import InputTemplate from './InputTemplate';
import './PaymentStep01.scss';

function PaymentStep01({
  성,
  이름,
  이메일,
  value,
  element,
  displayText,
  inputStyle,
  isEmailValid,
  onClickEmail,
  onClickName,
}) {
  return (
    <div className="paymentStep01">
      <h2 className="notice">주문자 정보를 입력해주세요</h2>
      <InputTemplate
        value={이메일}
        inputStyle={inputStyle}
        element="이메일"
        displayText={displayText}
      />
      {inputStyle === 'inputFalse' && (
        <span className="warning">올바른 이메일을 입력해주세요</span>
      )}

      {isEmailValid ? null : (
        <button className="btnGo" onClick={onClickEmail}>
          배송 세부 정보로 계속
        </button>
      )}

      {isEmailValid ? (
        <PaymentStep02
          value={(성, 이름)}
          inputStyle={inputStyle}
          element={(성, 이름)}
          displayText={displayText}
          onClickName={onClickName}
        />
      ) : null}
    </div>
  );
}
export default PaymentStep01;
