import { Link } from "react-router-dom";

function TopSortBar() {
  const category = ["판매순", "신상품순", "높은가격순", "낮은가격순"];

  return (
    <div className="top-sort-bar">
      <p className="tea">티 제품</p>
      <ul className="opt">
        <li>
          <Link to={""} className="first-category-list">
            리뷰많은순
          </Link>
        </li>
        {category.map((category, i) => {
          return (
            <li>
              <Link to={""} key={i} className="category-list">
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TopSortBar;
