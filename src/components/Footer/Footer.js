import React, { useState, useEffect } from 'react';
import FooterBlock from './FooterBlock';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div className="footerBlockWrapper">
        <FooterBlock FOOTER_DATA={FOOTER_DATA} />
      </div>
      <div className="devider" />
      <div className="waterMarkBox">
        <span className="waterMark">© ASAP</span>
      </div>
    </div>
  );
}

const FOOTER_DATA = [
  {
    id: 1,
    className: 'order',
    title: '주문 및 지원',
    menuList: [
      {
        id: 1,
        menu: '문의하기',
      },
      {
        id: 2,
        menu: '자주 묻는 질문 ↗',
      },
      {
        id: 3,
        menu: '배송 ↗',
      },
      {
        id: 4,
        menu: '반품 ↗',
      },
      {
        id: 5,
        menu: '배송 조회하기 ↗',
      },
      {
        id: 6,
        menu: '주문 내역',
      },
      {
        id: 7,
        menu: '이용 약관',
      },
    ],
  },
  {
    id: 2,
    title: '서비스',
    className: 'service',
    menuList: [
      {
        id: 1,
        menu: '기업체 구매',
      },
      {
        id: 2,
        menu: '페이셜 어포인트먼트',
      },
      {
        id: 3,
        menu: '1:1 채팅 상담',
      },
      {
        id: 4,
        menu: '린스 앤 리턴 캠페인',
      },
    ],
  },
  {
    id: 3,
    title: '위치 기본 설정',
    className: 'location',
    menuList: [
      {
        id: 1,
        menu: '배송: 대한민국',
      },
      {
        id: 2,
        menu: '언어: 한국어',
      },
    ],
  },
  {
    id: 4,
    title: '지속가능성',
    className: 'maintain',
    menuList: [
      {
        id: 1,
        menu: '이솝은 비콥 인증을 획득한 브랜드이며, PETA로부터 비건 인증을 받은 브랜드입니다.',
      },
    ],
  },
  {
    id: 5,
    className: 'introduction',
    title: '소개',
    menuList: [
      {
        id: 1,
        menu: '브랜드 스토리',
      },
      {
        id: 2,
        menu: '이솝 재단',
      },
      {
        id: 3,
        menu: '채용',
      },
      {
        id: 4,
        menu: '개인정보처리방침',
      },
      {
        id: 5,
        menu: '영상정보처리기기 운영/관리방침',
      },
      {
        id: 6,
        menu: '정품 인증',
      },
      {
        id: 7,
        menu: '쿠키 정책',
      },
    ],
  },
  {
    id: 6,
    className: 'social',
    title: '소셜',
    menuList: [
      {
        id: 1,
        menu: 'Instagram ↗',
      },
      {
        id: 2,
        menu: 'Twitter ↗',
      },
      {
        id: 3,
        menu: 'LinkedIn ↗',
      },
      {
        id: 4,
        menu: 'Kakao Plus Friend ↗',
      },
    ],
  },
  {
    id: 7,
    className: 'caution',
    title: '주의',
    menuList: [
      {
        id: 1,
        menu: '상호: 이솝코리아 유한회사 | 주소: 서울특별시 강남구 도산대로45길 10-6 이솝코리아 | 대표자: 프레데리크미셸어완세일러 | 대표전화: 1800-1987 | 대표 이메일: aesop@aesop.com | 호스팅 사업자: SAP Hybris | 사업자 등록 번호: 220-88-56014 사업자정보확인 | 통신판매업 신고번호: 2014-서울강남-02300',
      },
    ],
  },
];

export default Footer;
