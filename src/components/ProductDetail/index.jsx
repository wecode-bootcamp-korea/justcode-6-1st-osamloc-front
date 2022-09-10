import DetailInfo from "./DetailInfo";
import DetailLeft from "./Left";
import DetailBottom from "./Bottom";

function ProductDetail() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: "50px 225px 0px 225px", width: "1300px" }}>
        <DetailLeft />
        <DetailInfo />
      </div>
      <DetailBottom />
    </>
  );
}

export default ProductDetail;
