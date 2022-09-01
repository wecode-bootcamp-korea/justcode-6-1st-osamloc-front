import { Link } from "react-router-dom";

function TeaProductsInnerMenu() {
  const productCategory = [
    "전체상품",
    "티 세트",
    "명차",
    "녹차/말차",
    "발효차/홍차",
    "블렌디드티",
    "허브티",
    "밀크티/아이스티",
  ];

  return (
    <div className="sub-menu">
      <ul>
        {productCategory.map((name, i) => {
          return (
            <li>
              <Link to={""}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeaProductsInnerMenu;
