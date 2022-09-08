import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { CartItem } from "./index";

function CartItemList({ cartList, checkedItems, checkedItemArrayPush, setQuantity }) {
  return (
    <>
      <ul className="cart-items-list">
        {cartList.map((el) => {
          return (
            <CartItem
              key={el.cartId}
              checkedItemArrayPush={checkedItemArrayPush}
              setQuantity={setQuantity}
              id={el.cartId}
              check={checkedItems}
              quantity={el.quantity}
              name={el.name}
              img_url={el.product_thumbnail}
              price_origin={el.priceOrigin}
              sale={el.salePrice}
              price={el.price}
              // wrap={el.detail.wrap}
              status={el.status}
            />
          );
        })}
      </ul>
    </>
  );
}

export default CartItemList;
