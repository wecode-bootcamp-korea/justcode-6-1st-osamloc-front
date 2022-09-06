import { Link } from "react-router-dom";

import { TeaProductsInnerMenu, TeaFoodInnerMenu, LifeStyleInnerMenu } from "./InnerMenu"

function ProductSideMenuBar() {
  return (
    <ul className="product-side-menu-bar">
      <li className="title">제품</li>
      <li className="handler">
        <Link to={"/products"} className="side-menu-title">티 제품</Link>
        <TeaProductsInnerMenu />
      </li>
      <li className="handler">
        <Link to={""} className="side-menu-title">티푸드</Link>
        <TeaFoodInnerMenu />
      </li>
      <li className="handler">
        <Link to={""} className="side-menu-title">라이프 스타일</Link>
        <LifeStyleInnerMenu />
      </li>
    </ul>
  );
}

export default ProductSideMenuBar;
