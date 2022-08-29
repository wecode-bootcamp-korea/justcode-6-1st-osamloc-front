import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Main/Main";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
