import { useState } from "react";
import { Link } from "react-router-dom";

function Goods(props) {

// 통신테스트용
  const { name, price_origin, sale_price, sale, likeCount, reviewCount, default_img, hover_img, productId } = props.goods;
  const [boolean, setBoolean] = useState(true);

  return (
    <div className="goods">
      <Link to={`/products/item/${productId}`} className="window">
        <div
          onMouseOver={() => {
            setBoolean(false);
          }}
          onMouseLeave={() => {
            setBoolean(true);
          }}
        >
          {boolean ? (
            <img src={default_img} alt={name} />
          ) : (
            <img src={hover_img} alt={name} />
          )}
        </div>
      </Link>
      {/* <div className="label-box">신제품</div> */}
      <p className="name">
        <Link to={`/products/item/${productId}`} className="goods-name">
          {name}
        </Link>
      </p>
      <p className="price-box">
        <span className="price">
          {sale ? <strong>{sale_price}</strong> : <strong>{price_origin}</strong>} 원
          {sale && 
          <span>
            <del>{price_origin}원</del>
            <em>({sale}%↓)</em>
          </span>
          }
        </span>
      </p>
      <div className="fnc">
        <span className="like">
          <span className="is-like"></span>
          {likeCount}
        </span>
        <span className="comment">
          <span className="is-comment"></span>
          {reviewCount}
        </span>
      </div>
    </div>
  );

  // 로컬테스트용
  // const { name, price, sale_price, sale_persent, like, review, img } = props.goods;
  // const [boolean, setBoolean] = useState(true);

  // return (
  //   <div className="goods">
  //     <Link to={""} className="window">
  //       <div
  //         onMouseOver={() => {
  //           setBoolean(false);
  //         }}
  //         onMouseLeave={() => {
  //           setBoolean(true);
  //         }}
  //       >
  //         {boolean ? (
  //           <img src={img.main} alt={name} />
  //         ) : (
  //           <img src={img.hover} alt={name} />
  //         )}
  //       </div>
  //     </Link>
  //     <div className="label-box">신제품</div>
  //     <p className="name">
  //       <Link to={""} className="goods-name">
  //         {name}
  //       </Link>
  //     </p>
  //     <p className="price-box">
  //       <span className="price">
  //         <strong>{price}</strong> 원
  //         <span>
  //           <del>{price}원</del>
  //           <em>({sale_persent}%↓)</em>
  //         </span>
  //       </span>
  //     </p>
  //     <div className="fnc">
  //       <span className="like">
  //         <span className="is-like"></span>
  //         {like}
  //       </span>
  //       <span className="comment">
  //         <span className="is-comment"></span>
  //         {review}
  //       </span>
  //     </div>
  //   </div>
  // );
}

export default Goods;
