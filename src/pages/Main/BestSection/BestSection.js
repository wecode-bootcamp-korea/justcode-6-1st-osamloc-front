import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import { Goods, GoodsList, ListContent } from "../../../components/Products";
import BestItem from "../component/BestItem/BestItem";

function BestSection() {

    const [best, setBest] = useState([]);

    useEffect(() => {
        fetch("/data/main/best.json")
            .then((res) => res.json())
            .then((data) => setBest(data.BestData))
    }, []); 

    return(
        <div className="best_layout">
            <div className="container">
                <div className="best_section_title">
                    <div className="best_title">오늘은 어떤 차를 마셔볼까요?</div>
                    <ul className="best_section_tab">
                        <li className="best_tab_item">베스트</li>
                        <li className="best_tab_item on">이번 주 인기 제품</li>
                    </ul>
                </div>
                <div className="best_item_layout">
                    {best && best.map((item) => { 
                        return (
                            <BestItem 
                                key={item.id}
                                imgUrl={item.best_img}
                                detail={item.detail}
                            />
                        )})
                    }
                </div>

                <div className="best_slide_btn">
                    <button type="button" className="best_left_btn"></button>
                    <button type="button" className="best_right_btn"></button>
                </div>


                <div className="best_btn text-center">
                    <Link className="view_btn" to="/main">더 보기 </Link>
                </div> 
            </div>
        </div>
    )
}
export default BestSection;