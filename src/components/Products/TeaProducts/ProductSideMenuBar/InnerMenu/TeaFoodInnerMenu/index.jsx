import { Link } from "react-router-dom";

function TeaFoodInnerMenu() {
  const productCategory = [
    {
      name: "전체상품",
      link: ""
    },
    {
      name: "과자/초콜릿",
      link: ""
    },
    {
      name: "베이커리",
      link: ""
    },
    {
      name: "아이스크림",
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

export default TeaFoodInnerMenu;
