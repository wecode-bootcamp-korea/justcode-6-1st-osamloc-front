import { Link } from "react-router-dom";

function TeaProductsInnerMenu() {
  const productCategory = [
    {
      name: "전체상품",
      link: "/products"
    },
    {
      name: "티 세트",
      link: "/products"
    },
    {
      name: "명차",
      link: "/products/greattea"
    },
    {
      name: "녹차/말차",
      link: "/products/greentea"
    },
    {
      name: "발효차/홍차",
      link: "/products/blacktea"
    },
    {
      name: "블렌디드티",
      link: "/products/blendedtea"
    },
    {
      name: "허브티",
      link: "/products/herbtea"
    },
    {
      name: "밀크티/아이스티",
      link: "/products/milktea"
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

export default TeaProductsInnerMenu;
