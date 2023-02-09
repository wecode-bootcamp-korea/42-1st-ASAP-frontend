import React, { useState, useEffect } from 'react';
import SignupModal from './SignupModal';
import './Modal.scss';

const Modal = props => {
  const { isOpen, setIsOpen, setLoginStatus } = props;
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [signUpOpen, setSignUpOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = 'auto';
    }
    return () => {
      html.style.overflowY = 'auto';
    };
  }, [isOpen]);

  const changeFormInput = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const alertLogin = () => {
    alert('로그인 되셨습니다');
    setIsOpen(false);
    setFormData({ email: '', password: '' });
    setLoginStatus('로그아웃');
  };

  if (!isOpen) return null;
  return (
    <div className="loginOverlay">
      <div className="loginModal" id="modalScroll">
        <img src="images/delete.png" onClick={() => setIsOpen(false)} alt="" />
        <div className="loginText">로그인</div>
        <input
          name="id"
          placeholder="이메일 주소"
          onChange={changeFormInput}
          value={formData.email}
        />
        <input
          name="password"
          placeholder="비밀번호"
          onChange={changeFormInput}
          value={formData.password}
        />
        <button
          className="loginBtn"
          onClick={alertLogin}
          disabled={
            !(formData.email.includes('@') && formData.password.length > 5)
          }
        >
          로그인
        </button>
        <div className="notMember">회원이 아니신가요?</div>
        <button className="signupBtn" onClick={() => setSignUpOpen(true)}>
          회원가입
        </button>
        <SignupModal
          signUpOpen={signUpOpen}
          setSignUpOpen={setSignUpOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default Modal;
