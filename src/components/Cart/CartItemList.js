import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./CartItemList.scss";

function CartItemList(){

    return(
        <>
           <li className="list-item flex-bewteen">
                <div className="list-item-check flex-align-center">
                    <input type="checkbox" className="checkbox"/>
                </div>
                <div className="list-item-image flex-align-center">
                <div className="list-item-image-box">
                    <img
                    alt=""
                    src="./image/bottle.png"
                    className="image-png"
                    />
                </div>
                <div className="list-item-image-text">
                    <p className="list-item-image-text-p1">
                    <a>프리미엄 티 컬렉션</a>
                    </p>
                    <p className="list-item-image-text-p2">포장가능</p>
                    <p className="list-item-image-text-p3">
                    · 선물 가능한 상품입니다.
                    </p>
                </div>
                </div>
                <div className="list-item-count-price">
                <div className="list-item-count">
                    <div className="list-item-count-inner flex-bewteen">
                    <button className="list-item-count-inner-button">-</button>
                    <input type="text" className="list-item-count-inner-input" value="1"></input>
                    <button className="list-item-count-inner-button">+</button>
                    </div>
                </div>
                <div className="list-item-price">
                    <p>21,000원</p>
                </div>
                </div>
                <div className="list-item-button flex-align-center">
                <button className="list-item-button-inner">바로구매</button>
                </div>
            </li>
        </>
    )
}

export default CartItemList;