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
            {/* ?????????????????? */}
            {userData && <PayFormCustomer userData={userData} present={present} setCustomerInfo={setCustomerInfo} />}

            {/* ??????????????? */}
            {userData && <PayFormDelivery userData={userData} present={present} setDeliveryInfo={setDeliveryInfo} />}

            {/* ?????????????????? */}
            <PayFormProduct cartList={cartList} present={present} />

            {/* ?????????????????? */}
            <PayFormCredit setWayInfo={setWayInfo} />

            {/* ?????????????????? */}
            <div className="container">
              <div className="customer-info" style={{ paddingBottom: "20px" }}>
                <div className="customer-info-inner">
                  <div className="down-detail">
                    <label className="flex-align-center">
                      <input type="checkbox" className="checkbox" id="lastCheck" checked={agree} onChange={() => setAgree(!agree)} />
                      <label for="lastCheck"></label>
                      <p>??? ????????? ??????????????? ????????? ??????????????????, ?????? ????????? ?????? ?????????.</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ?????? ?????? ?????? */}
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
