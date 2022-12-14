import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

import PayForm from "../../components/Payment/PayForm";

import "./Payment.scss";

function Payment() {
  const location = useLocation();

  const query = location.search;

  const urlSearchParams = new URLSearchParams(query);

  return (
    <>
      {/* <header /> - fixed*/}
      <div className="wrap flex-justify-center">
        <main className="page-pay">
          <section className="page-top-section">
            <div className="page-top-section-inner flex-align-center">
              <h1 className="page-title">{urlSearchParams.get("present") === "true" ? "선물하기" : "결제하기"}</h1>
            </div>
          </section>

          <PayForm />
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Payment;
