import { Link } from "react-router-dom";

function TabBtn() {
  return (
    <nav className="tab-btn-wrap">
      <ul className="tab-btn">
        <Link to={"/weeklybest"} className="weekly-best">위클리 베스트</Link>
        <Link to={"/weeklybest/best"} className="best">베스트</Link>
      </ul>
    </nav>
  );
}

export default TabBtn;
