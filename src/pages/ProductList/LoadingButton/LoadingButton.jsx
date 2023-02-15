import React from 'react';
import './LoadingButton.scss';

export default function LoadingButton({ cartLoading }) {
  return (
    <div className="added-cart" type="button" onClick={cartLoading}>
      <div className="loading-spinner-box">
        <div className="loading-spinner-dot" />
        <div className="loading-spinner-dot" />
        <div className="loading-spinner-dot" />
      </div>
    </div>
  );
}
