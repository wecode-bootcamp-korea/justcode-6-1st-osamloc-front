import { Link } from "react-router-dom";

function TeaFoodInnerMenu() {
  const productCategory = [
    "전체상품",
    "과자/초콜릿",
    "베이커리",
    "아이스크림"
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

export default TeaFoodInnerMenu;
