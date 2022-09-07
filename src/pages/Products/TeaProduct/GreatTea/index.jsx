import { TeaProducts } from "../../../../components/Products";

function GreatTeaCategory() {
  const pageInfo = {
    name: "명차",
    query: "greattea",
    background: "https://www.osulloc.com/kr/ko/static_cdj/images/catBanner/banner_meung2.jpg"
  };

  return <TeaProducts pageInfo={pageInfo} />;
}

export default GreatTeaCategory;
