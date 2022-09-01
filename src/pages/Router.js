<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Main/Main";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";
import Payment from "./Cart/Payment";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
=======
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login/Login';
import Main from './Main/\bindex';
import WeeklyBest from './Products/WeeklyBest';
import Best from './Products/WeeklyBest/Best';
import Products from './Products/TeaProducts';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/weeklybest" element={<WeeklyBest />} />
        <Route path="/weeklybest/best" element={<Best />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
>>>>>>> 577e1d008c51c4f798a4ee177303b22152d81788
