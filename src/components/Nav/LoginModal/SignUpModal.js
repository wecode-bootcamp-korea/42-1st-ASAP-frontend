import React, { useState } from 'react';
import SignUpSuccess from './SignUpSuccess';
import './SignUpModal.scss';

const SignupModal = props => {
  const { signUpOpen, setSignUpOpen, setIsOpen, setMenuOpen } = props;
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signUpForm, setSignUpForm] = useState({
    last_name: '',
    first_name: '',
    email: '',
    password: '',
  });

  const signUpCondition =
    signUpForm.email.includes('@') &&
    signUpForm.password.length > 5 &&
    signUpForm.last_name.length > 0 &&
    signUpForm.first_name.length > 0;

  const signUp = () => {
    fetch('http://10.58.52.97:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: signUpForm.email,
        password: signUpForm.password,
        firstname: signUpForm.first_name,
        lastname: signUpForm.last_name,
      }),
    })
      .then(response => response.json())
      .then(response => {
        setSignUpSuccess(true);
      });
  };

  const changeSignUpInput = ({ target }) => {
    const { name, value } = target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };
  if (!signUpOpen) return null;

  return (
    <div className="signOverlay">
      <div className="signModal">
        <div className="imageLine">
          <img
            className="arrow"
            src="images/leftarrow.png"
            onClick={() => setSignUpOpen(false)}
            alt="arrow"
          />
          <img
            className="delete"
            src="images/delete.png"
            alt="delete"
            onClick={() => {
              setIsOpen(false);
              setSignUpOpen(false);
              setMenuOpen(false);
            }}
          />
        </div>
        <div className="signUpText">회원가입</div>
        <div className="signUpAlram">
          회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
          있습니다.
        </div>
        <div className="inputBox">
          <div className="firstInputContainer">
            <input
              name="last_name"
              autoComplete="off"
              className="firstInput"
              onChange={changeSignUpInput}
              value={signUpForm.last_name}
            />
            <label className="firstInputLabel">
              <span className="firstInputName">성</span>
            </label>
          </div>
          <div className="secondInputContainer">
            <input
              name="first_name"
              autoComplete="off"
              className="secondInput"
              onChange={changeSignUpInput}
              value={signUpForm.first_name}
            />
            <label className="secondInputLabel">
              <span className="secondInputName">이름</span>
            </label>
          </div>
        </div>
        <div className="thirdInputContainer">
          <input
            name="email"
            autoComplete="off"
            className="thirdInput"
            onChange={changeSignUpInput}
            value={signUpForm.email}
          />
          <label className="thirdInputLabel">
            <span className="thirdInputName">이메일주소</span>
          </label>
        </div>
        <div className="fourthInputContainer">
          <input
            name="password"
            autoComplete="off"
            className="fourthInput"
            onChange={changeSignUpInput}
            value={signUpForm.password}
          />
          <label className="fourthInputLabel">
            <span className="fourthInputName">비밀번호</span>
          </label>
        </div>
        <div className="secondCheckBox">
          <input className="checkBoxBtn" type="checkbox" />
          <span>이용 약관에 동의합니다 (필수)</span>
        </div>
        <div className="terms">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <button
          className="signUpBtn"
          disabled={!signUpCondition}
          onClick={signUp}
        >
          회원가입
        </button>
        <SignUpSuccess
          signUpSuccess={signUpSuccess}
          setIsOpen={setIsOpen}
          setSignUpOpen={setSignUpOpen}
          first_name={signUpForm.first_name}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </div>
  );
};

export default SignupModal;
