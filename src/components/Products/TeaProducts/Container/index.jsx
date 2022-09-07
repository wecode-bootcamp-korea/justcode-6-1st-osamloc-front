import { useEffect, useState } from "react";

import GoodsList from "./GoodsList";

function Container(props) {
  const {
    goodsList,
    pageInfo,
    setFirstCategory,
    secondCategory,
    setSecondCategory,
    pageNum,
    setPageNum,
  } = props;

  const [sortCategory, setsortCategory] = useState([
    {
      name: "리뷰많은순",
      query: "review",
      view: true,
    },
    {
      name: "판매순",
      query: "popular",
      view: false,
    },
    {
      name: "신상품순",
      query: "new",
      view: false,
    },
    {
      name: "높은 가격순",
      query: "price/desc",
      view: false,
    },
    {
      name: "낮은 가격순",
      query: "price/asc",
      view: false,
    },
  ]);

  useEffect(() => {
    for (let i in sortCategory) {
      if (sortCategory[i].view) {
        setFirstCategory(sortCategory[i].query);
      }
    }
    setPageNum(1);
  }, [sortCategory]);

  return (
    <>
      <div className="top-sort-bar">
        <p className="tea">{pageInfo.name}</p>
        <ul className="opt">
          {sortCategory.map((sortCategoryValue, i) => {
            return (
              <li key={i}>
                <button
                  key={sortCategoryValue.id}
                  className="category-list"
                  style={{
                    color: sortCategoryValue.view ? "#6c801a" : "#313131",
                    borderBottom: sortCategoryValue.view && "3px solid #6c801a",
                  }}
                  onClick={() => {
                    for (let i in sortCategory) {
                      let arr = [...sortCategory];
                      arr[i].view = false;
                      setsortCategory(arr);
                    }
                    sortCategoryValue.view = true;
                  }}
                >
                  {sortCategoryValue.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <GoodsList
        goodsList={goodsList}
        secondCategory={secondCategory}
        setSecondCategory={setSecondCategory}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </>
  );
}

export default Container;
