import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";

import PayFormProductItem from "./PayFormProductItem";
import "./PayForm.scss";

function PayFormProductItemList({ cartList }) {
  return (
    <>
      <ul>
        {cartList.map((el) => {
          return <PayFormProductItem key={el.cartId} id={el.cartId} quantity={el.quantity} name={el.name} img_url={el.product_thumbnail} price_origin={el.priceOrigin} sale={el.salePrice} price={el.price} />;
        })}
      </ul>
    </>
  );
}

export default PayFormProductItemList;
