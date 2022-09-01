import { Link } from "react-router-dom";

function Goods() {
  return (
    <div className="goods">
      <Link to={""} className="window">
        <img
          src="https://www.osulloc.com/upload/kr/ko/adminImage/HB/XA/304_20211026141423508CU.png?quality=80"
          alt="러블리 티 박스"
        />
      </Link>
      <div className="label-box">신제품</div>
      <p className="name">
        <Link to={""} className="goods-name">
          러블리 티 박스
        </Link>
      </p>
      <p className="price-box">
        <span className="price">
          <strong>15,000</strong> 원
          <span>
            <del>20,000원</del>
            <em>(25%↓)</em>
          </span>
        </span>
      </p>
      <div className="fnc">
        <span className="like">
          <span className="is-like"></span>
          32
        </span>
        <span className="comment">
          <span className="is-comment"></span>
          699
        </span>
      </div>
    </div>
  );
}

export default Goods;
