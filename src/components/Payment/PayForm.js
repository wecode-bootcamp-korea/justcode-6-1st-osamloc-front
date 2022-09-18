import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from "react-router-dom";

import { PayFormCredit, PayFormCustomer, PayFormDelivery, PayFormProduct, PayPrice } from "./index";

import "./PayForm.scss";

function PayForm() {
  const location = useLocation();

  const query = location.search;

  const urlSearchParams = new URLSearchParams(query);

  const params = useParams();
  const [cartList, setCartList] = useState("");

  const [userData, setUserData] = useState("");

  const [present, setPresent] = useState(urlSearchParams.get("present"));

  const [agree, setAgree] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressPost, setAddressPost] = useState("");
  const [addressMain, setAddressMain] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [sendName, setSendName] = useState("");
  const [sendPhone, setSendPhone] = useState("");
  const [sendEmail, setSendEmail] = useState("");

  const [way, setWay] = useState("");

  const setDeliveryInfo = (name, phone, addressPost, addressMain, addressDetail) => {
    setName(name);
    setPhone(phone);
    setAddressPost(addressPost);
    setAddressMain(addressMain);
    setAddressDetail(addressDetail);
  };

  const setCustomerInfo = (name, phone, email) => {
    setSendName(name);
    setSendPhone(phone);
    setSendEmail(email);
  };

  const setWayInfo = (way) => {
    setWay(way);
  };

  useEffect(() => {
    fetch("http://localhost:10010/cart/address", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data[0]);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:10010/cart", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (String(params.cartlist) !== "all") {
          const arr = params.cartlist.split("-");
          setCartList(
            data.data.filter((el) => {
              return arr.includes(String(el.cartId));
            })
          );
        } else if (String(params.cartlist) === "all") {
          setCartList(data.data);
        }
      });
  }, [params]);

  return (
    <>
      {/* <payForm /> */}
      <div className="pay-form flex-bewteen">
        <section className="pay-form-section">
          <div className="pay-form-section-inner">
            {/* 주문고객정보 */}
            {userData && <PayFormCustomer userData={userData} present={present} setCustomerInfo={setCustomerInfo} />}

            {/* 배송지정보 */}
            {userData && <PayFormDelivery userData={userData} present={present} setDeliveryInfo={setDeliveryInfo} />}

            {/* 주문상품정보 */}
            <PayFormProduct cartList={cartList} present={present} />

            {/* 결제수단정보 */}
            <PayFormCredit setWayInfo={setWayInfo} />

            {/* 주의사항정보 */}
            <div className="container">
              <div className="customer-info" style={{ paddingBottom: "20px" }}>
                <div className="customer-info-inner">
                  <div className="down-detail">
                    <label className="flex-align-center">
                      <input type="checkbox" className="checkbox" id="lastCheck" checked={agree} onChange={() => setAgree(!agree)} />
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
        <PayPrice
          cartList={cartList}
          agree={agree}
          name={name}
          phone={phone}
          addressPost={addressPost}
          addressMain={addressMain}
          addressDetail={addressDetail}
          sendName={sendName}
          sendPhone={sendPhone}
          sendEmail={sendEmail}
          present={present}
          way={way}
        />
      </div>
    </>
  );
}

export default PayForm;
