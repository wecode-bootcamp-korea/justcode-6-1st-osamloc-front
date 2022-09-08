import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./PayForm.scss";

function PayFormCustomer({ userData, present, setCustomerInfo }) {
  const phone1 = useRef();
  const phone2 = useRef();
  const email1 = useRef();
  const email2 = useRef();

  const [name, setName] = useState(userData.name);
  const [phone, setPhone] = useState(userData.phone);
  const [email, setEmail] = useState("warrently@naver.com");
  const [sendName, setSendName] = useState("");

  const [toggle, setToggle] = useState(false);

  const [textNum, setTextNum] = useState(0);

  const [card01, setCard01] = useState("card_image hover");
  const [card02, setCard02] = useState("card_image");
  const [card03, setCard03] = useState("card_image");
  const [card04, setCard04] = useState("card_image");
  const [card05, setCard05] = useState("card_image");

  const [cardSelctImage, setCardSelectImage] = useState("https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card01.png");

  const customerToggle = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const slideDown = {
    background: "url(https://www.osulloc.com/kr/ko/static_cdj/images/shop/accordion_layout_btn.png) no-repeat center / cover",
  };
  const slideUp = {
    background: "url(https://www.osulloc.com/kr/ko/static_cdj/images/shop/accordion_layout_btn_on.png) no-repeat center / cover",
  };

  const traceEmail = (state) => {
    const index = email.indexOf("@");

    const emailBefore = email.slice(0, index);
    const emailAfter = email.slice(index + 1);

    if (state === 0) {
      return emailBefore;
    } else if (state === 1) {
      return emailAfter;
    }
  };

  const tracePhone = (state) => {
    const index = phone.indexOf("-");

    const phoneBefore = phone.slice(0, index);
    const phoneAfter = phone.slice(index + 1).replace("-", "");

    if (state === 0) {
      return phoneBefore;
    } else if (state === 1) {
      return phoneAfter;
    }
  };

  const textCount = (e) => {
    setTextNum(e.target.value.length);
  };

  const changeImage = (e) => {
    setCard01("card_image");
    setCard02("card_image");
    setCard03("card_image");
    setCard04("card_image");
    setCard05("card_image");
    if (e.target.name === "card01") {
      setCard01("card_image hover");
      setCardSelectImage("https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card01.png");
    } else if (e.target.name === "card02") {
      setCard02("card_image hover");
      setCardSelectImage("https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card02.png");
    } else if (e.target.name === "card03") {
      setCard03("card_image hover");
      setCardSelectImage("https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card03.png");
    } else if (e.target.name === "card04") {
      setCard04("card_image hover");
      setCardSelectImage("https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card04.png");
    } else if (e.target.name === "card05") {
      setCard05("card_image hover");
      setCardSelectImage("https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card05.png");
    }
  };

  const setPhoneNum = (e) => {
    if (e.length >= 5) {
      return e.slice(0, 4) + "-" + e.slice(4);
    }
    return e;
  };

  useEffect(() => {
    setCustomerInfo(name, phone, email);
  }, [name, phone, email]);

  return (
    <>
      {present === "true" && (
        <div className="container">
          <div className="pay-info">
            <div className="pay-info-title" style={{ display: "flex", justifyContent: "center" }}>
              <div className="pay-info-title-left" style={{ display: "flex", justifyContent: "space-bewteen", alignItems: "center" }}>
                <div className="swiper-slide">
                  <img name="card01" src="https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card01.png" alt="" className={card01} onClick={changeImage} />
                </div>
                <div className="swiper-slide">
                  <img name="card02" src="https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card02.png" alt="" className={card02} onClick={changeImage} />
                </div>
                <div className="swiper-slide">
                  <img name="card03" src="https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card03.png" alt="" className={card03} onClick={changeImage} />
                </div>
                <div className="swiper-slide">
                  <img name="card04" src="https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card04.png" alt="" className={card04} onClick={changeImage} />
                </div>
                <div className="swiper-slide">
                  <img name="card05" src="https://www.osulloc.com/kr/ko/static_cdj/images/present/gifts_card05.png" alt="" className={card05} onClick={changeImage} />
                </div>
              </div>
            </div>
          </div>
          <div className="customer-info" style={{ paddingTop: "0" }}>
            <div className="customer-info-inner" style={{ padding: "30px 24px 30px 24px", backgroundColor: "#F6F6F6", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ height: "242px" }}>
                <img src={cardSelctImage} alt="" style={{ width: "400px", borderRadius: "10px 10px 0px 0px" }} />
              </div>
              <div className="card_msg">
                <textarea id="messageContents" maxLength="100" placeholder="100자 이내로 입력해 주세요." className="card-msg-text" onChange={textCount}></textarea>
                <div className="text_cnt">
                  <span style={{ color: "black" }}>{textNum}</span>/100
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 주문고객정보 */}
      <div className="container">
        <div className="pay-info">
          <div className="pay-info-title">
            <div className="pay-info-title-left">
              <p>{present === "true" ? "보내는 분" : "주문고객정보"}</p>
            </div>
            <div className="pay-info-title-right">
              <p>
                <span className="customer-name">{name}</span>/<span className="customer-name">{phone}</span>
              </p>
              <div className="pay-info-title-right-drop" onClick={customerToggle} style={toggle ? slideUp : slideDown}></div>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="customer-info">
            <div className="customer-info-inner">
              <table className="customer-info-table">
                <tbody className="customer-info-tbody">
                  <tr className="customer-info-tr">
                    <th className="customer-info-th">이름</th>
                    <td className="customer-info-td">
                      <input type="text" className="customer-info-input" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
                    </td>
                  </tr>
                  <tr className="customer-info-tr">
                    <th className="customer-info-th">이메일</th>
                    <td className="customer-info-td">
                      <div className="customer-info-email">
                        <input type="text" className="customer-info-input email" defaultValue={traceEmail(0)} ref={email1} onChange={(e) => setEmail(e.target.value + "@" + email2.current.value)}></input>
                        <span className="at">@</span>
                      </div>
                      <div className="customer-info-select">
                        <select className="customer-info-input select" defaultValue={traceEmail(1)} ref={email2} onChange={(e) => setEmail(email1.current.value + "@" + e.target.value)}>
                          <option value="naver.com">naver.com</option>
                          <option value="hanmail.net">hanmail.net</option>
                          <option value="gmail.com">gmail.com</option>
                          <option value="nate.com">nate.com</option>
                          <option value="1">직접입력 </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr className="customer-info-tr">
                    <th className="customer-info-th">휴대전화</th>
                    <td className="customer-info-td">
                      <div className="customer-info-phone">
                        <select className="customer-info-input phone" defaultValue={tracePhone(0)} ref={phone1} onChange={(e) => setPhone(e.target.value + "-" + setPhoneNum(phone2.target.value))}>
                          <option value="010">010</option>
                          <option value="011">011</option>
                          <option value="016">016</option>
                          <option value="017">017</option>
                          <option value="018">018 </option>
                          <option value="019">019 </option>
                        </select>
                        <span className="at">-</span>
                      </div>
                      <div className="customer-info-select">
                        <input
                          type="text"
                          className="customer-info-input"
                          placeholder=" ' - ' 없이 휴대폰번호 입력"
                          maxLength="8"
                          defaultValue={tracePhone(1)}
                          ref={phone2}
                          onChange={(e) => setPhone(phone1.current.value + "-" + setPhoneNum(e.target.value))}
                        ></input>
                      </div>
                    </td>
                  </tr>
                  {present === "false" && (
                    <>
                      <tr className="customer-info-tr">
                        <th className="customer-info-th">보내는 분</th>
                        <td className="customer-info-td">
                          <input type="text" className="customer-info-input send" placeholder="보내는 분 입력(7자이내)"></input>
                        </td>
                      </tr>
                      <tr className="customer-info-tr">
                        <th className="customer-info-th"></th>
                        <td className="customer-info-td">
                          <div className="customer-attention">
                            <ul>
                              <li className="item">
                                보내는 분 별도 표기하더라도 고객님 정보보호를 위해 마스킹 처리되어 발송됩니다.
                                <span className="addT">예) 오설록 -&gt; 오*록 / 오설록몰 -&gt; 오설**</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PayFormCustomer;
