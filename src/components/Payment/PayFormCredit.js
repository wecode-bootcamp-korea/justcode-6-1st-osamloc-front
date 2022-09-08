import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./PayFormCredit.scss";

function PayFormCredit({ setWayInfo }) {
  const unStyled = {
    backgroundColor: "white",
  };

  const styled = {
    border: "1px solid #6C801A",
    backgroundColor: "rgba(161,175,27,0.07)",
    color: "#6C801A",
  };

  const [credit, setCredit] = useState(unStyled);
  const [naver, setNaver] = useState(unStyled);
  const [kakao, setKakao] = useState(unStyled);
  const [payco, setPayco] = useState(unStyled);
  const [way, setWay] = useState("");

  const select = (e) => {
    setCredit(unStyled);
    setNaver(unStyled);
    setKakao(unStyled);
    setPayco(unStyled);
    if (e.currentTarget.id === "creditColor") {
      setCredit(styled);
      setWay("신용카드");
    } else if (e.currentTarget.id === "naverColor") {
      setNaver(styled);
      setWay("휴대폰결제");
    } else if (e.currentTarget.id === "kakaoColor") {
      setKakao(styled);
      setWay("카카오페이");
    } else if (e.currentTarget.id === "paycoColor") {
      setPayco(styled);
      setWay("PAYCO");
    }
  };

  const [toggle, setToggle] = useState(true);

  const customerToggle = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const slideDown = {
    background: "url(https://www.osulloc.com/kr/ko/static_cdj/images/shop/accordion_layout_btn.png) no-repeat center / cover",
  };
  const slideUp = {
    background: "url(https://www.osulloc.com/kr/ko/static_cdj/images/shop/accordion_layout_btn_on.png) no-repeat center / cover",
  };

  useEffect(() => {
    setWayInfo(way);
  }, [way]);

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
              <p>
                <span className="customer-name">{way}</span>
              </p>
              <div className="pay-info-title-right-drop" onClick={customerToggle} style={toggle ? slideUp : slideDown}></div>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="customer-info">
            <div className="customer-info-inner">
              <ul className="payment-list">
                <li className="payment-list-item " style={credit}>
                  <div id="creditColor" className="box" onClick={select}>
                    신용카드
                  </div>
                </li>
                <li className="payment-list-item " style={naver}>
                  <div id="naverColor" className="box" onClick={select}>
                    휴대폰결제
                  </div>
                </li>
                <li className="payment-list-item " style={kakao}>
                  <div id="kakaoColor" className="box" onClick={select}>
                    카카오페이
                  </div>
                </li>
                <li className="payment-list-item " style={payco}>
                  <div id="paycoColor" className="box" onClick={select}>
                    PAYCO
                  </div>
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
