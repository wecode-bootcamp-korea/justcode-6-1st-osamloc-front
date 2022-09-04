import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

import { PayFormCredit, PayFormCustomer, PayFormDelivery, PayFormProduct, PayPrice } from "./index";

import "./PayForm.scss";

function PayForm() {
  const params = useParams();
  const [cartList, setCartList] = useState("");

  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch("/data/cart/user.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.users);
      });
  }, []);

  useEffect(() => {
    fetch("/data/cart/cart.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (String(params.cartlist) !== "all") {
          const arr = params.cartlist.split("-");
          setCartList(
            data.cart_list.filter((el) => {
              return arr.includes(String(el.id));
            })
          );
        } else if (String(params.cartlist) === "all") {
          setCartList(
            data.cart_list.filter((el) => {
              return el.status === true;
            })
          );
        }
      });
  }, [params]);

  return (
    <>
      {/* <payForm /> */}
      <form className="pay-form flex-bewteen">
        <section className="pay-form-section">
          <div className="pay-form-section-inner">
            {/* 주문고객정보 */}
            {userData && <PayFormCustomer userData={userData} />}

            {/* 배송지정보 */}
            {userData && <PayFormDelivery userData={userData} />}

            {/* 주문상품정보 */}
            <PayFormProduct cartList={cartList} />

            {/* 결제수단정보 */}
            <PayFormCredit />

            {/* 주의사항정보 */}
            <div className="container">
              <div className="customer-info">
                <div className="customer-info-inner">
                  <div className="down-detail">
                    <label className="flex-align-center">
                      <input type="checkbox" className="checkbox" id="lastCheck" />
                      <label for="lastCheck"></label>
                      <p>위 상품의 판매조건을 명확히 확인하였으며, 구매 진행에 동의 합니다.</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 결제 금액 정보 */}
        <PayPrice cartList={cartList} />
      </form>
    </>
  );
}

export default PayForm;
