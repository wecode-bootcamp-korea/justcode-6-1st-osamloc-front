import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import { Modal } from "./index";
import "./CartPrice.scss";

function CartPrice({ cartList, checkedArray }) {
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const [sale, setSale] = useState(0);
  const [wrap, setWrap] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [modalup, setModalup] = useState(false);

  const [effectStatus, setEffectStatus] = useState(false);

  let usePrice = 0;
  let useSale = 0;
  // let useWrap = 0;
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

  const setStatus = () => {
    setEffectStatus(true);
  };

  useEffect(() => {
    if (cartList.length > 0) {
      cartList.forEach((element) => {
        if (checkedArray.includes(element.cartId)) {
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
  }, [cartList, checkedArray]);

  useEffect(() => {
    if (effectStatus === true) {
      cartList.forEach((el, index) => {
        const body = {
          cartId: el.cartId,
          newQuantity: el.quantity,
        };

        console.log(body);

        fetch("http://localhost:10010/cart", {
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
            setEffectStatus(false);
            navigate(`../payment/${checkedArray.join("-")}?present=false`);
          });
      });
    }
  }, [effectStatus]);

  return (
    <>
      <section className="cart-price-info">
        <div className="price-info-inner">
          <ul className="price-info-ul">
            <li className="price-info-li flex-bewteen">
              <p>상품 금액</p>
              <p>+ {price}원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>상품 할인</p>
              <p style={{ color: "red" }}>- {sale}원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>포장비</p>
              <p>+ 0원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>부가 쇼핑백</p>
              <p>+ 0원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>배송비</p>
              <p>+ {delivery}원</p>
            </li>
          </ul>

          <div className="price-info-li-total flex-bewteen">
            <p>결제 예상 금액</p>
            <p>{totalPrice}원</p>
          </div>
          <div className="price-info-button">
            {checkedArray.length !== 0 && (
              <button className="price-info-button-inner" onClick={setStatus}>
                {totalPrice}원 주문하기
              </button>
            )}
            {checkedArray.length === 0 && (
              <button className="price-info-button-inner" onClick={modalUpBtn}>
                {totalPrice}원 주문하기
              </button>
            )}
            {modalup && <Modal modalUpBtn={modalUpBtn} state={"선택한 상품이 없습니다."} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPrice;
