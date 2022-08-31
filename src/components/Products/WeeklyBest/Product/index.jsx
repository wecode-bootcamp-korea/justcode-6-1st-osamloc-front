import "./index.scss";

import Goods from "./Goods";

function ListContent(props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="list-content">
      {props.children}
      <div className="goods-container">
        {arr.map((el, i)=>{
          return (
            <Goods key={i} order={el} />
          )
        })}
      </div>
    </div>
  );
}

export default ListContent;
