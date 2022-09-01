import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./PayForm.scss";

function PayFormCustomer() {
  const [toggle, setToggle] = useState(true);

  const customerToggle = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const slideUp = {
    background:
      "url(https://www.osulloc.com/kr/ko/static_cdj/images/shop/accordion_layout_btn.png) no-repeat center / cover",
  };
  const slideDown = {
    background:
      "url(https://www.osulloc.com/kr/ko/static_cdj/images/shop/accordion_layout_btn_on.png) no-repeat center / cover",
  };

  return (
    <>
      {/* 주문고객정보 */}
      <div className="container">
        <div className="pay-info">
          <div className="pay-info-title">
            <div className="pay-info-title-left">
              <p>주문고객정보</p>
            </div>
            <div className="pay-info-title-right">
              <p>
                <span className="customer-name">이동호</span>/
                <span className="customer-name">010-3333-4444</span>
              </p>
              <div
                className="pay-info-title-right-drop"
                onClick={customerToggle}
                style={toggle ? slideUp : slideDown}
              ></div>
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
                      <input
                        type="text"
                        className="customer-info-input"
                      ></input>
                    </td>
                  </tr>
                  <tr className="customer-info-tr">
                    <th className="customer-info-th">이메일</th>
                    <td className="customer-info-td">
                      <div className="customer-info-email">
                        <input
                          type="text"
                          className="customer-info-input email"
                        ></input>
                        <span className="at">@</span>
                      </div>
                      <div className="customer-info-select">
                        <select className="customer-info-input select">
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
                        <select className="customer-info-input phone">
                          <option value="naver.com">010</option>
                          <option value="hanmail.net">011</option>
                          <option value="gmail.com">016</option>
                          <option value="nate.com">017</option>
                          <option value="1">018 </option>
                          <option value="1">019 </option>
                        </select>
                        <span className="at">-</span>
                      </div>
                      <div className="customer-info-select">
                        <input
                          type="text"
                          className="customer-info-input"
                        ></input>
                      </div>
                    </td>
                  </tr>
                  <tr className="customer-info-tr">
                    <th className="customer-info-th">보내는 분</th>
                    <td className="customer-info-td">
                      <input
                        type="text"
                        className="customer-info-input send"
                        placeholder="보내는 분 입력(7자이내)"
                      ></input>
                    </td>
                  </tr>
                  <tr className="customer-info-tr">
                    <th className="customer-info-th"></th>
                    <td className="customer-info-td">
                      <div className="customer-attention">
                        <ul>
                          <li className="item">
                            보내는 분 별도 표기하더라도 고객님 정보보호를 위해
                            마스킹 처리되어 발송됩니다.
                            <span className="addT">
                              예) 오설록 -&gt; 오*록 / 오설록몰 -&gt; 오설**
                            </span>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
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
