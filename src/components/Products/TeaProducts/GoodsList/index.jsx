import Goods from "./Goods";


import "./index.scss";

function GoodsList() {

  const arr = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="goods-list">
      {arr.map((el, i)=>{
        return (
          <Goods key={i}/>
        )
      })}

    </div>
  );
}

export default GoodsList;
