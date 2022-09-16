import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

function DetailInfo() {
  const location = useLocation();
  const navigate = useNavigate();

  const [sideProduct, setSideProduct] = useState(true);
  const [packaging, setPackaging] = useState([{ packaging: "포장안함", view: true }]);
  const [options, setOptions] = useState([]);
  const [optionProduct, setOptionProduct] = useState([]);
  // const [finalPrice, setFinalPrice] = useState();
  const [buyNum, setBuyNum] = useState(1);
  const [numView, setNumView] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:10010${location.pathname}`)
      // axios.get('/data/productDetail/pd.json')
      .then((res) => setOptions(res.data.data));
  }, []);

  let finalPrice = 0;
  if (options.sale) {
    finalPrice += options.sale_price * buyNum;
  } else {
    finalPrice = options.price_origin * buyNum;
  }

  const buyProduct = () => {
    axios
      .post(
        `http://localhost:10010/cart`,
        {
          userId: 1,
          productId: options.id,
          quantity: buyNum,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res));
    navigate("/cart");
  };

  const [func, setFunc] = useState([
    {
      name: "url",
      view: true,
      defaultImg: "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_url.png?quality=80",
      hoverImg: "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_url_on.png?quality=80",
    },
    {
      name: "facebook",
      view: true,
      defaultImg: "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_facebook.png?quality=80",
      hoverImg: "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_facebook_on.png?quality=80",
    },
    {
      name: "kakao",
      view: true,
      defaultImg: "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_kakao.png?quality=80",
      hoverImg: "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_kakao_on.png?quality=80",
    },
    {
      name: "like",
      view: true,
      defaultImg: "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_like.png?quality=80",
      hoverImg: "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_like_hover.png?quality=80",
    },
  ]);

  return (
    options.length !== 0 && (
      <div className="detail-info">
        <div className="location">
          <Link to={""}>{options.parentCategory}</Link>
          <span>&gt;</span>
          <Link to={""}>{options.category}</Link>
        </div>

        <p className="item-name">{options.name}</p>
        <p className="item-amount">{options.description}</p>

        {/* sns */}
        <div className="func">
          <span className="func-span">
            {func.map((funcValue, i) => {
              return (
                <a
                  href=""
                  className="func-a"
                  key={funcValue.name}
                  onMouseEnter={() => {
                    let arr = [...func];
                    arr[i].view = false;
                    setFunc(arr);
                  }}
                  onMouseLeave={() => {
                    let arr = [...func];
                    arr[i].view = true;
                    setFunc(arr);
                  }}
                >
                  {funcValue.view ? <img src={funcValue.defaultImg} alt={funcValue.name} className="func-img" /> : <img src={funcValue.hoverImg} alt={funcValue.name} className="func-img" />}
                </a>
              );
            })}
          </span>
          {!options.sale ? (
            <span className="func-price">
              <div>
                <strong>{options.price_origin.toLocaleString()}</strong>원
              </div>
            </span>
          ) : (
            <span className="func-price">
              <del>{options.price_origin.toLocaleString()}원</del>
              <div>
                <strong>{options.sale_price.toLocaleString()}</strong>원 <span>{options.sale} %</span>
              </div>
            </span>
          )}
        </div>

        {/* 추가상품 선택 */}
        <div className="buying-container">
          <div className="option-bar" onClick={() => setSideProduct(!sideProduct)}>
            {sideProduct ? (
              <>
                <div className="value-box">
                  <span>추가상품 선택</span>
                  <img src="https://www.osulloc.com/kr/ko/static_renew/images/arr_down_15x9.gif" alt="화살표" />
                </div>
              </>
            ) : (
              <>
                <div className="value-box">
                  <span>추가상품 선택</span>
                  <img src="https://www.osulloc.com/kr/ko/static_renew/images/arr_down_15x9.gif" alt="화살표" style={{ transform: "rotate(180deg)" }} />
                </div>
                <ul className="options">
                  {options.options.map((option, i) => {
                    return (
                      <li
                        className="option-list"
                        key={option.name}
                        onClick={() => {
                          if (option.view === false) {
                            let arr = [...optionProduct];
                            option.view = true;
                            option.eaView = false;
                            option.num = 1;
                            arr.push(option);
                            setOptionProduct(arr);
                          } else {
                            alert("동일한 추가상품이 존재합니다.");
                          }
                        }}
                      >
                        <div className="item">{option.name}</div>
                        <div className="price">
                          <strong>{option.price_origin.toLocaleString()}</strong>원
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>

          {/* 상품 갯수 */}
          <div className="selected-item">
            <div className="item-name">
              구매수량
              <div className="modify-num">
                <button
                  className="minus"
                  onClick={() => {
                    if (buyNum === 1) {
                      setNumView(true);
                    } else {
                      setNumView(false);
                      setBuyNum(buyNum - 1);
                    }
                  }}
                  disabled={numView}
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/2801/2801932.png" alt="" />
                </button>
                <span className="num">{buyNum}</span>
                <button
                  className="plus"
                  onClick={() => {
                    setBuyNum(buyNum + 1);
                    setNumView(false);
                  }}
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/748/748113.png" alt="" />
                </button>
              </div>
            </div>

            {/* 상품포장 */}
            {packaging[0].view ? (
              <div
                className="tit"
                onClick={() => {
                  let arr = [...packaging];
                  arr[0].view = false;
                  setPackaging(arr);
                }}
              >
                {packaging[0].packaging}
                <img src="https://www.osulloc.com/kr/ko/static_renew/images/arr_down_15x9.gif" alt="화살표" />
              </div>
            ) : (
              <div className="position">
                <div
                  className="tit"
                  onClick={() => {
                    let arr = [...packaging];
                    arr[0].view = true;
                    setPackaging(arr);
                  }}
                >
                  {packaging[0].packaging}
                  <img src="https://www.osulloc.com/kr/ko/static_renew/images/arr_down_15x9.gif" alt="화살표" style={{ transform: "rotate(180deg)" }} />
                </div>
                <ul className="active">
                  <li
                    onClick={() => {
                      let arr = [...packaging];
                      arr[0].view = true;
                      arr[0].packaging = "포장안함";
                      setPackaging(arr);
                    }}
                  >
                    포장안함
                  </li>
                  <li
                    onClick={() => {
                      let arr = [...packaging];
                      arr[0].view = true;
                      arr[0].packaging = "포장함";
                      setPackaging(arr);
                    }}
                  >
                    포장함
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* 추가상품 선택시 나오는 목록 */}
          {optionProduct.map((product, i) => {
            return (
              <div className="select-item-list" key={product.name}>
                <div className="item-name">{product.name}</div>
                <div className="sum-price">
                  <div className="modify-num">
                    <button
                      className="minus"
                      onClick={() => {
                        if (product.num === 1) {
                          let arr = [...optionProduct];
                          arr[i].eaView = true;
                          setNumView(arr);
                        } else {
                          let arr = [...optionProduct];
                          arr[i].eaView = false;
                          arr[i].num -= 1;
                          setNumView(arr);
                        }
                      }}
                      disabled={product.eaView}
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/2801/2801932.png" alt="" />
                    </button>
                    <span className="num">{product.num}</span>
                    <button
                      className="plus"
                      onClick={() => {
                        let arr = [...optionProduct];
                        arr[i].eaView = false;
                        arr[i].num += 1;
                        setNumView(arr);
                      }}
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/748/748113.png" alt="" />
                    </button>
                  </div>
                  {(product.price_origin * product.num).toLocaleString()}원
                  <button
                    className="del"
                    onClick={() => {
                      let arr = [...optionProduct];
                      arr.splice(i, 1);
                      setOptionProduct(arr);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="label-zone"></div> */}

        {finalPrice >= 50000 && <div className="free-dil">무료배송</div>}
        <div className="value-amount">
          <div className="final-price">
            상품금액 합계
            <span className="total-price">
              <strong>{finalPrice.toLocaleString()}</strong> 원
            </span>
          </div>
        </div>

        <div className="buy-btn">
          <span className="gift">선물하기</span>
          <span className="buy">
            <div to={""} className="cart" onClick={buyProduct}>
              장바구니
            </div>
            <div to={""} className="buy-now">
              바로구매
            </div>
          </span>
        </div>
        {/* <div className="item-detail-payment">

      </div> */}
      </div>
    )
  );
}

export default DetailInfo;
