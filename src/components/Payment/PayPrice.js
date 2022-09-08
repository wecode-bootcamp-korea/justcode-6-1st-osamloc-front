import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

import { Modal } from "../Cart/index";
import "./PayPrice.scss";

function PayPrice({ cartList, agree, name, phone, addressPost, addressMain, addressDetail, sendName, sendPhone, sendEmail, present, way }) {
  const navigate = useNavigate();

  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp10300638");

    let pg = "";

    if (way === "신용카드") {
      pg = "html5_inicis";
    } else if (way === "휴대폰결제") {
      pg = "danal";
    } else if (way === "카카오페이") {
      pg = "kakaopay";
    } else if (way === "PAYCO") {
      pg = "payco";
    }

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: pg, // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 100, // 결제금액
      name: cartList[0].name, // 주문명
      buyer_name: sendName, // 구매자 이름
      buyer_tel: sendPhone, // 구매자 전화번호
      buyer_email: sendEmail, // 구매자 이메일
      buyer_addr: addressMain, // 구매자 주소
      buyer_postcode: addressPost, // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, error_msg, merchant_uid, paid_amount, status, name } = response;

    if (success) {
      setSendData(true);
      navigate("../../");
    } else {
      alert(`결제 실패하였습니다.`);
    }
  }

  const [price, setPrice] = useState(0);
  const [sale, setSale] = useState(0);
  const [wrap, setWrap] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [modalup, setModalup] = useState(false);

  const [sendApprove, setSendApprove] = useState(false);

  const [errorMessage, setErrorMessage] = useState("배송지 정보를 확인해주세요");

  const [sendData, setSendData] = useState(false);

  let usePrice = 0;
  let useSale = 0;
  let useWrap = 0;
  let useDelivery = 0;

  const reNumber = (total) => {
    total = String(total);

    if (7 > total.length && total.length > 3) {
      total = total.slice(0, -3) + "," + total.slice(-3);
    } else if (10 > total.length && total.length > 6) {
      total = total.slice(0, -6) + "," + total.slice(-6, -3) + "," + total.slice(-3);
    }

    return total;
  };

  const modalUpBtn = () => {
    setModalup(!modalup);
  };

  useEffect(() => {
    if (cartList.length > 0) {
      cartList.forEach((element) => {
        usePrice += Number(element.priceOrigin) * 1000 * element.quantity;
        if (element.salePrice) {
          useSale += usePrice - Number(element.salePrice) * 1000 * element.quantity;
        } else {
          useSale = 0;
        }
        // useWrap += element.detail.wrap && 2000;
        if (usePrice >= 30000) {
          useDelivery = 0;
        } else if (usePrice < 30000 && usePrice > 0) {
          useDelivery = 3000;
        }
      });
      setPrice(reNumber(usePrice));
      setSale(reNumber(useSale));
      // setWrap(reNumber(useWrap));
      if (useSale === 0) {
        setTotalPrice(reNumber(usePrice + useDelivery));
      } else {
        setTotalPrice(reNumber(useSale + useDelivery));
      }
      setDelivery(reNumber(useDelivery));
    }
  }, [cartList]);

  useEffect(() => {
    setSendApprove(true);
    const indexPhone = phone.indexOf("-");
    const indexSendPhone = sendPhone.indexOf("-");

    const phoneAfter = phone.slice(indexPhone + 1).replace("-", "");
    const sendPhoneAfter = sendPhone.slice(indexSendPhone + 1).replace("-", "");

    const indexEmail = sendEmail.indexOf("@");

    const emailBefore = sendEmail.slice(0, indexEmail);

    if (present === "false") {
      if (!sendName || sendPhoneAfter.length !== 8 || !emailBefore) {
        setSendApprove(false);
        setErrorMessage("고객 정보를 확인해주세요");
      } else if (!name || phoneAfter.length !== 8 || !addressPost || !addressMain || !addressDetail) {
        setSendApprove(false);
        setErrorMessage("배송지 정보를 확인해주세요");
      } else if (!agree) {
        setSendApprove(false);
        setErrorMessage("아래 구매 진행에 동의해주세요.");
      }
    } else {
      if (!sendName || sendPhoneAfter.length !== 8 || !emailBefore) {
        setSendApprove(false);
        setErrorMessage("고객 정보를 확인해주세요");
      } else if (!name || phoneAfter.length !== 8) {
        setSendApprove(false);
        setErrorMessage("배송지 정보를 확인해주세요");
      } else if (!agree) {
        setSendApprove(false);
        setErrorMessage("아래 구매 진행에 동의해주세요.");
      }
    }
  }, [name, phone, addressPost, addressMain, addressDetail, sendName, sendPhone, sendEmail, agree]);

  useEffect(() => {
    if (sendData === true) {
      cartList.forEach((el, index) => {
        const body = {
          userId: el.userId,
          status: 2,
          cartId: el.cartId,
        };

        fetch("http://localhost:10010/cart/order", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(body),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setSendData(false);
          });
      });
    }
  }, [sendData]);

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
            {sendApprove && (
              <button className="price-info-button-inner" onClick={onClickPayment}>
                결제하기
              </button>
            )}
            {!sendApprove && (
              <button className="price-info-button-inner" onClick={modalUpBtn}>
                결제하기
              </button>
            )}
            {modalup && <Modal modalUpBtn={modalUpBtn} state={errorMessage} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default PayPrice;
