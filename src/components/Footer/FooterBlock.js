import React from 'react';
import FooterMenuList from './FooterMenuList';
import FooterCheckbox from './FooterCheckbox';
import leftArrowImage from './images/slideArrow.png';
import './FooterBlock.scss';

const FooterBlock = ({ FOOTER_DATA }) => {
  const { id, className, title } = FOOTER_DATA;

  return (
    <div className="footerBlock">
      <section className="communication">
        <h3 className="title">이솝 커뮤니케이션</h3>
        <div className="devider" />
        <p className="communicationText">
          제품, 서비스, 스토어, 이벤트, 문화적 관심사 등 다양한 소식을 받아보실
          수 있도록 이솝 이메일을 구독하세요.
        </p>
        <FooterCheckbox text="본인은 만 14세 이상입니다 (필수)" />
        <FooterCheckbox text="개인정보수집 및 이용에 동의합니다 (필수)" />
        <div className="detail1">
          <p className="communicationText">
            이솝은 이솝의 제품, 서비스 및 홍보 행사 관련 정보를 마케팅 목적으로,
            고객님이 동의 해지하시기 전까지, 고객님께 이메일로 보내 드립니다.
            마케팅 목적의 개인정보 수집 및 이용에 동의하지 않으셔도 되고, 그러한
            경우, 마케팅 정보를 수령하실 수 없습니다.
          </p>
        </div>

        <FooterCheckbox text="마케팅 정보 수신에 동의합니다 (필수)" />
        <div className="detail2">
          <p className="communicationText">
            뉴스레터 이메일을 통한 광고성 정보 수신에 동의합니다.
          </p>
        </div>

        <div className="inputWrapper">
          <input type="text" placeholder="이메일주소" className="emailInput" />
          <button className="emailBtn">
            <img
              alt="emailBtnImg"
              className="emailBtnImg"
              src={leftArrowImage}
            />
          </button>
        </div>
      </section>

      {FOOTER_DATA.map(({ id, title, menuList }) => (
        <section key={id} className={className}>
          <h3 className="title">{title}</h3>
          <div className="devider" />
          <ul>
            {menuList.map(({ id, menu }) => (
              <FooterMenuList key={id} menu={menu} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default FooterBlock;
