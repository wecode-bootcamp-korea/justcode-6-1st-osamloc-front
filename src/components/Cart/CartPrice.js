import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./CartPrice.scss";

function CartPrice() {
  return (
    <>
      <section className="price-info">
        <div className="price-info-inner">
          <ul className="price-info-ul">
            <li className="price-info-li flex-bewteen">
              <p>상품 금액</p>
              <p>+16000원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>상품 할인</p>
              <p>-0원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>포장비</p>
              <p>+0원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>부가 쇼핑백</p>
              <p>+0원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>배송비</p>
              <p>+2500원</p>
            </li>
          </ul>

          <div className="price-info-li-total flex-bewteen">
            <p>결제 예상 금액</p>
            <p>15000원</p>
          </div>
          <div className="price-info-button">
            <button className="price-info-button-inner">
              15000원 주문하기
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPrice;
