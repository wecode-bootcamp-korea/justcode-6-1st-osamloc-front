import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./Cart.scss";

function Cart() {
  return (
    <>
      <div className="wrap">
        {/* <header /> - fixed*/}

        <main className="page-cart page-font">
          <section className="page-top-section">
            <div className="page-top-section-inner">
              <h2 className="page-title">장바구니</h2>
            </div>
          </section>

          <form className="cart-form">
            <section className="cart-form-section">
              <div className="cart-form-section-inner">
                <div className="cart-items">
                  <div className="cart-check">
                    <div className="cart-check-left">
                      <div className="cart-check-left-inner">
                        <label>
                          <input type="checkbox" />
                          전체선택
                        </label>
                      </div>
                    </div>
                    <div className="cart-check-right">
                      <div className="cart-check-right-inner">
                        | <button>선택 삭제</button>
                      </div>
                    </div>
                  </div>

                  <ul className="cart-items-list">
                    <li className="list-item">
                      <div className="list-item-check">
                        <input type="checkbox" />
                      </div>
                      <div className="list-item-image">
                        <div className="list-item-image-box">
                          <img alt="" src="" />
                          이미지
                        </div>
                        <div className="list-item-image-text">
                          <p>프리미엄 티 컬렉션</p>
                          <p>포장가능</p>
                          <p>선물 가능한 상품입니다.</p>
                        </div>
                      </div>
                      <div className="list-item-count-price">
                        <div className="list-item-count">
                          <div className="list-item-count-inner">
                            <button>-</button>
                            <input type="text"></input>
                            <button>+</button>
                          </div>
                        </div>
                        <div className="list-item-price">
                          <p>28000</p>
                          <p>21000</p>
                        </div>
                      </div>
                      <div className="list-item-button">
                        <button>바로구매</button>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="cart-order-button">
                  <div>
                    <button>선택상품 주문</button>
                    <button>전체상품 주문하기</button>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div>
                <ul>
                  <li>
                    <p></p>
                    <p></p>
                  </li>
                  <li>
                    <p></p>
                    <p></p>
                  </li>
                  <li>
                    <p></p>
                    <p></p>
                  </li>
                  <li>
                    <p></p>
                    <p></p>
                  </li>
                  <li>
                    <p></p>
                    <p></p>
                  </li>
                </ul>
              </div>
              <div>
                <p></p>
                <p></p>
              </div>
              <div>
                <button>주문하기</button>
              </div>
            </section>
          </form>
        </main>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Cart;
