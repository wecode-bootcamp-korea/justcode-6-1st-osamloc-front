import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 메인 페이지
import Main from "./Main/\bindex";

// 로그인, 회원가입 페이지
import Login from "./Login/Login";
import Signup from "./Login/Signup/Signup";

// 제품 카테고리
import TeaSet from "./Products";
// 제품 카테고리 - 베스트
import WeeklyBest from "./Products/WeeklyBest";
import Best from "./Products/WeeklyBest/Best";
// 제품 카테고리 - 티 제품
import BlackTea from "./Products/TeaProduct/BlackTea";
import BlendedTea from "./Products/TeaProduct/BlendedTea";
import GreatTea from "./Products/TeaProduct/GreatTea";
import GreenTea from "./Products/TeaProduct/GreenTea";
import HerbTea from "./Products/TeaProduct/HerbTea";
import MilkTea from "./Products/TeaProduct/MilkTea";
// 제품 카테고리 - 티 푸드

// 제품 상세 페이지
import ProductDetail from "../components/ProductDetail";
// 제품 상세페이지
import Detail from "../components/ProductDetail/Left/index";

// 장바구니, 결제 페이지
import Cart from "./Cart/Cart";
import Payment from "./Cart/Payment";

import LayOut from "../components/LayOut"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<LayOut><Main /></LayOut>} />

        {/* 로그인, 회원가입 페이지 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 제품 카테고리 */}
        <Route path="/products" element={<LayOut><TeaSet /></LayOut>} />

        {/* 제품 카테고리 - 베스트 */}
        <Route path="/products/weeklybest" element={<LayOut><WeeklyBest /></LayOut>} />
        <Route path="/products/weeklybest/best" element={<LayOut><Best /></LayOut>} />

        {/* 제품 카테고리 - 티 제품 */}
        <Route path="/products/blacktea" element={<LayOut><BlackTea /></LayOut>} />
        <Route path="/products/blendedtea" element={<LayOut><BlendedTea /></LayOut>} />
        <Route path="/products/greattea" element={<LayOut><GreatTea /></LayOut>} />
        <Route path="/products/greentea" element={<LayOut><GreenTea /></LayOut>} />
        <Route path="/products/herbtea" element={<LayOut><HerbTea /></LayOut>} />
        <Route path="/products/milktea" element={<LayOut><MilkTea /></LayOut>} />

        {/* 제품 상세 페이지 */}
        <Route path="/products/item/:id" element={<LayOut><ProductDetail /></LayOut>} />

        {/* 장바구니, 결제 페이지 */}
        <Route path="/cart" element={<LayOut><Cart /></LayOut>} />
        <Route path="/payment/:cartlist" element={<LayOut><Payment /></LayOut>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
