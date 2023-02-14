import React from 'react';
import PaymentName from './PaymentName';
import InputTemplate from './InputTemplate';
import './PaymentEmail.scss';

function PaymentEmail({
  lastName,
  firstName,
  email,
  element,
  displayText,
  inputStyle,
  isValid,
  onClickEmail,
  onClickName,
}) {
  return (
    <div className="paymentEmail">
      <h2 className="notice">주문자 정보를 입력해주세요</h2>
      <InputTemplate
        value={email}
        name="email"
        element="이메일"
        displayText={displayText}
      />

      {!isValid.email && (
        <button className="btnGo" onClick={onClickEmail}>
          배송 세부 정보로 계속
        </button>
      )}

      {isValid.email && (
        <PaymentName
          firstName="firstName"
          lastName="lastName"
          value={(lastName, firstName)}
          inputStyle={inputStyle}
          displayText={displayText}
          onClickName={onClickName}
        />
      )}
    </div>
  );
}
export default PaymentEmail;
