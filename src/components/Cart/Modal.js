import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import "./Modal.scss";

function Modal({ modalUpBtn }) {
  return (
    <div className="Modal" onClick={modalUpBtn}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <p>선택한 상품이 없습니다.</p>
        <button id="modalCloseBtn" onClick={modalUpBtn}>
          확인
        </button>
      </div>
    </div>
  );
}

export default Modal;
