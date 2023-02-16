import React, { useState, useEffect } from 'react';
import InputTemplate from './InputTemplate';
import './PaymentAddress.scss';

function PaymentAddress({
  lastName,
  firstName,
  email,
  address,
  value,
  element,
  displayText,
  inputStyle,
  isAddressValid,
  onClickAddress,
  choiceCountry,
  handleCountry,
  onClickPay,
}) {
  return (
    <div className="paymentAddress">
      <section className="orderInfo">
        <h2 className="noticeName">주문자 성함</h2>
        <span className="orderInfoText">{firstName}님</span>
        <span className="orderInfoText">{email}</span>
      </section>
      <h2 className="noticeWhere">주문을 어디로 보내시겠습니까?</h2>
      <form className="inputForm">
        <InputTemplate
          value={lastName}
          inputStyle={inputStyle}
          name="lastName"
          element="성"
          displayText={displayText}
        />
        <InputTemplate
          value={firstName}
          inputStyle={inputStyle}
          name="firstName"
          element="이름"
          displayText={displayText}
        />
      </form>
      <div className="countryNumber">
        <select
          name="country"
          className="selectCountry"
          onChange={handleCountry}
        >
          <option value="USA">USA</option>
          <option value="CHN">CHN</option>
          <option value="JPN">JPN</option>
          <option value="KOR">KOR</option>
        </select>
        <InputTemplate
          value={address}
          inputStyle={inputStyle}
          element="주소"
          name="address"
          displayText={displayText}
        />
      </div>

      {!isAddressValid && (
        <button className="btnGo" onClick={onClickAddress}>
          배송 정보로 계속
        </button>
      )}
    </div>
  );
}

export default PaymentAddress;
