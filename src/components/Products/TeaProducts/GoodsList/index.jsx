import { useEffect, useState } from "react";
import Goods from "./Goods";

import "./index.scss";

function GoodsList() {

  const category = ['잎차', '피라미드', '티백', '파우더'];
  const [categoryValue, setCategoryValue] = useState([false, false, false, false]);
  const [goodsList, setGoods] = useState([]);
  const [boolean, setBoolean] = useState(true);
  
  useEffect(() => {
    fetch("/data/product/product.json")
    .then(res => res.json())
    .then((data) => {
      setGoods(data.goods);
    });
  }, []);
  
  useEffect(() => {
    for(let i in categoryValue) {
      if(categoryValue[i]){
        setBoolean(false);
        break;
      } else {
        setBoolean(true);
      }
    }
  }, [categoryValue])

  console.log("이건",boolean);

  return (
    <>
      <div className="product-sort-filter">
        <p>
          총 <strong>{goodsList.length}</strong>개의 상품이 있습니다.
        </p>
        <div className="filter-group">
          <button
            className="filter-all"
            style={{
              background: boolean ? "#6c801a" : "#f1f1f1",
              color: boolean ? "#fff" : "#a5a5a5",
            }}
            onClick={() => {
              setBoolean(true);
              setCategoryValue([false, false, false, false]);
            }}
          >
            전체
          </button>
          {category.map((category, i) => {
            return (
              <button
                key={i}
                className="filter"
                style={{
                  background: categoryValue[i] ? "#6c801a" : "#f1f1f1",
                  color: categoryValue[i] ? "#fff" : "#a5a5a5",
                }}
                onClick={() => {
                  let arr = [...categoryValue];
                  // arr = [false, false, false, false];
                  arr[i] = !arr[i];
                  setCategoryValue(arr);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
      <div className="goods-list">
        {goodsList.map((goods) => {
          return (
            <>
              {boolean && <Goods key={goods.id} goods={goods} />}
            </>
          );
        })}
        {goodsList.map((goods) => {
          return (
            <>
              {/* {boolean && <Goods key={goods.id} goods={goods} />} */}
              {goods.category === "잎차" && categoryValue[0] && (
                <Goods key={goods.id} goods={goods} />
              )}
              {goods.category === "피라미드" && categoryValue[1] && (
                <Goods key={goods.id} goods={goods} />
              )}
              {goods.category === "티백" && categoryValue[2] && (
                <Goods key={goods.id} goods={goods} />
              )}
              {goods.category === "파우더" && categoryValue[3] && (
                <Goods key={goods.id} goods={goods} />
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default GoodsList;
