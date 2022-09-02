import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { CartItemList, CartPrice } from "./index";
import "./CartForm.scss";

function CartForm() {
  return (
    <>
      <form className="cart-form flex-bewteen">
        <section className="cart-form-section">
          <div className="cart-form-section-inner">
            <div className="cart-items">
              <div className="cart-check flex-bewteen">
                <div className="cart-check-left flex-align-center">
                  <div className="cart-check-left-inner">
                    <label className="flex-align-center">
                      <input type="checkbox" className="checkbox" />
                      <p>전체선택</p>
                    </label>
                  </div>
                </div>
                <div className="cart-check-right flex-align-center">
                  <div className="cart-check-right-inner">
                    <button className="cart-check-right-button">
                      | 선택 삭제
                    </button>
                  </div>
                </div>
              </div>

              <ul className="cart-items-list">
                <CartItemList />
              </ul>
            </div>

            <div className="cart-order-button flex-align-center">
              <div>
                <button className="cart-order-button-select">
                  선택상품 주문
                </button>
                <button className="cart-order-button-select">
                  선택상품 선물하기
                </button>
              </div>
              <div>
                <button className="cart-order-button-all">
                  전체상품 주문하기
                </button>
              </div>
            </div>
            <p className="form-attention">
              <img src="" alt="" />
              장바구니에 보관된 상품은 3개월 후에 삭제 됩니다.
            </p>
          </div>
        </section>

        <CartPrice />
      </form>
    </>
  );
}

export default CartForm;
