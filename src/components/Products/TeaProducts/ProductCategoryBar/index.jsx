import { Link } from "react-router-dom";

function ProductCategoryBar() {
  return (
    <ul className="product-category-bar">
      <li className="title">제품</li>
      <Link to={""}>티 제품</Link>
      <Link to={""}>티푸드</Link>
      <Link to={""}>라이프 스타일</Link>
    </ul>
  );
}

export default ProductCategoryBar;
