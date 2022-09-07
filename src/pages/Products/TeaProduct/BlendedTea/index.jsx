import { TeaProducts } from "../../../../components/Products";

function BlendedTeaCategory() {
  const pageInfo = {
    name: "블렌디드티",
    query: "blendedtea",
    background: "https://www.osulloc.com/kr/ko/static_cdj/images/catBanner/banner_blend.jpg"
  };

  return <TeaProducts pageInfo={pageInfo} />;
}

export default BlendedTeaCategory;
