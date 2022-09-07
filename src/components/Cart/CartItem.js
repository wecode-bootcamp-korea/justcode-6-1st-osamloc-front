import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import "./CartItem.scss";

function CartItem({ checkedItemArrayPush, setQuantity, id, check, quantity, name, img_url, price_origin, sale, wrap, present, status }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [checkItem, setCheckItem] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [lastPrice, setLastPrice] = useState(0);

  const minus = () => {
    if (itemQuantity > 1) {
      setItemQuantity(Number(itemQuantity) - 1);
      setQuantity(id, Number(itemQuantity) - 1);
    }
  };

  const plus = () => {
    setItemQuantity(Number(itemQuantity) + 1);
    setQuantity(id, Number(itemQuantity) + 1);
  };

  const inputQuantity = (event) => {
    if (event.target.value > 0) {
      setItemQuantity(event.target.value);
      setQuantity(id, event.target.value);
    } else {
      setItemQuantity(1);
    }
  };

  const checkHandler = () => {
    setCheckItem(!checkItem);
    if (!checkItem === true) {
      checkedItemArrayPush(id, "check");
    } else if (!checkItem === false) {
      checkedItemArrayPush(id, "uncheck");
    }
  };

  const reNumber = (total) => {
    total = String(Math.ceil(total));

    if (7 > total.length && total.length > 3) {
      total = total.slice(0, -3) + "," + total.slice(-3);
    } else if (10 > total.length && total.length > 6) {
      total = total.slice(0, -6) + "," + total.slice(-6, -3) + "," + total.slice(-3);
    }

    return total;
  };

  useEffect(() => {
    setCheckItem(check);
  }, [check]);

  useEffect(() => {
    setLastPrice(reNumber(itemQuantity * price_origin * (1 - sale)));
    setTotalPrice(reNumber(itemQuantity * price_origin));
  }, [itemQuantity]);

  return (
    <>
      {status && (
        <li className="list-item flex-bewteen">
          <div className="list-item-check flex-align-center">
            <input type="checkbox" className="checkbox" checked={checkItem} onChange={checkHandler} id={`${id}listItem`} />
            <label for={`${id}listItem`}></label>
          </div>
          <div className="list-item-image flex-align-center">
            <div className="list-item-image-box">
              <img alt="" src={img_url} className="image-png" />
            </div>
            <div className="list-item-image-text">
              <p className="list-item-image-text-p1">
                <a>{name}</a>
              </p>
              <p className="list-item-image-text-p2">{wrap ? "포장가능" : "포장불가"}</p>
              <p className="list-item-image-text-p3">{present ? "· 선물 가능한 상품입니다." : "· 선물 할 수 없는 상품입니다."}</p>
            </div>
          </div>
          <div className="list-item-count-price">
            <div className="list-item-count">
              <div className="list-item-count-inner flex-bewteen">
                <button className="list-item-count-inner-button" onClick={minus}>
                  -
                </button>
                <input type="text" className="list-item-count-inner-input" value={itemQuantity} onChange={inputQuantity}></input>
                <button className="list-item-count-inner-button" onClick={plus}>
                  +
                </button>
              </div>
            </div>
            <div className="list-item-price">
              <p className="list-item-price-origin">{totalPrice}원</p>
              <p>{lastPrice}원</p>
            </div>
          </div>
          <div className="list-item-button flex-align-center">
            <Link to={`../payment/${id}?present=false`}>
              <button className="list-item-button-inner">바로구매</button>
            </Link>
          </div>
        </li>
      )}
      {!status && (
        <li className="list-item flex-bewteen">
          <div className="list-item-check flex-align-center">
            <input type="checkbox" className="checkbox" checked disabled />
            <label for={`${id}listItem`}></label>
          </div>
          <div className="list-item-image flex-align-center">
            <div className="list-item-image-box">
              <img alt="" src={img_url} className="image-png" style={{ opacity: "0.4" }} />
            </div>
            <div className="list-item-image-text">
              <p className="list-item-image-text-p1">
                <a>{name}</a>
              </p>
              <p className="list-item-image-text-p2" style={{ color: "red" }}>
                일시품절
              </p>
            </div>
          </div>
          <div className="list-item-count-price" style={{ width: "243px" }}>
            <div className="list-item-count">
              <div className="list-item-count-inner flex-bewteen"></div>
            </div>
            <div className="list-item-price"></div>
          </div>
          <div className="list-item-button flex-align-center" style={{ width: "115px" }}></div>
        </li>
      )}
    </>
  );
}

export default CartItem;
