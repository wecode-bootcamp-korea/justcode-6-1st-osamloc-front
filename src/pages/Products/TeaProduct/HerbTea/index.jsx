import { TeaProducts } from "../../../../components/Products";

function HerbTeaCategory() {
  const pageInfo = {
    name: "허브티",
    query: "herbTea",
    background: "https://www.osulloc.com/kr/ko/static_cdj/images/catBanner/banner_hub.jpg"
  };

  return <TeaProducts pageInfo={pageInfo} />;
}

export default HerbTeaCategory;
