import { TeaProducts } from "../../../../components/Products";

function BlackTeaCategory() {
  const pageInfo = {
    name: "발효차/홍차",
    query: "blacktea",
    background: "https://www.osulloc.com/kr/ko/static_cdj/images/catBanner/banner_red2.jpg"
  };

  return <TeaProducts pageInfo={pageInfo} />;
}

export default BlackTeaCategory;
