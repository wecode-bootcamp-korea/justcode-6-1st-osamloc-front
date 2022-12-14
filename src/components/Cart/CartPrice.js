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
              <p>?????? ??????</p>
              <p>+ {price}???</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>?????? ??????</p>
              <p style={{ color: "red" }}>- {sale}???</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>?????????</p>
              <p>+ 0???</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>?????? ?????????</p>
              <p>+ 0???</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>?????????</p>
              <p>+ {delivery}???</p>
            </li>
          </ul>

          <div className="price-info-li-total flex-bewteen">
            <p>?????? ?????? ??????</p>
            <p>{totalPrice}???</p>
          </div>
          <div className="price-info-button">
            {checkedArray.length !== 0 && (
              <button className="price-info-button-inner" onClick={setStatus}>
                {totalPrice}??? ????????????
              </button>
            )}
            {checkedArray.length === 0 && (
              <button className="price-info-button-inner" onClick={modalUpBtn}>
                {totalPrice}??? ????????????
              </button>
            )}
            {modalup && <Modal modalUpBtn={modalUpBtn} state={"????????? ????????? ????????????."} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPrice;
