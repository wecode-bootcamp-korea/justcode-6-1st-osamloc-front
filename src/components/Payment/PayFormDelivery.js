import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./PayForm.scss";

function PayFormDelivery() {
  return (
    <>
      {/* 배송지정보 */}
      <div className="container">
        <div className="pay-info">
          <div className="pay-info-title">
            <div className="pay-info-title-left">
              <p>배송지정보</p>
            </div>
            <div className="pay-info-title-right">
              <button type="button" className="skip_btn">
                주문 고객과 동일
              </button>
            </div>
          </div>
        </div>
        <div className="customer-info">
          <div className="customer-info-inner">
            <table className="customer-info-table">
              <tbody className="customer-info-tbody">
                <tr className="customer-info-tr">
                  <th className="customer-info-th">받는 분</th>
                  <td className="customer-info-td">
                    <input type="text" className="customer-info-input"></input>
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
                        placeholder=" ' - ' 없이 휴대폰번호 입력"
                      ></input>
                    </div>
                  </td>
                </tr>
                <tr className="customer-info-tr">
                  <th className="customer-info-th">주소</th>
                  <td className="customer-info-td block">
                    <input
                      type="text"
                      className="customer-info-input address"
                    ></input>
                    <button type="button" className="address_btn">
                      우편번호 찾기
                    </button>
                  </td>
                </tr>
                <tr className="customer-info-tr">
                  <th className="customer-info-th"></th>
                  <td className="customer-info-td block">
                    <input type="text" className="customer-info-input"></input>
                  </td>
                </tr>
                <tr className="customer-info-tr">
                  <th className="customer-info-th"></th>
                  <td className="customer-info-td block">
                    <input
                      type="text"
                      className="customer-info-input"
                      placeholder="상세주소 입력"
                    ></input>
                  </td>
                </tr>
                <tr className="customer-info-tr">
                  <th className="customer-info-th"></th>
                  <td className="customer-info-td">
                    <label className="flex-align-center font14">
                      <input
                        type="checkbox"
                        id="basicAddress"
                        className="checkbox"
                      />
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
                              <option value="naver.com">
                                배송 요청사항 선택
                              </option>
                              <option value="hanmail.net">
                                경비실에 맡겨주세요
                              </option>
                              <option value="gmail.com">
                                배송전에 미리 연락주세요
                              </option>
                              <option value="1">직접입력 </option>
                            </select>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayFormDelivery;
