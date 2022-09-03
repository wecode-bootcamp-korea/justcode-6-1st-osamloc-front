import { useEffect, useState } from "react";
import Goods from "./Goods";

import "./index.scss";

function GoodsList(props) {
  const { sortCategory } = props;

  // 카테고리 이름과 버튼 상태
  const [category, setCategory] = useState([
    {
      name: "잎차",
      view: false,
    },
    {
      name: "피라미드",
      view: false,
    },
    {
      name: "티백",
      view: false,
    },
    {
      name: "파우더",
      view: false,
    },
  ]);
  // 전체 버튼 상태
  const [total, setTotal] = useState(true);
  // fetch로 받아온 목록 데이터
  const [goodsList, setGoodsList] = useState([]);

  
  useEffect(() => {
    fetch("/data/product/product.json")
      .then((res) => res.json())
      .then((data) => {
        for (let i in sortCategory) {
          if (sortCategory[i].view && sortCategory[i].name === "리뷰많은순") {
            let goods = data.goods.sort((a, b) => {
              return b.review - a.review;
            });
            setGoodsList(goods);
          } else if (sortCategory[i].view && sortCategory[i].name === "판매순") {
            let goods = data.goods.sort((a, b) => {
              return b.like - a.like;
            });
            setGoodsList(goods);
          } else if (sortCategory[i].view && sortCategory[i].name === "신상품순") {
            let goods = data.goods.sort((a, b) => {
              return b.date - a.date;
            });
            setGoodsList(goods);
          } else if (sortCategory[i].view && sortCategory[i].name === "높은 가격순") {
            let goods = data.goods.sort((a, b) => {
              return b.price - a.price;
            });
            setGoodsList(goods);
          } else if (sortCategory[i].view && sortCategory[i].name === "낮은 가격순") {
            let goods = data.goods.sort((a, b) => {
              return a.price - b.price;
            });
            setGoodsList(goods);
          }
        }
      });
  }, [sortCategory]);

  // for (let i in sortCategory) {
  //   if (sortCategory[i].view) {
  //     useEffect(() => {
  //       fetch("/data/product/product.json")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           let sortName = sortCategory[i].sortName;
  //           let goods = data.goods.sort((a, b) => {
  //             return b.like - a.like;
  //           });
  //           setGoodsList(goods);
  //         });
  //     }, []);
  //   }
  // }

  // useEffect(() => {
  //   fetch("/data/product/product.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       for(let i in sortCategory){
  //         if(sortCategory[i].view && (sortCategory[i].name === '리뷰많은순' || '판매순' || '신상품순' || '높은 가격순')){
  //           let goods = data.goods.sort(function (a, b) {
  //             return b. - a.sortCategory.sortName;
  //           });
  //           setGoodsList(goods);
  //         } else{
  //           let goods = data.goods.sort(function (a, b) {
  //             return b.sortCategory.sortName - a.sortCategory.sortName;
  //           });
  //           setGoodsList(goods);
  //         }
  //       }
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("/data/product/product.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       for (let i in sortCategory) {
  //         if (sortCategory[i].view) {
  //           let goods = data.goods.sort((a, b) => {
  //             return b.sortCategory[i].sortName - a.sortCategory[i].sortName;
  //           });
  //           setGoodsList(goods);
  //         }
  //       }
  //     });
  // }, []);

  // '전체'버튼을 제외한 카테고리 버튼 상태가 한개라도 true라면 '전체'버튼을 비활성화
  useEffect(() => {
    for (let i in category) {
      if (category[i].view) {
        setTotal(false);
        break;
      } else {
        setTotal(true);
      }
    }
  }, [category]);

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
                key={i}
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
        {/* "전체" 카테고리 */}
        {goodsList.map((goods) => {
          return <>{total && <Goods key={goods.id} goods={goods} />}</>;
        })}

        {/* "전체"를 제외한 카테고리 */}
        {goodsList.map((goods, index) => {
          return (
            <>
              {category.map(
                (category, i) =>
                  goods.category === category.name &&
                  category.view && <Goods key={goods.id} goods={goods} />
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default GoodsList;
