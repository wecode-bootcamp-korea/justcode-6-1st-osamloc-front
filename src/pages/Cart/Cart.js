import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartForm from "../../components/Cart/CartForm";
import "./Cart.scss";

function Cart() {
  return (
    <>
      {/* <header /> - fixed*/}
      <div className="wrap flex-justify-center">
        <main className="page-cart">
          <section className="page-top-section">
            <div className="page-top-section-inner flex-align-center">
              <h1 className="page-title">장바구니</h1>
            </div>
          </section>

          <CartForm />
        </main>
      </div>
    </>
  );
}

export default Cart;
