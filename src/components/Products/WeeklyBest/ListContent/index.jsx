import "./index.scss";

import Goods from "./Goods";

function ListContent(props) {
  const { products } = props;

  return (
    <div className="list-content">
      {props.children}
      <div className="goods-container">
        {products.map((product, i)=>{
          return (
            <Goods key={product.name} num={i + 1} product={product} />
          )
        })}
      </div>
    </div>
  );
}

export default ListContent;
