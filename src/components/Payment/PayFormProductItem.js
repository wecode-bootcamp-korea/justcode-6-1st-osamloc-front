import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";

import "./PayForm.scss";

function PayFormProductItem({ id, quantity, name, img_url, price_origin, sale, wrap, present }) {
  return (
    <>
      <li className="list-item flex-bewteen padding-zero">
        <div className="list-item-image flex-align-center">
          <div className="list-item-image-box">
            <img alt="" src={img_url} className="image-png" />
          </div>
          <div className="list-item-image-text">
            <p className="list-item-image-text-p1">
              <a>{name}</a>
            </p>
            <p className="list-item-image-text-p2">{wrap ? "유료포장 선택안함" : "포장불가"}</p>
          </div>
        </div>
        <div className="list-item-button flex-align-center">
          <div className="list-item-price flex-bewteen flex-align-center">
            <p>{price_origin * quantity}원 /</p>
            <p className="list-item-image-text-p2">{quantity}개</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default PayFormProductItem;
