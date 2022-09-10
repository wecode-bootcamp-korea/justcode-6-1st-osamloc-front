import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function DetailInfo() {
  const [sideProduct, setSideProduct] = useState(true);
  const [packaging, setPackaging] = useState([{ packaging: "포장안함", view: true }]);
  const [optionProduct, setOptionProduct] = useState([]);

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

  const options = [
    {
      name: "녹차 밀크 스프레드 세트",
      view: false,
      eaView: false,
      num: 1,
      price: 20000,
    },
    {
      name: "오 땡큐 티 박스",
      view: false,
      eaView: false,
      num: 1,
      price: 30000,
    },
    {
      name: "신 오브 제주",
      view: false,
      eaView: false,
      num: 1,
      price: 40000,
    },
    {
      name: "프리미엄 티 컬렉션",
      view: false,
      eaView: false,
      num: 1,
      price: 50000,
    },
    {
      name: "메모리 인 제주 20입",
      view: false,
      eaView: false,
      num: 1,
      price: 60000,
    },
    {
      name: "시크릭 티 스토리",
      view: false,
      eaView: false,
      num: 1,
      price: 70000,
    },
    {
      name: "마스터 블렌드",
      view: false,
      eaView: false,
      num: 1,
      price: 80000,
    },
    {
      name: "메모리 인 제주 40입",
      view: false,
      eaView: false,
      num: 1,
      price: 90000,
    },
    {
      name: "프리미엄 티 컬렉션 90입",
      view: false,
      eaView: false,
      num: 1,
      price: 100000,
    },
  ];

  const [buyNum, setBuyNum] = useState(1);
  const [numView, setNumView] = useState(false);

  console.log(optionProduct);

  return (
    <div className="detail-info">
      <div className="location">
        <Link to={""}>티제품</Link>
        <span>&gt;</span>
        <Link to={""}>티 세트</Link>
      </div>

      <p className="item-name">러블리 티 박스</p>
      <p className="item-amount">즐겁고 행복한 티타임을 선사하는 달콤하고 향긋한 오설록만의 특별한 블렌디드 티 선물 세트</p>

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
        <span className="func-price">
          <strong>20,000</strong>원
        </span>
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
                {options.map((option) => {
                  return (
                    <li
                      className="option-list"
                      key={option.name}
                      onClick={() => {
                        if (option.view === false) {
                          let arr = [...optionProduct];
                          option.view = true;
                          arr.push(option);
                          setOptionProduct(arr);
                        }
                      }}
                    >
                      <div className="item">{option.name}</div>
                      <div className="price">
                        <strong>{option.price.toLocaleString()}</strong>원
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
        {optionProduct.map((product) => {
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
                  <span className="num">{buyNum}</span>
                  <button
                    className="plus"
                    onClick={() => {
                      let arr = [...optionProduct];
                      arr[i].eaView = false;
                      arr[i].num -= 1;
                      setNumView(arr);
                    }}
                  >
                    <img src="https://cdn-icons-png.flaticon.com/512/748/748113.png" alt="" />
                  </button>
                </div>
                {product.price.toLocaleString()}원
              </div>
            </div>
          );
        })}
      </div>

      <div className="label-zone"></div>

      <div className="value-amount"></div>

      <div className="item-detail-payment"></div>
    </div>
  );
}

export default DetailInfo;
