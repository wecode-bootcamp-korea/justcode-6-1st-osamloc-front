import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./PayPrice.scss";

function PayPrice({ cartList }) {
  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp10300638");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      name: "아임포트 결제 데이터 분석", // 주문명
      amount: 1000, // 결제금액
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  const [price, setPrice] = useState(0);
  const [sale, setSale] = useState(0);
  const [wrap, setWrap] = useState(0);
  const [delivery, setDelivery] = useState(price > 30000 ? 2500 : 0);
  const [totalPrice, setTotalPrice] = useState(0);

  let usePrice = 0;
  let useSale = 0;
  let useWrap = 0;

  const reNumber = (total) => {
    total = String(total);

    if (7 > total.length && total.length > 3) {
      total = total.slice(0, -3) + "," + total.slice(-3);
    } else if (10 > total.length && total.length > 6) {
      total = total.slice(0, -6) + "," + total.slice(-6, -3) + "," + total.slice(-3);
    }

    return total;
  };

  useEffect(() => {
    if (cartList.length > 0) {
      cartList.forEach((element) => {
        usePrice += element.detail.price_origin * element.quantity;
        useSale += element.detail.price_origin * element.quantity * element.detail.sale;
        useWrap += element.detail.wrap && 2000;
      });
      setPrice(reNumber(usePrice + useWrap));
      setSale(reNumber(useSale));
      setWrap(reNumber(useWrap));
      setTotalPrice(reNumber(usePrice - useSale + useWrap + delivery));
    }
  }, [cartList]);

  return (
    <>
      {/* 결제 금액 정보 */}
      <section className="pay-price-info">
        <div className="price-info-inner">
          <ul className="price-info-ul">
            <li className="price-info-li flex-bewteen">
              <p>총 상품 금액</p>
              <p>+ {price}원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>총 할인 혜택</p>
              <p style={{ color: "red" }}>- {sale}원</p>
            </li>

            <li className="price-info-li flex-bewteen">
              <p>배송비</p>
              <p>+ {delivery}원</p>
            </li>
          </ul>

          <div className="price-info-li-total flex-bewteen">
            <p>최종 결제 금액</p>
            <p>{totalPrice}원</p>
          </div>
          <div className="price-info-button">
            <button className="price-info-button-inner" onClick={onClickPayment}>
              결제하기
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PayPrice;
