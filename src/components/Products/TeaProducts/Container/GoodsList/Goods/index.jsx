import { useState } from "react";
import { Link } from "react-router-dom";

function Goods(props) {

  const { name, price, sale_price, sale_persent, like, review, img } = props.goods;
  const [boolean, setBoolean] = useState(true);

  return (
    <div className="goods">
      <Link to={""} className="window">
        <div
          onMouseOver={() => {
            setBoolean(false);
          }}
          onMouseLeave={() => {
            setBoolean(true);
          }}
        >
          {boolean ? (
            <img src={img.main} alt={name} />
          ) : (
            <img src={img.hover} alt={name} />
          )}
        </div>
      </Link>
      <div className="label-box">신제품</div>
      <p className="name">
        <Link to={""} className="goods-name">
          {name}
        </Link>
      </p>
      <p className="price-box">
        <span className="price">
          <strong>{price}</strong> 원
          <span>
            <del>{price}원</del>
            <em>({sale_persent}%↓)</em>
          </span>
        </span>
      </p>
      <div className="fnc">
        <span className="like">
          <span className="is-like"></span>
          {like}
        </span>
        <span className="comment">
          <span className="is-comment"></span>
          {review}
        </span>
      </div>
    </div>
  );
}

export default Goods;
