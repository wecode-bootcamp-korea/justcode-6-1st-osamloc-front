import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const ItemThumbWrapper = styled.div`
  position: relative;
  padding: 30px 43px 110px;
  background: #f8f9fb;
`;

function DetailBottom() {
  return (
    <>
      <div>
        <div class="anchorTab fixed">
          <div class="sort-bar big center mobile-flex" style="top: 80px;">
            <a href="#anchor1" class="anchorTarget on">
              상품상세
            </a>
            <a href="#anchor2" class="anchorTarget">
              고객리뷰 <em>522개</em>
            </a>
            <a href="#anchor3" class="anchorTarget">
              상품고시정보
            </a>
          </div>
        </div>
        <div>
          <div id="product-content" class="prod_detail_wrap tab_content active">
            <div class="product_newdetail">
              <div class="prod_detail_area">
                {/* <!--DefaultInfo--> */}
                <div class="detail_default_info">
                  <div class="bakery_detail_info" tabindex="0">
                    <div class="sec_detail_info d_info_w_cut">
                      <img src="/upload/kr/ko/item_view/15263/img_01.jpg" alt="오 땡큐 티 박스" class="w_view" />
                      <img src="/upload/kr/ko/item_view/15263/img_01_m.jpg" alt="오 땡큐 티 박스" class="m_view" />
                    </div>
                    <div class="sec_detail_info d_info_w_cut">
                      <img src="/upload/kr/ko/item_view/15263/img_02_1.jpg" alt="Key Points" class="w_view" />
                      <img src="/upload/kr/ko/item_view/15263/img_02_m.jpg" alt="Key Points" class="m_view" />
                    </div>
                    <div class="sec_detail_info d_info_w_cut">
                      <img src="/upload/kr/ko/item_view/15263/img_03.jpg" alt="View" class="w_view" />
                      <img src="/upload/kr/ko/item_view/15263/img_03_m.jpg" alt="View" class="m_view" />
                    </div>

                    <div class="sec_detail_info d_info_w_cut">
                      <img src="/upload/kr/ko/item_view/15263/img_04_2.jpg" alt="Content" class="w_view" />
                      <img src="/upload/kr/ko/item_view/15263/img_04_m.jpg" alt="Content" class="m_view" />
                    </div>

                    <div class="sectionWrap" style="background-color: #f5faf8;">
                      <div class="sec_detail_info d_info_w_cut">
                        <img src="/upload/kr/ko/item_view/15263/img_05.jpg" alt="Content" class="w_view" />
                        <img src="/upload/kr/ko/item_view/15263/img_05_m.jpg" alt="Content" class="m_view" />
                      </div>
                    </div>

                    <div class="sec_detail_info d_info_w_cut">
                      <img src="/upload/kr/ko/item_view/16043/img_06_1.jpg" alt="HACCP" class="w_view" />
                      <img src="/upload/kr/ko/item_view/16043/img_06_m_1.jpg" alt="HACCP" class="m_view" />
                    </div>
                    <div class="sec_detail_info d_info_w_cut">
                      <img src="/upload/kr/ko/item_view/15263/img_07_1.jpg" alt="Details" class="w_view" />
                      <img src="/upload/kr/ko/item_view/15263/img_07_m.jpg" alt="Details" class="m_view" />
                    </div>
                    <div class="sec_detail_info d_info_w_cut">
                      <img src="/upload/kr/ko/item_view/15263/img_08_1.jpg" alt="Size" class="w_view" />
                      <img src="/upload/kr/ko/item_view/15263/img_08_m.jpg" alt="Size" class="m_view" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailBottom;
