import { Link } from "react-router-dom";

function LifeStyleInnerMenu() {
  const productCategory = [
    {
      name: "전체상품",
      link: ""
    },
    {
      name: "건강기능식품",
      link: ""
    },
    {
      name: "스킨케어",
      link: ""
    }
  ];

  return (
    <div className="sub-menu">
      <ul>
        {productCategory.map((productCategory, i) => {
          return (
            <li key={productCategory.name}>
              <Link to={productCategory.link}>{productCategory.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LifeStyleInnerMenu;
