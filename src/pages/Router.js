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
import Header from "../components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Main />} />

        {/* 로그인, 회원가입 페이지 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 제품 카테고리 */}
        <Route path="/products" element={<TeaSet />} />
        {/* 제품 카테고리 - 베스트 */}
        <Route path="/products/weeklybest" element={<WeeklyBest />} />
        <Route path="/products/weeklybest/best" element={<Best />} />
        {/* 제품 카테고리 - 티 제품 */}
        <Route path="/products/blacktea" element={<BlackTea />} />
        <Route path="/products/blendedtea" element={<BlendedTea />} />
        <Route path="/products/greattea" element={<GreatTea />} />
        <Route path="/products/greentea" element={<GreenTea />} />
        <Route path="/products/herbtea" element={<HerbTea />} />
        <Route path="/products/milktea" element={<MilkTea />} />
        {/* 제품 상세페이지 */}
        <Route path="/products/detail" element={<Detail />} />

        {/* 제품 상세 페이지 */}
        <Route path="/products/asd" element={<ProductDetail />} />

        {/* 장바구니, 결제 페이지 */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment/:cartlist" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
