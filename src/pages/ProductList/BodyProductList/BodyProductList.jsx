// import BodyCard from './../Card/BodyCard';
import Card from '../Card/Card';
import './BodyProductList.scss';

export default function BodyProductList({ BodycardList }) {
  return (
    <div className="card-box">
      <div className="container-box">
        <h2 className="b-product-title">계절 내내 깨끗하고 부드러운 피부</h2>
        <p className="b-product-description">
          보태니컬 원료가 풍부하게 함유된 바디 클렌저, 하이드레이터 그리고
          부드러운 바디 트리트먼트 오일은 깨끗하고 부드러운 피부를 오랫동안 느낄
          수 있도록 해줍니다.
        </p>
      </div>
      {BodycardList.map(bodyCardList => (
        <Card cardData={bodyCardList} key={bodyCardList.id} />
      ))}
    </div>
  );
}
