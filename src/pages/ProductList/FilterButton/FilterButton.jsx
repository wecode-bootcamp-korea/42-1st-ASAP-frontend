import './FilterButton.scss';

export default function FilterButton({ ModalHandler, isModal }) {
  return (
    <div className="filter-arrow-wrapper">
      {isModal ? (
        <button className="close" onClick={ModalHandler}>
          <img
            className="close-button"
            src="./images/close-button.png"
            alt="close-button"
          />
        </button>
      ) : (
        <button
          className={
            isModal
              ? 'filter-button filter-button-open'
              : 'filter-button filter-button-close'
          }
          type="button"
          onClick={ModalHandler}
        >
          필터
          <img
            className="filter-arrow"
            src="./images/downarrow.png"
            alt="filter-arrow"
          />
          <img
            className="filter-arrow-w"
            src="./images/arrow_w.png"
            alt="filter-arrow"
          />
        </button>
      )}
    </div>
  );
}
