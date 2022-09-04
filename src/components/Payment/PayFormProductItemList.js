import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";

import PayFormProductItem from "./PayFormProductItem";
import "./PayForm.scss";

function PayFormProductItemList({ cartList }) {
  return (
    <>
      <ul>
        {cartList.map((el) => {
          return <PayFormProductItem key={el.id} id={el.id} quantity={el.quantity} name={el.detail.name} img_url={el.detail.img_url} price_origin={el.detail.price_origin} sale={el.detail.sale} wrap={el.detail.wrap} present={el.detail.present} />;
        })}
      </ul>
    </>
  );
}

export default PayFormProductItemList;
