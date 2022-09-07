import { TeaProducts } from "../../components/Products";

function TeaSet() {
  const pageInfo = {
    name: "티 세트",
    query: "tea-set",
    background: "https://www.osulloc.com/kr/ko/static_cdj/images/catBanner/banner_teaprod.jpg"
  };

  return <TeaProducts pageInfo={pageInfo} />;
}

export default TeaSet;
