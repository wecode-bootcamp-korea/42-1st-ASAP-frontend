import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import './Slider.scss';

const IMG_WIDTH = 500;
const PROGRESS_WIDTH = 200;

const Slider = () => {
  const [move, setMove] = useState(0);
  const [progress, setProgress] = useState(0);
  const [recommends, setRecommends] = useState([]);

  const moveLeft = () => {
    if (move <= -IMG_WIDTH) {
      setMove(move => move + IMG_WIDTH);
    }
    if (progress <= -PROGRESS_WIDTH) {
      setProgress(progress => progress + PROGRESS_WIDTH);
    }
  };
  useEffect(() => {
    fetch('./data/Recommends.json')
      .then(res => res.json())
      .then(data => {
        setRecommends(data);
      });
  }, []);

  const moveRight = () => {
    if (move >= -(recommends.length * IMG_WIDTH) + IMG_WIDTH * 4) {
      setMove(move => move - IMG_WIDTH);
    }

    if (progress > -(PROGRESS_WIDTH * 2)) {
      setProgress(progress => progress - PROGRESS_WIDTH);
    }
  };
  return (
    <div className="SliderContainer">
      <div className="slider">
        <img
          src="./images/slideArrowB.png"
          className="leftArrow"
          onClick={moveLeft}
          alt="arrowIcon"
        />
        <img
          src="/images/slideArrow.png"
          className="rightArrow"
          onClick={moveRight}
          alt="arrowIcon"
        />
        <div className="carouselWrapper">
          <div
            className="carousel"
            style={{ transform: `translateX(${move}px)` }}
          >
            <div className="recommendTitleBox">
              <p>함께 사용하기 좋은 제품</p>
            </div>
            {recommends.map(item => {
              return (
                <ItemCard
                  key={item.product_id}
                  name={item.name}
                  img={item.product_image_url}
                  description={item.product_content}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="lines">
        <div
          style={{ transform: `translateX(${-progress * 2.6}px)` }}
          className="line1"
        />
        <div className="line2" />
      </div>
    </div>
  );
};

export default Slider;
