import React, { useState, useEffect } from 'react';
import './Payment.scss';

function Payment() {
  const [inputs, setInputs] = useState({ email: '' });
  const [inputStyle, setInputStyle] = useState('inputEmail');

  const { email } = inputs;

  const displayText = e => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
    setInputStyle('inputEmail');
  };

  const onClick = () => {
    if (inputs.email.includes('@')) {
      setInputStyle('inputEmail');
    } else {
      setInputStyle('inputEmailFalse');
      setInputs({ email: '' });
    }
  };

  const handleClickOutside = () => {
    if (inputs.email.includes('@')) {
      setInputStyle('inputEmail');
    } else {
      setInputStyle('inputEmailFalse');
      setInputs({ email: '' });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className="Payment">
      <div className="left">
        <div className="logoWrapper">
          <img alt="logo" className="logo" src="./images/asaplogo.png" />
        </div>
        <div className="contextWrapper">
          <h2 className="notice">주문자 정보를 입력해주세요</h2>
          <input
            name="email"
            type="text"
            placeholder=" "
            id={inputStyle}
            value={email}
            onChange={displayText}
          />
          <label className="labelEmail" for={inputStyle}>
            이메일 주소
          </label>
          {inputStyle === 'inputEmailFalse' ? (
            <span className="warning">올바른 이메일을 입력해주세요</span>
          ) : null}
          <button className="btnEmail" onClick={onClick}>
            배송 세부 정보로 계속
          </button>
        </div>
      </div>
      <div className="right">
        <section className="paymentOverview">
          <div className="overviewDetail">
            <dt>소계 (세금 포함)</dt>
            <dd>₩140,000</dd>
          </div>

          <div className="overviewDetail">
            <dt>배송</dt>
            <dd>₩0</dd>
          </div>

          <div className="overviewDetail">
            <dt>포함된 세금</dt>
            <dd>₩0</dd>
          </div>

          <div className="overviewDetail total">
            <dt>합계</dt>
            <dd>₩285,000</dd>
          </div>

          <div className="viewAll">
            <dt>모든 제품 보기(2)</dt>
            <dd>+</dd>
          </div>

          <div className="presentOption">
            <dt className="presentLeft">
              <img
                alt="presents"
                className="presents"
                src="./images/presents.png"
              />
              선물할 제품인가요?
            </dt>
            <dd className="modify">변경</dd>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Payment;
