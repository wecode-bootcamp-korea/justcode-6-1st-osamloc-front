import { TeaProducts } from "../../../../components/Products";

function GreenTeaCategory() {
  const pageInfo = {
    name: "녹차/말차",
    query: "greentea",
    background: "https://www.osulloc.com/kr/ko/static_cdj/images/catBanner/banner_green2.jpg"
  };

  return <TeaProducts pageInfo={pageInfo} />;
}

export default GreenTeaCategory;
