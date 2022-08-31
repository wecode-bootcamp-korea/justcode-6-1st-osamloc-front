import { Link } from "react-router-dom";

import "./goods.scss";

function Goods(props) {

  const { order } = props

  return (
    <div className="goods">
      <div className="img-wrap">
        <Link to={`/product/${order}`}>
          <div className="img-box">
            <img
              src="https://www.osulloc.com/upload/kr/ko/adminImage/OE/LQ/20220630103209915FT.png?quality=80&shrink=304:340"
              alt="프리미엄 티 컬렉션"
            />
            <span className="rank-num">{order}</span>
          </div>
        </Link>
        <div className="fnc-btn-wrap">
          <Link to={""} className="cart-btn">
          </Link>
        </div>
      </div>
      <div className="info-wrap">
        <Link to={""} className="goods-name">
          프리미엄 티 컬렉션
        </Link>
        <div className="price-box">
          <del className="sales-price">28,000원</del>
          <div className="last-price">
            22,400원
            <span className="rate">20%</span>
          </div>
        </div>
        <div className="label-box">신제품</div>
      </div>
    </div>
  );
}

export default Goods;
