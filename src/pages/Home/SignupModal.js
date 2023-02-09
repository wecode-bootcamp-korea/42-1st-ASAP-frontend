import React, { useState, useRef, useEffect } from 'react';
import './SignupModal.scss';

const SignupModal = props => {
  const { signUpOpen, setSignUpOpen, setIsOpen } = props;
  const [signUpForm, setSignUpForm] = useState({
    last_name: '',
    first_name: '',
    email: '',
    password: '',
  });
  const changeSignUpInput = ({ target }) => {
    const { name, value } = target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  console.log(signUpForm.first_name);

  if (!signUpOpen) return null;
  return (
    <div className={signUpOpen ? 'signOverlay' : 'signupClose'}>
      <div className={signUpOpen ? 'signModal' : 'modalClose'}>
        <img
          className="arrow"
          src="images/leftarrow.png"
          onClick={() => setSignUpOpen(false)}
          alt="arrow"
        />
        <img
          src="images/delete.png"
          alt="delete"
          onClick={() => {
            setIsOpen(false);
            setSignUpOpen(false);
          }}
        />
        <div className="signUpText">회원가입</div>
        <div className="signUpAlram">
          회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
          있습니다.
        </div>
        <div className="inputBox">
          <input
            name="last_name"
            className="firstInput"
            placeholder="성"
            onChange={changeSignUpInput}
            value={signUpForm.last_name}
          />
          <input
            name="first_name"
            className="secondInput"
            placeholder="이름"
            onChange={changeSignUpInput}
            value={signUpForm.first_name}
          />
        </div>
        <input
          name="email"
          className="thirdInput"
          placeholder="이메일주소"
          onChange={changeSignUpInput}
          value={signUpForm.email}
        />
        <input
          name="password"
          className="fourthInput"
          placeholder="비밀번호"
          onChange={changeSignUpInput}
          value={signUpForm.password}
        />
        <div className="checkBox">
          <input type="checkbox" />
          <span>본인은 만 14세 이상입니다 (필수)</span>
        </div>
        <div className="checkBox" style={{ marginTop: '-30px' }}>
          <input type="checkbox" />
          <span>이용 약관에 동의합니다 (필수)</span>
        </div>
        <div className="terms">
          {/*overflow확인용 */}
          ddddddddddddkfjgbslkjgblskfjgbslkjgbsklfjgblaskfjgbaslkfjgbaslfkjgbsklfjgblskfjgblaksfjgblksfgblksfjgddddddddddddkfjgbslkjgblskfjgbslkjgbsklfjgblaskfjgbaslkfjgbaslfkjgbsklfjgblskfjgblaksfjgblksfgblksfjgddddddddddddkfjgbslkjgblskfjgbslkjgbsklfjgblaskfjgbaslkfjgbaslfkjgbsklfjgblskfjgblaksfjgblksfgblksfjgddddddddddddkfjgbslkjgblskfjgbslkjgbsklfjgblaskfjgbaslkfjgbaslfkjgbsklfjgblskfjgblaksfjgblksfgblksfjgddddddddddddkfjgbslkjgblskfjgbslkjgbsklfjgblaskfjgbaslkfjgbaslfkjgbsklfjgblskfjgblaksfjgblksfgblksfjgddddddddddddkfjgbslkjgblskfjgbslkjgbsklfjgblaskfjgbaslkfjgbaslfkjgbsklfjgblskfjgblaksfjgblksfgblksfjgddddddddddddkfjgbslkjgblskfjgbslkjgbsklfjgblaskfjgbaslkfjgbaslfkjgbsklfjgblskfjgblaksfjgblksfgblksfjgddddddddddddkfjgbslkjgblskfjgbslkjgbsklfjgblaskfjgbaslkfjgbaslfkjgbsklfjgblskfjgblaksfjgblksfgblksfjgddddddddddddkfjgbslkjgblskfjgbslkjgbsklfjgblaskfjgbaslkfjgbaslfkjgbsklfjgblskfjgblaksfjgblksfgblksfjg
        </div>
        <button
          className="signUpBtn"
          disabled={
            !(
              signUpForm.email.includes('@') &&
              signUpForm.password.length > 5 &&
              signUpForm.last_name > 0 &&
              signUpForm.first_name > 0
            )
          }
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
