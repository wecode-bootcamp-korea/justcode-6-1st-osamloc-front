import "./index.scss";

import {
  ProductCategoryBar,
  TopSortBar,
  ProductSortFilter,
  GoodsList
} from "../../../components/Products";

function TeaProducts() {
  return (
    <div className="tea-products">
      <div className="product-header">
        <h2 className="product-title">티 제품</h2>
      </div>
      <div className="container">
        <div className="tea-shop-wrap">
          <ProductCategoryBar />
          <div className="inner-container">
            <TopSortBar />
            <ProductSortFilter />
            <GoodsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaProducts;
