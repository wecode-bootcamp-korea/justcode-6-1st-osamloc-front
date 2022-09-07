import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./PayForm.scss";

function PayFormDelivery({ userData, present, setDeliveryInfo }) {
  const phone1 = useRef();
  const phone2 = useRef();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressPost, setAddressPost] = useState("");
  const [addressMain, setAddressMain] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const fillInput = () => {
    setName(userData.name);
    setPhone(userData.phone);
    setAddressPost(userData.address.address_post);
    setAddressMain(userData.address.address_main);
    setAddressDetail(userData.address.address_detail);
  };

  const tracePhone = (state) => {
    if (phone) {
      const index = phone.indexOf("-");

      const phoneBefore = phone.slice(0, index);
      const phoneAfter = phone.slice(index + 1).replace("-", "");

      if (state === 0) {
        return phoneBefore;
      } else if (state === 1) {
        return phoneAfter;
      }
    } else {
      return "";
    }
  };

  const addressSearch = () => {
    new daum.Postcode({
      width: 500,
      height: 500,
      oncomplete: function (data) {
        setAddressPost(data.zonecode);
        setAddressMain(data.address);
      },
    }).open({
      left: 2600,
      top: 200,
    });
  };

  const setPhoneNum = (e) => {
    if (e.length >= 5) {
      return e.slice(0, 4) + "-" + e.slice(4);
    }
    return e;
  };

  useEffect(() => {
    setDeliveryInfo(name, phone, addressPost, addressMain, addressDetail);
  }, [name, phone, addressPost, addressMain, addressDetail]);

  return (
    <>
      {/* 배송지정보 */}
      <div className="container">
        <div className="pay-info">
          <div className="pay-info-title">
            <div className="pay-info-title-left">
              <p>{present === "true" ? "받는 분 정보" : "배송지정보"}</p>
            </div>
            {present === "false" && (
              <div className="pay-info-title-right">
                <button type="button" className="skip_btn" onClick={fillInput}>
                  주문 고객과 동일
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="customer-info">
          <div className="customer-info-inner">
            <table className="customer-info-table">
              <tbody className="customer-info-tbody">
                <tr className="customer-info-tr">
                  <th className="customer-info-th">받는 분</th>
                  <td className="customer-info-td">
                    <input
                      type="text"
                      className="customer-info-input"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  </td>
                </tr>
                <tr className="customer-info-tr">
                  <th className="customer-info-th">{present === "true" ? "연락처" : "휴대전화"}</th>
                  <td className="customer-info-td">
                    <div className="customer-info-phone">
                      <select
                        className="customer-info-input phone"
                        value={tracePhone(0)}
                        onChange={(e) => {
                          setPhone(e.target.value + "-" + setPhoneNum(phone2.current.value));
                        }}
                        ref={phone1}
                      >
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
                        value={tracePhone(1)}
                        onChange={(e) => {
                          setPhone(phone1.current.value + "-" + setPhoneNum(e.target.value));
                        }}
                        ref={phone2}
                      ></input>
                    </div>
                  </td>
                </tr>
                {present === "false" && (
                  <>
                    <tr className="customer-info-tr">
                      <th className="customer-info-th">주소</th>
                      <td className="customer-info-td block">
                        <input
                          type="text"
                          className="customer-info-input address"
                          value={addressPost}
                          onChange={(e) => {
                            setAddressPost(e.target.value);
                          }}
                          readOnly
                        ></input>
                        <button type="button" className="address_btn" onClick={addressSearch}>
                          우편번호 찾기
                        </button>
                      </td>
                    </tr>
                    <tr className="customer-info-tr">
                      <th className="customer-info-th"></th>
                      <td className="customer-info-td block">
                        <input
                          type="text"
                          className="customer-info-input"
                          value={addressMain}
                          onChange={(e) => {
                            setAddressMain(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="customer-info-tr">
                      <th className="customer-info-th"></th>
                      <td className="customer-info-td block">
                        <input
                          type="text"
                          className="customer-info-input"
                          placeholder="상세주소 입력"
                          value={addressDetail}
                          onChange={(e) => {
                            setAddressDetail(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="customer-info-tr">
                      <th className="customer-info-th"></th>
                      <td className="customer-info-td">
                        <label className="flex-align-center font14">
                          <input type="checkbox" id="deliveryCheck" className="checkbox" />
                          <label for="deliveryCheck"></label>
                          기본 배송지로 저장
                        </label>
                      </td>
                    </tr>
                    <tr className="customer-info-tr">
                      <td colSpan="2">
                        <div className="customer-request">
                          <ul>
                            <li className="item">
                              <span className="addT">배송 요청사항</span>
                            </li>
                            <li className="item">
                              <div className="customer-info-select">
                                <select className="customer-info-input select">
                                  <option value="naver.com">배송 요청사항 선택</option>
                                  <option value="hanmail.net">경비실에 맡겨주세요</option>
                                  <option value="gmail.com">배송전에 미리 연락주세요</option>
                                  <option value="1">직접입력 </option>
                                </select>
                              </div>
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
      </div>
    </>
  );
}

export default PayFormDelivery;
