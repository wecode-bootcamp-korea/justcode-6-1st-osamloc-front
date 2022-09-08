import axios from "axios";
import { useEffect, useState } from "react";
import "./index.scss";
import ProductSideMenuBar from "./ProductSideMenuBar";
import Container from "./Container";
import styled from "styled-components";

function TeaProducts(props) {

  const { pageInfo } = props

  // 제품 데이터
  const [goodsList, setGoodsList] = useState([]);
  
  const [firstCategory, setFirstCategory] = useState('review');
  const [secondCategory, setSecondCategory] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const [typeURL, setTypeURL] = useState(["", ""]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:10010/products/category/${typeURL[0]}${firstCategory}?name=${pageInfo.query}${typeURL[1]}${secondCategory}&page=${pageNum}`
      )
      // .get('/data/product/product.json')
      .then((res) => {
        setGoodsList(res.data.data);
      })
      .catch((e) => console.log("에러코드", e));
  }, [firstCategory, secondCategory, pageNum, typeURL]);

  useEffect(() => {
    let arr = [];
    if (secondCategory.length) {
      arr = ["type/", "&type="];
      setTypeURL(arr);
    } else {
      arr = ["", ""];
      setTypeURL(arr);
    }
  }, [secondCategory]);

  const ProductHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 380px;
    margin: 0 0 40px 0;
    background: url(${pageInfo.background})
      50% 50% no-repeat;
  `;
  
  return goodsList && (
    <div className="tea-products">
      <ProductHeader
      //  className="product-header"
       >
        <h2 className="product-title">{pageInfo.name}</h2>
      </ProductHeader>
      <div className="container">
        <div className="tea-shop-wrap">
          <ProductSideMenuBar />
          <div className="inner-container">
            <Container
              goodsList={goodsList}
              pageInfo={pageInfo}
              setFirstCategory={setFirstCategory}
              secondCategory={secondCategory}
              setSecondCategory={setSecondCategory}
              pageNum={pageNum}
              setPageNum={setPageNum}
            />
          </div>
        </div>
      </div>
    </div>
  );

}

export default TeaProducts;
