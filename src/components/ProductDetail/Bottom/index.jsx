import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import "./index.scss";
import styled, { css } from "styled-components";

const Bottom = styled.div`
  margin-top: 100px;
`;

const AnchorTab = styled.div`
  position: relative;
  height: 68px;
`;

const SortBar = styled.div`
  position: relative;
  padding: 30px 43px 110px;
  text-align: center;
`;

const AnchorTarget = styled.a`
  padding: 0 0 20px 0;
  height: auto;
  min-width: 90px;
  text-align: center;
  color: #6c801a;
  border-bottom: 3px #6c801a solid;
  font-weight: bold;
  display: inline-block;
  position: relative;
  font-size: 20px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  margin-top: 3px;
  border-top: 3px solid #f7eef3;
`;

function DetailBottom() {
  const [toggle, setToggle] = useState(true);
  const [toggleWord, setToggleWord] = useState("상품 상세 접어보기");
  const [toggleDeg, setToggleDeg] = useState(0);

  const detailToggle = () => {
    setToggle(!toggle);
    if (!toggle) {
      setToggleWord("상품 상세 접어보기");
      setToggleDeg(0);
    } else {
      setToggleWord("상품 상세 펼처보기");
      setToggleDeg(180);
    }
  };

  return (
    <>
      <Bottom>
        <AnchorTab>
          <SortBar className="sort-bar big center mobile-flex">
            <AnchorTarget>상품상세</AnchorTarget>
          </SortBar>
        </AnchorTab>

        <ImageContainer>
          {toggle && (
            <div className="product_newdetail">
              <div className="prod_detail_area">
                {/* <!--DefaultInfo--> */}
                <div className="detail_default_info">
                  <div className="bakery_detail_info" tabindex="0">
                    <div className="sec_detail_info d_info_w_cut">
                      <img src="https://www.osulloc.com/upload/kr/ko/item_view/15263/img_01.jpg" alt="오 땡큐 티 박스" className="w_view" />
                    </div>
                    <div className="sec_detail_info d_info_w_cut">
                      <img src="https://www.osulloc.com/upload/kr/ko/item_view/15263/img_02_1.jpg" alt="Key Points" className="w_view" />
                    </div>
                    <div className="sec_detail_info d_info_w_cut">
                      <img src="https://www.osulloc.com/upload/kr/ko/item_view/15263/img_03.jpg" alt="View" className="w_view" />
                    </div>

                    <div className="sec_detail_info d_info_w_cut">
                      <img src="https://www.osulloc.com/upload/kr/ko/item_view/15263/img_04_2.jpg" alt="Content" className="w_view" />
                    </div>

                    <div className="sectionWrap">
                      <div className="sec_detail_info d_info_w_cut">
                        <img src="https://www.osulloc.com/upload/kr/ko/item_view/15263/img_05.jpg" alt="Content" className="w_view" />
                      </div>
                    </div>

                    <div className="sec_detail_info d_info_w_cut">
                      <img src="https://www.osulloc.com/upload/kr/ko/item_view/16043/img_06_1.jpg" alt="HACCP" className="w_view" />
                    </div>
                    <div className="sec_detail_info d_info_w_cut">
                      <img src="https://www.osulloc.com/upload/kr/ko/item_view/15263/img_07_1.jpg" alt="Details" className="w_view" />
                    </div>
                    <div className="sec_detail_info d_info_w_cut">
                      <img src="https://www.osulloc.com/upload/kr/ko/item_view/15263/img_08_1.jpg" alt="Size" className="w_view" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ImageContainer>
      </Bottom>
      <div className="btnWrapper">
        <img className="btn-toggleBox" onClick={detailToggle} src="https://www.osulloc.com/kr/ko/static_renew/images/arr_up_16x35.png?quality=80" style={{ transform: `rotate( ${toggleDeg}deg )` }} />
        <div>{toggleWord}</div>
      </div>
    </>
  );
}

export default DetailBottom;
