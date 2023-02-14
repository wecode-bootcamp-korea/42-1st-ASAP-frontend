import React, { useState } from 'react';
import Checkbox from './ShippingCheckbox';
import ShippingInputBox from './ShippingInputBox';
import './PaymentShipping.scss';

function PaymentShipping({ displayText }) {
  const [isCheckValidShipping, setIsCheckValidShipping] = useState(false);
  const [isCheckValidGift, setIsCheckValidGift] = useState(false);

  const onClickCheckedShipping = event => {
    event.stopPropagation();
    setIsCheckValidShipping(prev => !prev);
  };

  const onClickCheckedGift = event => {
    event.stopPropagation();
    setIsCheckValidGift(prev => !prev);
  };
  return (
    <div className="paymentShipping">
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
        isCheckValid={isCheckValidShipping}
        onClickChecked={onClickCheckedShipping}
        shippingCheckboxText="배송 기사님께 요청 사항이 있습니다"
      />
      {isCheckValidShipping && (
        <ShippingInputBox
          name="배송요청사항"
          displayText={displayText}
          shippingInputText="배송 요청 사항"
        />
      )}

      <Checkbox
        isCheckValid={isCheckValidGift}
        onClickChecked={onClickCheckedGift}
        shippingCheckboxText="주문 포장 및 기타 요청 사항이 있습니다. (예: 개별 포장, 개별 기프트 메시지 카드)"
      />
      {isCheckValidGift && (
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

export default PaymentShipping;
