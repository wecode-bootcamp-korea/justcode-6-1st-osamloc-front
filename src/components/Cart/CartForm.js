import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import { CartItemList, CartItem, CartPrice } from "./index";
import "./CartForm.scss";

function CartForm() {
  const [cartList, setCartList] = useState("");
  const [checkedArray, setCheckedArray] = useState([]);

  const [checkedAllItems, setCheckedAllItems] = useState(true);

  const checkHandler = () => {
    setCheckedAllItems(!checkedAllItems);
    if (!checkedAllItems === true && cartList) {
      setCheckedArray(
        cartList.map((el) => {
          return el.id;
        })
      );
    } else if (!checkedAllItems === false && cartList) {
      setCheckedArray([]);
    }
  };

  const checkedItemArrayPush = (id, status) => {
    if (!checkedArray.includes(id) && status === "check") {
      setCheckedArray([...checkedArray, id]);
    } else if (checkedArray.includes(id) && status === "uncheck") {
      setCheckedArray(
        checkedArray.filter((el) => {
          return el !== id;
        })
      );
    }
  };

  const setQuantity = (id, quantity) => {
    if (cartList) {
      setCartList(
        cartList.map((element) => {
          element.id === id && (element.quantity = quantity);
          return element;
        })
      );
    }
  };

  const deleteAll = () => {
    setCartList("");
  };

  useEffect(() => {
    fetch("/data/cart/cart.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setCartList(data.cart_list);
        setCheckedArray(
          data.cart_list.map((el) => {
            return el.id;
          })
        );
      });
  }, []);

  return (
    <>
      <div className="cart-form flex-bewteen">
        <section className="cart-form-section">
          <div className="cart-form-section-inner">
            <div className="cart-items">
              <div className="cart-check flex-bewteen">
                <div className="cart-check-left flex-align-center">
                  <div className="cart-check-left-inner">
                    <label className="flex-align-center">
                      <input type="checkbox" className="checkbox" checked={cartList.length === checkedArray.length ? true : false} onChange={checkHandler} id="cartAll" />
                      <label for="cartAll"></label>
                      <p>전체선택</p>
                    </label>
                  </div>
                </div>
                <div className="cart-check-right flex-align-center">
                  <div className="cart-check-right-inner">
                    <button className="cart-check-right-button" onClick={deleteAll}>
                      | 선택 삭제
                    </button>
                  </div>
                </div>
              </div>
              {cartList && <CartItemList cartList={cartList} checkedItems={checkedAllItems} checkedItemArrayPush={checkedItemArrayPush} setQuantity={setQuantity} />}
            </div>

            <div className="cart-order-button flex-align-center">
              <div>
                <Link to={`../payment/${checkedArray.join("-")}`}>
                  <button className="cart-order-button-select">선택상품 주문</button>
                </Link>
                <button className="cart-order-button-select">선택상품 선물하기</button>
              </div>
              <div>
                <Link to={`../payment`}>
                  <button className="cart-order-button-all">전체상품 주문하기</button>
                </Link>
              </div>
            </div>
            <p className="form-attention flex-align-center">
              <img src="https://www.osulloc.com/kr/ko/static_cdj/images/presentPage/IconPresentNote.png" alt="" style={{ marginRight: "5px" }} />
              장바구니에 보관된 상품은 3개월 후에 삭제 됩니다.
            </p>
          </div>
        </section>
        <CartPrice cartList={cartList} checkedArray={checkedArray} />
      </div>
    </>
  );
}

export default CartForm;
