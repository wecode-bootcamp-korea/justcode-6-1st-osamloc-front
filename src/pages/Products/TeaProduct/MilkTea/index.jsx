import { TeaProducts } from "../../../../components/Products";

function MilkTea() {
  const pageInfo = {
    name: "밀크티/아이스티",
    query: "MilkTea",
    background: "https://www.osulloc.com/kr/ko/static_cdj/images/catBanner/banner_hub.jpg"
  };

  return <TeaProducts pageInfo={pageInfo} />;
}

export default MilkTea;
