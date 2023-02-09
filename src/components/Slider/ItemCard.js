import React from 'react';

const ItemCard = ({ img, name, description }) => {
  return (
    <div className="imgBox">
      <img src={img} className="image" alt="제품 사진" />
      <div className="text">
        <p className="recommendedItemName">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
