import { useState } from "react";
import { Link } from "react-router-dom";

import GoodsList from "./GoodsList";

function Container() {

  const [sortCategory, setsortCategory] = useState([
    {
      id: 1,
      name: "리뷰많은순",
      view: true,
    },
    {
      id: 2,
      name: "판매순",
      view: false,
    },
    {
      id: 3,
      name: "신상품순",
      view: false,
    },
    {
      id: 4,
      name: "높은 가격순",
      view: false,
    },
    {
      id: 5,
      name: "낮은 가격순",
      view: false,
    },
  ]);

  return (
    <>
      <div className="top-sort-bar">
        <p className="tea">티 제품</p>
        <ul className="opt">
          {sortCategory.map((categoryValue, i) => {
            return (
              <li>
                <button
                  to={""}
                  key={categoryValue.id}
                  className="category-list"
                  style={{
                    color: categoryValue.view ? "#6c801a" : "#313131",
                    borderBottom: categoryValue.view && "3px solid #6c801a",
                  }}
                  onClick={()=>{
                    for(let i in sortCategory){
                      let arr = [...sortCategory];
                      arr[i].view = false;
                      setsortCategory(arr);
                    }
                    categoryValue.view = true;
                  }}
                >
                  {categoryValue.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <GoodsList sortCategory={sortCategory} />
    </>
  );
}

export default Container;
