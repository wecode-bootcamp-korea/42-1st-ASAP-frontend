import React, { useState, useEffect } from 'react';
import SignupModal from './SignUpModal';
import './LoginModal.scss';

const LoginModal = props => {
  const { isOpen, setIsOpen, setLoginStatus, setMenuOpen } = props;
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [dataLift, setDataLift] = useState('');

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

  const Login = () => {
    fetch('http://10.58.52.217:8000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        alert('로그인 되셨습니다');
        setIsOpen(false);
        setFormData({ email: '', password: '' });
        setLoginStatus('로그아웃');
      });
  };

  const changeFormInput = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="loginOverlay">
      <div className="loginModal" id="modalScroll">
        <div className="loginDelete">
          <img
            className="closeBtn"
            src="images/delete.png"
            onClick={() => {
              setIsOpen(false);
              setMenuOpen(false);
              setFormData({ email: '', password: '' });
            }}
            alt="delete"
          />
        </div>
        <div className="loginText">로그인</div>
        <label className="label1" for="inputEmail" />
        <input
          className="loginInput"
          id="inputEmail"
          name="email"
          placeholder="이메일 주소"
          onChange={changeFormInput}
          value={formData.email}
        />
        <input
          className="loginInput"
          name="password"
          placeholder="비밀번호"
          onChange={changeFormInput}
          value={formData.password}
        />
        <button
          className="loginBtn"
          onClick={Login}
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
          setMenuOpen={setMenuOpen}
          setDataLift={setDataLift}
        />
      </div>
    </div>
  );
};

export default LoginModal;
