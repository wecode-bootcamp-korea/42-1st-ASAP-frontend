import Card from '../Card/Card';
import './HandProductList.scss';

export default function HandProductList({ handCardList }) {
  return (
    <div className="card-box">
      <div className="container-box">
        <h2 className="h-product-title">풍부한 수분과 영양 공급</h2>
        <p className="h-product-description">
          매일 우리에게 안락함을 선사하는 손은 보살핌을 받을 자격이 충분합니다.
          아로마 클렌저와 밤은 손에 수분과 영양을 공급하고 부드럽게 가꿔줍니다.
        </p>
      </div>
      {handCardList.map(handCardList => (
        <Card cardData={handCardList} key={handCardList.id} />
      ))}
    </div>
  );
}
