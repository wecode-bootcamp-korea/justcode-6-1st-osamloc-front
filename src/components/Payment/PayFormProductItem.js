import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";

import "./PayForm.scss";

function PayFormProductItem({ id, quantity, name, img_url, price_origin, sale, price }) {
  const reNumber = (total) => {
    total = String(Math.ceil(total));

    if (7 > total.length && total.length > 3) {
      total = total.slice(0, -3) + "," + total.slice(-3);
    } else if (10 > total.length && total.length > 6) {
      total = total.slice(0, -6) + "," + total.slice(-6, -3) + "," + total.slice(-3);
    }

    return total;
  };

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
            <p className="list-item-image-text-p2">유료포장 선택안함</p>
          </div>
        </div>
        <div className="list-item-button flex-align-center">
          <div className="list-item-price flex-bewteen flex-align-center">
            <p>{reNumber(Number(price) * 1000)}원 /</p>
            <p className="list-item-image-text-p2">{quantity}개</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default PayFormProductItem;
