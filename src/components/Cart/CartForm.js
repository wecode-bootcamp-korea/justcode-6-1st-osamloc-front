import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import { CartItemList, CartPrice, Modal } from "./index";
import "./CartForm.scss";

function CartForm() {
  const [cartList, setCartList] = useState("");
  const [stockCartList, setStockCartList] = useState("");

  const [checkedArray, setCheckedArray] = useState([]);

  const [checkedAllItems, setCheckedAllItems] = useState(true);

  const [modalup, setModalup] = useState(false);

  const checkHandler = () => {
    setCheckedAllItems(!checkedAllItems);
    if (!checkedAllItems === true && cartList) {
      setCheckedArray(
        cartList.map((el) => {
          return el.cartId;
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
          element.cartId === id && (element.quantity = quantity);
          return element;
        })
      );
    }
  };

  const deleteCheck = () => {
    setCartList(
      cartList.filter((element) => {
        if (checkedArray.includes(element.cartId)) {
          return false;
        }
        return true;
      })
    );
    setStockCartList(
      stockCartList.filter((element) => {
        return !checkedArray.includes(element.cartId);
      })
    );
    setCheckedArray([]);
  };

  const modalUpBtn = () => {
    setModalup(!modalup);
  };

  useEffect(() => {
    fetch("http://localhost:10010/cart", {
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("????????????", data.data);
        setCartList(data.data);
        setStockCartList(data.data);
        setCheckedArray(
          data.data.map((el) => {
            return el.cartId;
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
                      <input type="checkbox" className="checkbox" checked={stockCartList.length === checkedArray.length ? true : false} onChange={checkHandler} id="cartAll" />
                      <label for="cartAll"></label>
                      <p>????????????</p>
                    </label>
                  </div>
                </div>
                <div className="cart-check-right flex-align-center">
                  <div className="cart-check-right-inner">
                    <button className="cart-check-right-button" onClick={deleteCheck}>
                      | ?????? ??????
                    </button>
                  </div>
                </div>
              </div>
              {cartList && <CartItemList cartList={cartList} checkedItems={checkedAllItems} checkedItemArrayPush={checkedItemArrayPush} setQuantity={setQuantity} />}
            </div>

            <div className="cart-order-button flex-align-center">
              {checkedArray.length !== 0 && (
                <div>
                  <Link to={`../payment/${checkedArray.join("-")}?present=false`}>
                    <button className="cart-order-button-select">???????????? ??????</button>
                  </Link>
                  <Link to={`../payment/${checkedArray.join("-")}?present=true`}>
                    <button className="cart-order-button-select">???????????? ????????????</button>
                  </Link>
                </div>
              )}
              {checkedArray.length === 0 && (
                <div>
                  <button className="cart-order-button-select" onClick={modalUpBtn}>
                    ???????????? ??????
                  </button>

                  <button className="cart-order-button-select" onClick={modalUpBtn}>
                    ???????????? ????????????
                  </button>
                </div>
              )}
              <div>
                <Link to={`../payment/all?present=false`}>
                  <button className="cart-order-button-all">???????????? ????????????</button>
                </Link>
              </div>
            </div>

            {modalup && <Modal modalUpBtn={modalUpBtn} state={"????????? ????????? ????????????."} />}
            <p className="form-attention flex-align-center">
              <img src="https://www.osulloc.com/kr/ko/static_cdj/images/presentPage/IconPresentNote.png" alt="" style={{ marginRight: "5px" }} />
              ??????????????? ????????? ????????? 3?????? ?????? ?????? ?????????.
            </p>
          </div>
        </section>
        <CartPrice cartList={cartList} checkedArray={checkedArray} />
      </div>
    </>
  );
}

export default CartForm;
