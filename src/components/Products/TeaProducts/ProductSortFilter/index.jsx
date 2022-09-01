import { useState } from "react";

function ProductSortFilter() {

  const category = ['잎차', '피라미드', '티백', '파우더'];
  const [bgc, setBgc] = useState('');

  return (
    <div className="product-sort-filter">
      <p>
        총 <strong>174</strong>개의 상품이 있습니다.
      </p>
      <div className="filter-group">
        <button className="filter-all">
          전체
        </button>
        {category.map((category, i) => {
          return (
            <button key={i + 10} className="filter">
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSortFilter;
