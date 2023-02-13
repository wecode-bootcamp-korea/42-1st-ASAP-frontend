import React, { useState, useEffect } from 'react';
import InputTemplate from './InputTemplate';
import './PaymentStep03.scss';

function PaymentStep03({
  성,
  이름,
  이메일,
  전화번호,
  주소,
  value,
  element,
  displayText,
  inputStyle,
  isAddressValid,
  onClickAddress,
}) {
  return (
    <div className="paymentStep03">
      <section className="orderInfo">
        <h2 className="noticeName">주문자 성함</h2>
        <span className="orderInfoText">{이름}님</span>
        <span className="orderInfoText">{이메일}</span>
      </section>
      <h2 className="noticeWhere">주문을 어디로 보내시겠습니까?</h2>
      <form className="inputForm">
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
      </form>
      <div className="countryNumber">
        <select name="country" className="selectCountry">
          <option value="apple">USA</option>
          <option value="orange">CHN</option>
          <option value="grape">JPN</option>
          <option value="melon">KOR</option>
        </select>
        <InputTemplate
          value={주소}
          inputStyle={inputStyle}
          element="주소"
          displayText={displayText}
        />
      </div>

      {isAddressValid ? null : (
        <button className="btnGo" onClick={onClickAddress}>
          배송 정보로 계속
        </button>
      )}
    </div>
  );
}

export default PaymentStep03;
