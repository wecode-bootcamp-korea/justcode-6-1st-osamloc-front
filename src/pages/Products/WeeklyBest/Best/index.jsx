import "./index.scss";

import axios from "axios";

import { ListContent, TabBtn } from "../../../../components/Products";
import { useEffect, useState } from "react";

function Best() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:10010/products/best/weekly`)
    .then((res) => {setProducts(res.data.data)})
  })

  return (
    <div className="best">
      <div className="product-header">
        <h2 className="product-title">베스트</h2>
      </div>
      {/* 메뉴 탭 */}
      <TabBtn />
      <div className="container">
        <ListContent products={products}>
          <div className="date-filter">
            오설록에서 많이 선물된 선물세트를 모았어요.
          </div>
        </ListContent>
      </div>
    </div>
  );
}

export default Best;
