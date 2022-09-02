import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./PayForm.scss";

function PayFormProduct() {
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
                <span className="customer-name">총 1건</span>
              </p>
              <div className="pay-info-title-right-drop" onClick={customerToggle} style={toggle ? slideUp : slideDown}></div>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="customer-info">
            <div className="customer-info-inner">
              <li className="list-item flex-bewteen padding-zero">
                <div className="list-item-image flex-align-center">
                  <div className="list-item-image-box">
                    <img alt="" src="./image/cart/bottle.png" className="image-png" />
                  </div>
                  <div className="list-item-image-text">
                    <p className="list-item-image-text-p1">
                      <a>프리미엄 티 컬렉션</a>
                    </p>
                    <p className="list-item-image-text-p2">유료포장 선택안함</p>
                  </div>
                </div>
                <div className="list-item-button flex-align-center">
                  <div className="list-item-price">
                    <p>21,000원 / 1개</p>
                  </div>
                </div>
              </li>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PayFormProduct;
