import React from 'react';
import './SignUpSuccess.scss';

const SignUpSuccess = props => {
  const { signUpSuccess, setIsOpen, setSignUpOpen, first_name, setMenuOpen } =
    props;

  if (!signUpSuccess) return null;

  return (
    <div className="successOverLay">
      <div className="successModal">
        <div className="welcomeText">환영합니다, {first_name}님</div>
        <div className="createText">계정이 생성되었습니다.</div>
        <button
          className="backBtn"
          onClick={() => {
            setIsOpen(false);
            setSignUpOpen(false);
            setMenuOpen(false);
          }}
        >
          돌아가기
        </button>
      </div>
    </div>
  );
};

export default SignUpSuccess;
