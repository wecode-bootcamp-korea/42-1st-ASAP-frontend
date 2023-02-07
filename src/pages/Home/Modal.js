import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({ props, open, isopen, setLoginStatus }) => {
  const [formData, setFormData] = useState({ id: '', password: '' });

  const changeFormInput = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const alertLogin = () => {
    alert('로그인 되셨습니다');
    isopen(false);
    setFormData({ id: '', password: '' });
    setLoginStatus('로그아웃');
  };
  console.log(formData.id);
  if (!open) return null;
  return (
    <div className="loginOverlay">
      <div className="loginModal">
        <img src="images/delete.png" onClick={() => isopen(false)} alt="" />
        <div className="loginText">로그인</div>
        <input
          name="id"
          placeholder="이메일 주소"
          onChange={changeFormInput}
          value={formData.id}
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
            !(formData.id.includes('@') && formData.password.length > 5)
          }
        >
          로그인
        </button>
        <div className="notMember">회원이 아니신가요?</div>
        <button className="signupBtn">회원가입</button>
      </div>
    </div>
  );
};

export default Modal;
