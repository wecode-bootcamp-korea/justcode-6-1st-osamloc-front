import React from "react";


function CardSection() {
    return(

        <div className="main_layout card_wrap">   
            <div className="container card_inner" >
                <div className="card_left"> 
                    <img className="card_left_img" src="./../image/main/card_01.jpeg" alt="오늘만 이 가격" />
                    <div className="card_left_txt_box">
                        <div className="card_col_box flex-column">
                            <div className="card_top_inner flex-row">
                                <div className="card_top_txt">오늘만 이 가격</div>
                                <div className="card_top_time"><img src="./../image/main/icon_timer.png"/>12:35:35</div>
                            </div>
                            <div className="card_bottom_inner flex-column">
                                <div className="card_bottom_tit">제주 순수녹차</div>
                                <div className="card_bottom_info">
                                    <div className="card_bottom_sale">30%</div>
                                    <div className="card_bottom_discount">9,500</div>
                                    <div className="card_bottom_price">6,650원</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card_right">
                    <div className="card_right_inner">
                        <img className="card_right_img" src="./../image/main/card_02.png" alt="출석체크" />
                        <div className="card_right_txt_box">
                            <div className="flex-column">
                                <div className="card_right_txt">8월 출석체크</div>
                                <div className="card_right_date">08.01 - 08.31 <span className="card_right_dday">D-0</span></div>
                            </div>

                        </div>
                    </div> 
                  


                    <div className="card_right_inner">
                        <img className="card_right_img" src="./../image/main/card_03.jpeg" alt="오설록 스토리" />
                        <div className="card_right_txt_box">
                            <div className="flex-column">
                                <div className="card_right_theme">TEA FROM JEJU</div>
                                <div className="card_right_sub">오설록 스토리</div>
                            </div>
                        </div>
                    </div> 
                   
                </div>
            </div>
        </div>
            
            
          

    )
}
export default CardSection;