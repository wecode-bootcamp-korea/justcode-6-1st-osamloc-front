import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./Payment.scss";

function Payment(){
    
    return (
        <>
          <div className="wrap">
            {/* <header /> - fixed*/}
    
            <main className="page-cart">
              <section className="page-top-section">
                <div className="page-top-section-inner">
                  <h1 className="page-title">결제하기</h1>
                </div>
              </section>
    
              <form className="cart-form">
                <section className="cart-form-section">
                  <div className="cart-form-section-inner">
                    <div className="cart-items">
                      
    
                      <ul className="cart-items-list">
                        <li className="list-item">
                          <div className="list-item-check">
                            <input type="checkbox" className="checkbox"/>
                          </div>
                          <div className="list-item-image">
                            <div className="list-item-image-box">
                              <img
                                alt=""
                                src="./image/bottle.png"
                                className="image-png"
                              />
                            </div>
                            <div className="list-item-image-text">
                              <p className="list-item-image-text-p1">
                                <a>프리미엄 티 컬렉션</a>
                              </p>
                              <p className="list-item-image-text-p2">포장가능</p>
                              <p className="list-item-image-text-p3">
                              · 선물 가능한 상품입니다.
                              </p>
                            </div>
                          </div>
                          <div className="list-item-count-price">
                            <div className="list-item-count">
                              <div className="list-item-count-inner">
                                <button className="list-item-count-inner-button1">-</button>
                                <input type="text" className="list-item-count-inner-input" value="1"></input>
                                <button className="list-item-count-inner-button2">+</button>
                              </div>
                            </div>
                            <div className="list-item-price">
                              <p>21,000원</p>
                            </div>
                          </div>
                          <div className="list-item-button">
                            <button className="list-item-button-inner">바로구매</button>
                          </div>
                        </li>
                      </ul>
                    </div>
    
                    <div className="cart-order-button">
                      <div>
                        <button className="cart-order-button-select">선택상품 주문</button>
                        <button className="cart-order-button-present">선택상품 선물하기</button>
                      </div>
                      <div>
                        <button className="cart-order-button-all">전체상품 주문하기</button>
                      </div>
                    </div>
                    <p class="form-attention"><img src="" alt="" />장바구니에 보관된 상품은 3개월 후에 삭제 됩니다.</p>
                  </div>
                </section>
    
                <section className="price-info">
                        <div className="price-info-inner">
                          <ul className="price-info-ul">
                            <li className="price-info-li">
                              <p>상품 금액</p>
                              <p>+16000원</p>
                            </li>
                            <li className="price-info-li">
                              <p>상품 할인</p>
                              <p>-0원</p>
                            </li>
                            <li className="price-info-li">
                              <p>포장비</p>
                              <p>+0원</p>
                            </li>
                            <li className="price-info-li">
                              <p>부가 쇼핑백</p>
                              <p>+0원</p>
                            </li>
                            <li className="price-info-li">
                              <p>배송비</p>
                              <p>+2500원</p>
                            </li>
                          </ul>
                        
                        <div className="price-info-li-total">
                          <p>결제 예상 금액</p>
                          <p>15000원</p>
                        </div>
                        <div className="price-info-button">
                          <button className="price-info-button-inner">15000원 주문하기</button>
                        </div>
                        </div>
                      </section>
                
              </form>
            </main>
    
            {/* <Footer /> */}
          </div>
        </>
      );
}

export default Payment;