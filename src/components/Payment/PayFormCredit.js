import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./PayFormCredit.scss";

function PayFormCredit() {
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
    margin: "0",
  };
  const slideDown = {
    background: "url(https://www.osulloc.com/kr/ko/static_cdj/images/shop/accordion_layout_btn_on.png) no-repeat center / cover",
    margin: "0",
  };

  return (
    <>
      {/* 결제수단정보 */}
      <div className="container">
        <div className="pay-info">
          <div className="pay-info-title">
            <div className="pay-info-title-left">
              <p>결제 수단 선택</p>
            </div>
            <div className="pay-info-title-right">
              <div className="pay-info-title-right-drop" onClick={customerToggle} style={toggle ? slideUp : slideDown}></div>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="customer-info">
            <div className="customer-info-inner">
              <ul className="payment-list">
                <li className="payment-list-item ">
                  <div className="box">신용카드</div>
                </li>
                <li className="payment-list-item ">
                  <div className="box">네이버페이</div>
                </li>
                <li className="payment-list-item ">
                  <div className="box">카카오페이</div>
                </li>
                <li className="payment-list-item ">
                  <div className="box">PAYCO</div>
                </li>
              </ul>
              <div className="payment-tool-check">
                <label className="flex-align-center font14">
                  <input type="checkbox" id="creditCheck" className="checkbox" />
                  <label for="creditCheck"></label>
                  선택한 결제수단을 다음에도 사용
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PayFormCredit;
