import React, { useState, useEffect } from 'react';
import PaymentStep01 from './PaymentStep01';
import PaymentStep03 from './PaymentStep03';
import PaymentStep04 from './PaymentStep04';

import './Payment.scss';
import { isCompositeComponent } from 'react-dom/test-utils';

function Payment() {
  const [inputs, setInputs] = useState({
    이메일: '',
    성: '',
    이름: '',
    전화번호: '',
    주소: '',
    배송요청사항: '',
    포장요청사항: '',
  });
  const [inputStyle, setInputStyle] = useState('inputTrue');
  const [isEmailValid, setIsEmailVaild] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);

  const { 이메일, 성, 이름, 전화번호, 주소, 배송요청사항, 포장요청사항 } =
    inputs;

  const displayText = e => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
    setInputStyle('inputTrue');
    console.log(inputs.주문요청사항);
  };
  const onClickEmail = e => {
    e.preventDefault();
    if (inputs.이메일.includes('@')) {
      setInputStyle('inputTrue');
      setIsEmailVaild(true);
    } else {
      setInputStyle('inputFalse');
      setInputs({ 이메일: '', 성: '', 이름: '' });
    }
  };

  const onClickName = () => {
    if (inputs.성 && inputs.이름) {
      setIsNameValid(true);
      setIsEmailVaild(false);
    } else {
      setIsEmailVaild(false);
    }
  };

  const onClickAddress = () =>
    inputs.주소.valueOf && inputs.전화번호.valueOf && setIsAddressValid(true);

  const handleClickOutside = () => {
    if (inputs.이메일.includes('@')) {
      setInputStyle('inputTrue');
      setIsEmailVaild(true);
    } else {
      setInputStyle('inputFalse');
      setInputs({ 이메일: '', 성: '', 이름: '', 전화번호: '', 주소: '' });
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
          {isNameValid ? null : (
            <PaymentStep01
              value={(성, 이름, 전화번호, 주소, 이메일)}
              inputStyle={inputStyle}
              element={(성, 이름, 전화번호, 주소, 이메일)}
              displayText={displayText}
              isEmailValid={isEmailValid}
              onClickEmail={onClickEmail}
              onClickName={onClickName}
            />
          )}

          {isNameValid ? (
            <PaymentStep03
              value={(성, 이름, 전화번호, 주소, 이메일)}
              inputStyle={inputStyle}
              element={(성, 이름, 전화번호, 주소, 이메일)}
              displayText={displayText}
              isEmailValid={isEmailValid}
              isAddressValid={isAddressValid}
              onClickAddress={onClickAddress}
            />
          ) : null}

          {isAddressValid ? (
            <PaymentStep04 displayText={displayText} inputs={inputs} />
          ) : null}
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
