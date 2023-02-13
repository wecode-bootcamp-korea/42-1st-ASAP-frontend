import React, { useState } from 'react';
import Checkbox from './ShippingCheckbox';
import ShippingInputBox from './ShippingInputBox';
import './PaymentStep04.scss';

function PaymentStep04({ displayText }) {
  const [isCheckValid01, setIsCheckValid01] = useState(false);
  const [isCheckValid02, setIsCheckValid02] = useState(false);

  const onClickChecked01 = event => {
    event.stopPropagation();
    isCheckValid01 ? setIsCheckValid01(false) : setIsCheckValid01(true);
  };

  const onClickChecked02 = event => {
    event.stopPropagation();
    isCheckValid02 ? setIsCheckValid02(false) : setIsCheckValid02(true);
  };
  return (
    <div className="paymentStep04">
      <span className="shippingMethodText">
        원하는 배송 방법을 선택하십시오
      </span>
      <div className="freeShippingWrapper">
        <input type="radio" id="shippingRadio" />
        <label for="shippingRadio" />
        <div className="shippingText">
          <h2 className="freeShippingHeader">무료 배송 - ￦0</h2>
          <p className="shippingDate">배송 예정일</p>
          <p className="shippingDate">영업일 기준 2~3일 소요</p>
        </div>
      </div>

      <Checkbox
        isCheckValid={isCheckValid01}
        onClickChecked={onClickChecked01}
        shippingCheckboxText="배송 기사님께 요청 사항이 있습니다"
      />
      {isCheckValid01 && (
        <ShippingInputBox
          name="배송요청사항"
          displayText={displayText}
          shippingInputText="배송 요청 사항"
        />
      )}

      <Checkbox
        isCheckValid={isCheckValid02}
        onClickChecked={onClickChecked02}
        shippingCheckboxText="주문 포장 및 기타 요청 사항이 있습니다. (예: 개별 포장, 개별 기프트 메시지 카드)"
      />
      {isCheckValid02 && (
        <ShippingInputBox
          name="주문요청사항"
          displayText={displayText}
          shippingInputText="기타 요청 사항 (기프트 메세지 카드 내용은 '선물할 제품인가요?'에서 기입하실 수 있습니다"
        />
      )}

      <button className="btnGo">결제하기</button>
    </div>
  );
}

export default PaymentStep04;
