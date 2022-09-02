import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";

import PayFormProductItemList from "./PayFormProductItemList";
import "./PayForm.scss";

function PayFormProduct() {
  const params = useParams();

  const [cartList, setCartList] = useState("");
  const [toggle, setToggle] = useState(true);

  const customerToggle = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const slideUp = {
    background: "url(https://www.osulloc.com/kr/ko/static_cdj/images/shop/accordion_layout_btn.png) no-repeat center / cover",
  };
  const slideDown = {
    background: "url(https://www.osulloc.com/kr/ko/static_cdj/images/shop/accordion_layout_btn_on.png) no-repeat center / cover",
  };

  useEffect(() => {
    fetch("/data/cart/cart.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        const arr = params.cartlist.split("-");
        console.log(arr);
        setCartList(
          data.cart_list.filter((el) => {
            return arr.includes(String(el.id));
          })
        );
      });
  }, [params]);

  return (
    <>
      {/* 주문상품정보 */}
      <div className="container">
        <div className="pay-info">
          <div className="pay-info-title">
            <div className="pay-info-title-left">
              <p>주문상품</p>
            </div>
            <div className="pay-info-title-right">
              <p>
                <span className="customer-name">총 {cartList.length}건</span>
              </p>
              <div className="pay-info-title-right-drop" onClick={customerToggle} style={toggle ? slideUp : slideDown}></div>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="customer-info">
            <div className="customer-info-inner">{cartList && <PayFormProductItemList cartList={cartList} />}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default PayFormProduct;
