import "./index.scss";

import {
  ProductSideMenuBar,
  Container
} from "../../../components/Products";

function TeaProducts() {
  return (
    <div className="tea-products">
      <div className="product-header">
        <h2 className="product-title">티 제품</h2>
      </div>
      <div className="container">
        <div className="tea-shop-wrap">
          <ProductSideMenuBar />
          <div className="inner-container">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaProducts;
