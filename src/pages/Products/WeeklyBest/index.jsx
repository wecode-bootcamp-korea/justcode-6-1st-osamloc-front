import "./index.scss"

import { ListContent, TabBtn } from "./components";


function WeeklyBest() {
  return (
    <div className="weekly-best">
      <div className="product-header">
        <h2 className="product-title">위클리 베스트</h2>
      </div>
      {/* 메뉴 탭 */}
      <TabBtn />
      <div className="container">
        <ListContent>
          <div className="date-filter">
            22년 8월 5째주
            <button className="filter">판매순</button>
          </div>
        </ListContent>
      </div>
    </div>
  );
}

export default WeeklyBest;
