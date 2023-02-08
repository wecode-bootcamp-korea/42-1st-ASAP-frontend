import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div className="topWrapper">
        <section className="communication">
          <h3 className="title">이솝 커뮤니케이션</h3>
          <div className="devider" />
          <p className="communicationText">
            제품, 서비스, 스토어, 이벤트, 문화적 관심사 등 다양한 소식을
            받아보실 수 있도록 이솝 이메일을 구독하세요.
          </p>
          <div className="checkboxContainer">
            <input type="checkbox" id="check1" />
            <label for="check1" />
            <p className="checkboxText">본인은 만 14세 이상입니다 (필수)</p>
          </div>

          <div className="checkboxContainer">
            <input type="checkbox" id="check1" />
            <label for="check1" />
            <p className="checkboxText">
              개인정보수집 및 이용에 동의합니다 (필수)
            </p>
          </div>
          <div className="detail1">
            <p className="communicationText">
              이솝은 이솝의 제품, 서비스 및 홍보 행사 관련 정보를 마케팅
              목적으로, 고객님이 동의 해지하시기 전까지, 고객님께 이메일로 보내
              드립니다. 마케팅 목적의 개인정보 수집 및 이용에 동의하지 않으셔도
              되고, 그러한 경우, 마케팅 정보를 수령하실 수 없습니다.
            </p>
          </div>

          <div className="checkboxContainer">
            <input type="checkbox" id="check1" />
            <label for="check1" />
            <p className="checkboxText">마케팅 정보 수신에 동의합니다 (필수)</p>
          </div>
          <div className="detail2">
            <p className="communicationText">
              뉴스레터 이메일을 통한 광고성 정보 수신에 동의합니다.
            </p>
          </div>

          <div className="inputWrapper">
            <input
              type="text"
              placeholder="이메일주소"
              className="emailInput"
            />
            <button className="emailBtn">
              <img
                alt="emailBtnImg"
                className="emailBtnImg"
                src="./images/goIcon.png"
              />
            </button>
          </div>
        </section>
        <section className="order">
          <h3 className="title">주문 및 지원</h3>
          <div className="devider" />
          <ul>
            <li className="text">
              <a href="temp.html">문의하기</a>
            </li>
            <li className="text">
              <a href="temp.html">자주 묻는 질문</a>
              <img
                alt="go"
                className="upperArrow"
                src="./images/upperArrow.png"
              />
            </li>
            <li className="text">
              <a href="temp.html">배송</a>
              <img
                alt="go"
                className="upperArrow"
                src="./images/upperArrow.png"
              />
            </li>
            <li className="text">
              <a href="temp.html">반품</a>
              <img
                alt="go"
                className="upperArrow"
                src="./images/upperArrow.png"
              />
            </li>
            <li className="text">
              <a href="temp.html">배송 조회하기</a>
              <img
                alt="go"
                className="upperArrow"
                src="./images/upperArrow.png"
              />
            </li>
            <li className="text">
              <a href="temp.html">주문 내역</a>
            </li>
            <li className="text">
              <a href="temp.html">이용 약관</a>
            </li>
          </ul>
        </section>
        <section className="service">
          <h3 className="title">서비스</h3>
          <div className="devider" />
          <ul>
            <li className="text">
              <a href="temp.html">기업체 구매</a>
            </li>
            <li className="text">
              <a href="temp.html">페이셜 어포인트먼트</a>
            </li>
            <li className="text">
              <a href="temp.html">1:1 채팅 상담</a>
            </li>
            <li className="text">
              <a href="temp.html">린스 앤 리턴 캠페인</a>
            </li>
          </ul>
        </section>
        <section className="location">
          <h3 className="title">위치 기본 설정</h3>
          <div className="devider" />
          <div className="locationBox">
            <span className="locationText">배송:</span>
            <a href="temp.html" className="locationLink">
              대한민국
            </a>
          </div>
          <div className="locationBox">
            <span className="locationText">언어:</span>
            <a href="temp.html" className="locationLink">
              한국어
            </a>
          </div>
        </section>
      </div>

      <div className="bottomWrapper">
        <section className="maintain">
          <h3 className="title">지속가능성</h3>
          <div className="devider" />
          <ul>
            <li className="text">
              <a href="temp.html">기업체 구매</a>
            </li>
            <li className="text">
              <a href="temp.html">페이셜 어포인트먼트</a>
            </li>
            <li className="text">
              <a href="temp.html">1:1 채팅 상담</a>
            </li>
            <li className="text">
              <a href="temp.html">린스 앤 리턴 캠페인</a>
            </li>
          </ul>
        </section>
        <section className="introduction">
          <h3 className="title">소개</h3>
          <div className="devider" />
          <ul>
            <li className="text">
              <a href="temp.html">브랜드 스토리</a>
            </li>
            <li className="text">
              <a href="temp.html">이솝 재단</a>
            </li>
            <li className="text">
              <a href="temp.html">채용</a>
            </li>
            <li className="text">
              <a href="temp.html">개인정보처리방침</a>
            </li>
            <li className="text">
              <a href="temp.html">영상정보처리기기 운영/관리 방침</a>
            </li>
            <li className="text">
              <a href="temp.html">정품 인증</a>
            </li>
            <li className="text">
              <a href="temp.html">쿠키 정책</a>
            </li>
          </ul>
        </section>
        <section className="social">
          <h3 className="title">소셜</h3>
          <div className="devider" />
          <ul>
            <li className="text">
              <a href="temp.html">Instagram</a>
              <img
                alt="go"
                className="upperArrow"
                src="./images/upperArrow.png"
              />
            </li>
            <li className="text">
              <a href="temp.html">Twitter</a>
              <img
                alt="go"
                className="upperArrow"
                src="./images/upperArrow.png"
              />
            </li>
            <li className="text">
              <a href="temp.html">LinkedIn</a>
              <img
                alt="go"
                className="upperArrow"
                src="./images/upperArrow.png"
              />
            </li>
            <li className="text">
              <a href="temp.html">KaKao Plus Friend</a>
              <img
                alt="go"
                className="upperArrow"
                src="./images/upperArrow.png"
              />
            </li>
          </ul>
        </section>
        <section className="caution">
          <h3 className="title">주의</h3>
          <div className="devider" />
          <p className="cautionText">
            상호: 이솝코리아 유한회사 | 주소: 서울특별시 강남구 도산대로45길
            10-6 이솝코리아 | 대표자: 프레데리크미셸어완세일러 | 대표전화:
            1800-1987 | 대표 이메일: aesop@aesop.com | 호스팅 사업자: SAP Hybris
            | 사업자 등록 번호: 220-88-56014 사업자정보확인 | 통신판매업
            신고번호: 2014-서울강남-02300
          </p>
        </section>
      </div>
      <div className="devider" />
      <div className="waterMarkBox">
        <span className="waterMark">© ASAP</span>
      </div>
    </div>
  );
}

export default Footer;
