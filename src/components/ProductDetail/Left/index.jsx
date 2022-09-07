import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

function DetailLeft() {
  return (
    <>
      <div class="l">
        <div class="item-thumb-wrapper">
          <div class="thumb">
            <img src="/upload/kr/ko/adminImage/HB/XA/20211026141423508CU.png?quality=80" alt="러블리 티 박스" />
          </div>
          <ul class="buyer-benefits">
            <li>
              <span class="ic ic01"></span>
              뷰티포인트 200P 적립
            </li>
            <li>
              <span class="ic ic02"></span> 찻잎 200P 적립
            </li>

            {/* <!-- 입점몰 상품일 경우 추가_20191106 --> */}

            <li>
              <span class="ic ic03"></span>3만원 이상 무료배송
            </li>

            <li>
              <span class="ic ic04"></span> (유료)포장가능
            </li>

            <li>
              <span class="ic ic05"></span> 쇼핑백 동봉
            </li>
          </ul>
          <div class="prd_tag"></div>
        </div>

        <input type="hidden" name="attrOptItemCount" value="0" />
      </div>
    </>
  );
}

export default DetailLeft;
