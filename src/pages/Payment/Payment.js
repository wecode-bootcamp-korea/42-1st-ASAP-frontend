import React, { useState, useEffect } from 'react';
import PaymentEmail from './components/PaymentEmail';
import PaymentAddress from './components/PaymentAddress';
import PaymentShipping from './components/PaymentShipping';
import './Payment.scss';

function Payment() {
  const [inputs, setInputs] = useState({
    email: '',
    lastName: '',
    firstName: '',
    phone: '',
    address: '',
  });

  const [isValid, setIsValid] = useState({
    default: true,
    email: false,
    name: false,
    address: false,
  });

  const { email, lastName, firstName, address } = inputs;

  const displayText = e => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onClickEmail = e => {
    e.preventDefault();
    if (inputs.email.includes('@')) {
      setIsValid({ ...isValid, default: true, email: true });
    } else {
      setInputs({ email: '', lastName: '', firstName: '' });
    }
  };
  const onClickName = e => {
    e.preventDefault();
    if (inputs.lastName && inputs.firstName) {
      setIsValid({ ...isValid, default: false, name: true });
    } else {
      setIsValid({ ...isValid, name: false });
    }
  };

  const onClickAddress = e => {
    e.preventDefault();
    if (inputs.address) {
      setIsValid({ ...isValid, address: true });
    } else {
      setIsValid({ ...isValid, address: false });
    }
  };

  const handleClickOutside = () => {
    if (inputs.email.includes('@')) {
      setIsValid({ ...isValid, email: true });
    } else {
      setInputs({
        email: '',
        lastName: '',
        firstName: '',
        phone: '',
        address: '',
      });
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
          {isValid.default && (
            <PaymentEmail
              value={email}
              element={email}
              name={email}
              displayText={displayText}
              isValid={isValid}
              onClickEmail={onClickEmail}
              onClickName={onClickName}
            />
          )}

          {isValid.name && (
            <PaymentAddress
              value={address}
              element={address}
              displayText={displayText}
              isValid={isValid}
              onClickAddress={onClickAddress}
            />
          )}

          {isValid.address && (
            <PaymentShipping
              isValid={isValid}
              displayText={displayText}
              inputs={inputs}
            />
          )}
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
