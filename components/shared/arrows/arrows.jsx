const Arrow =
  (classname, img) =>
  ({ onClick }) => {
    return (
      <div className={classname} onClick={onClick}>
        <img src={`./img/${img}.png`} />
      </div>
    );
  };

export const NextArrow = Arrow("next-arrow", "arrow");
export const PrevArrow = Arrow("prev-arrow", "arrow-left");
