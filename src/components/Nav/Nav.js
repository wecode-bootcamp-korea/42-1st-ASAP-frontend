import React, { useState } from 'react';
import Modal from '../../pages/Home/Modal';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState('로그인');
  return (
    <div className="navbar">
      <ul className="navbar-left">
        <li>
          <a>스킨 케어</a>
        </li>
        <li>
          <a>바디 & 핸드</a>
        </li>
        <li>
          <a>헤어</a>
        </li>
        <li>
          <a>향수</a>
        </li>
        <li>
          <a>홈</a>
        </li>
        <li>
          <a>키트 & 여행 제품</a>
        </li>
        <li>
          <a>기프트 가이드</a>
        </li>
        <li>
          <a>읽기</a>
        </li>
        <li>
          <a>스토어</a>
        </li>
        <li>
          <a>검색</a>
        </li>
      </ul>
      <ul className="navbar-right">
        <li>
          <div className="modalBtn">
            <button onClick={() => setIsOpen(true)}>{loginStatus}</button>
            <Modal
              open={isOpen}
              isopen={setIsOpen}
              setLoginStatus={setLoginStatus}
            >
              Fancy
            </Modal>
          </div>
        </li>
        <li>
          <button>카트</button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
