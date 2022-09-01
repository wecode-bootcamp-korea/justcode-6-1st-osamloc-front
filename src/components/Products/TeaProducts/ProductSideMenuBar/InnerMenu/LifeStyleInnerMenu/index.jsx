import { Link } from "react-router-dom";

function LifeStyleInnerMenu() {
  const productCategory = [
    "전체상품",
    "건강기능식품",
    "스킨케어"
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

export default LifeStyleInnerMenu;
