import React from "react";
import {Link} from "react-router-dom";

function BannerSection() {
    return(
        <div className="banner_wrap">   
            <div className="container">
                <img src="./../image/main/banner_teastone.jpeg" alt="티스톤 배너"/>
                <div className="banner_text_box">
                    <p className="banner_txt">제주 티뮤지엄 티스톤</p>
                    <Link to="/main" className="banner_btn">예약하기</Link>
                </div>
            </div>
        </div>
    )
}
export default BannerSection;