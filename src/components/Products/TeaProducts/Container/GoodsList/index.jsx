import { useEffect, useState } from "react";

import Goods from "./Goods";

import Pagination from "./Pagination";
import "./index.scss";
import axios from "axios";

function GoodsList(props) {
  
  const { goodsList, secondCategory, setSecondCategory, pageNum, setPageNum, pageInfo } = props;
  
  // 전체 버튼 상태
  const [total, setTotal] = useState(true);
  // 카테고리 이름과 버튼 상태
  const [category, setCategory] = useState([
    {
      name: "잎차",
      query: 'tealeaf',
      view: false,
    },
    {
      name: "피라미드",
      query: 'pyramid',
      view: false,
    },
    {
      name: "티백",
      query: 'teabag',
      view: false,
    },
    {
      name: "파우더",
      query: 'powder',
      view: false,
    },
  ]);

  const [goodsLength, setGoodsLength] = useState(1);

  useEffect(() => {
    let secondCategory = [];
    // '전체'버튼을 제외한 카테고리 버튼 상태가 한개라도 true라면 '전체'버튼을 비활성화
    for (let i in category) {
      if (category[i].view) {
        setTotal(false);
        break;
      } else {
        setTotal(true);
        secondCategory = [];
      }
    }

    // 누른 버튼 이름을 배열에 넣기
    let arr = [];
    for(let i in category){
      if (category[i].view) {
        arr.push(category[i].query);
        secondCategory = arr;
      }
    }
    setSecondCategory(secondCategory.join());
    setPageNum(1);
  }, [category]);

  useEffect(() => {
    if (total) {
      axios
        .get(`http://localhost:10010/products/category?name=${pageInfo.query}`)
        .then((res) => {
          setGoodsLength(res.data.data.length);
          console.log('1',res.data.data.length);
        });
    } else {
      axios
        .get(`http://localhost:10010/products/category/type?name=${pageInfo.query}&type=${secondCategory}`)
        .then((res) => {
          setGoodsLength(res.data.data.length);
          console.log('2',res.data.data.length);
        });
    }
  }, [secondCategory]);

  // pagination에필요한 state
  const [limit, setLimit] = useState(9);
  const offset = (pageNum - 1) * limit;

  return (
    <>
      <div className="product-sort-filter">
        <p>
          총 <strong>{goodsLength}</strong>개의 상품이 있습니다.
        </p>
        <div className="filter-group">
          <button
            className="filter-all"
            style={{
              // 버튼 상태에 따라 색 변경
              background: total ? "#6c801a" : "#f1f1f1",
              color: total ? "#fff" : "#a5a5a5",
            }}
            // 전체버튼 클릭시 전체버튼을 제외한 모든 버튼 비활성화
            onClick={() => {
              setTotal(true);
              for (let i in category) {
                let newCategory = [...category];
                newCategory[i].view = false;
                setCategory(newCategory);
              }
            }}
          >
            전체
          </button>
          {category.map((el, i) => {
            return (
              <button
                key={el.name}
                className="filter"
                style={{
                  // 버튼 상태에 따라 색 변경
                  background: el.view ? "#6c801a" : "#f1f1f1",
                  color: el.view ? "#fff" : "#a5a5a5",
                }}
                onClick={() => {
                  // 클릭시 해당 버튼 켜고 끄기
                  let arr = [...category];
                  arr[i].view = !arr[i].view;
                  setCategory(arr);
                }}
              >
                {el.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="goods-list">
        {goodsList.map(goods => 
          <Goods key={goods.name} goods={goods} />
        )}
      </div>

      <Pagination
        goodsLength={goodsLength}
        limit={limit}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </>
  );
}

export default GoodsList;
