import { Link } from "react-router-dom";

import "./index.scss";

function Goods(props) {

  const { num, product } = props;

  return (
    <div className="goods">
      <div className="img-wrap">
        <Link to={`/products/item/${product.productId}`}>
          <div className="img-box">
            <img src={product.default_img} alt="프리미엄 티 컬렉션" />
            <span className="rank-num">{num}</span>
          </div>
        </Link>
        <div className="fnc-btn-wrap">
          <Link to={""} className="cart-btn"></Link>
        </div>
      </div>
      <div className="info-wrap">
        <Link to={""} className="goods-name">
          {product.name}
        </Link>
        {product.sale ? (
          <div className="price-box">
            <del className="sales-price">{product.price_origin}원</del>
            <div className="last-price">
              {product.sale_price}원
              <span className="rate">{product.sale}%</span>
            </div>
          </div>
        ) : (
          <div className="price-box">
            <div className="last-price">{product.price_origin}원</div>
          </div>
        )}
        {/* <div className="label-box">신제품</div> */}
      </div>
    </div>
  );
}

export default Goods;
