import { Link } from "react-router-dom";

import { TeaProductsInnerMenu } from "./InnerMenu"

function ProductSideMenuBar() {
  return (
    <ul className="product-side-menu-bar">
      <li className="title">제품</li>
      <li className="handler">
        <Link to={""}>티 제품</Link>
        <TeaProductsInnerMenu />
      </li>
      <li className="handler">
        <Link to={""}>티푸드</Link>
        
      </li>
      <li className="handler">
        <Link to={""}>라이프 스타일</Link>
        
      </li>
    </ul>
  );
}

export default ProductSideMenuBar;
