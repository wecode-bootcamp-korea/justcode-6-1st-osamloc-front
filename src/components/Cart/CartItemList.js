import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { CartItem, CartPrice } from "./index";

function CartItemList({ cartList, checkedItems, checkedItemArrayPush, setQuantity }) {
  return (
    <>
      <ul className="cart-items-list">
        {cartList.map((el) => {
          return (
            <CartItem
              key={el.id}
              checkedItemArrayPush={checkedItemArrayPush}
              setQuantity={setQuantity}
              id={el.id}
              check={checkedItems}
              quantity={el.quantity}
              name={el.detail.name}
              img_url={el.detail.img_url}
              price_origin={el.detail.price_origin}
              sale={el.detail.sale}
              wrap={el.detail.wrap}
              present={el.detail.present}
            />
          );
        })}
      </ul>
    </>
  );
}

export default CartItemList;
