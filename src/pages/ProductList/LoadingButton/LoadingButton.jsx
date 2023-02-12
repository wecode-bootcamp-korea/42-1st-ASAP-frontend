import React from 'react';

export default function LoadingButton({ cartLoading }) {
  return (
    <div>
      <button className="added-cart" type="button" onClick={cartLoading}>
        카트에 추가됨
      </button>
    </div>
  );
}
