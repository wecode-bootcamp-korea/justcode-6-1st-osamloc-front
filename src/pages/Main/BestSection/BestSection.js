import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import BestItem from "../component/BestItem/BestItem";

function BestSection() {
    const [ bestCategory, setBestCategory ] = useState([
        {
            name: "베스트",
            view: false,
        },
        {
            name: "이번 주 인기 제품",
            view: false,
        }
    ])
    const [best, setBest] = useState([]);
    const [bestIdx, setBestIdx] = useState(0); // 현재 슬라이드 index

    const prevSlideBtn = () => {
        bestIdx === 0 ? setBestIdx(0) : setBestIdx(bestIdx - 1)
    }
    const nextSlideBtn = () => {
        bestIdx === 4 ? setBestIdx(4) : setBestIdx(bestIdx + 1)
    }
 
    
    // useEffect(() => {
    //     fetch("/data/main/best.json")
    //         .then((res) => res.json())
    //         .then((data) => setBest(data.BestData))
    // }, []); 

    useEffect(() => {
        fetch("http://localhost:10010/products?id=8&page=1")
            .then((res) => res.json())
            .then((res) => setBest(res.data))
    }, []); 

    return(
        <div className="best_layout">
            <div className="container_slide">
                <div className="best_section_title">
                    <div className="best_title">오늘은 어떤 차를 마셔볼까요?</div>
                    <ul className="best_section_tab">
                        {bestCategory.map((i) => {
                            return(
                                <li key={i} className="best_tab_item" 
                                    style={{ 
                                        backgroundColor: i.view ? '#6C801A' : '#F6F6F6',
                                        color: i.view ? "#fff" : "#a5a5a5",
                                    }}
                                >{i.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="best_item_layout" style={{ transform: `translateX(${bestIdx * 20 * -1}%)`, transition: '.8s ease-in-out'}}>
                    {best && best.map((best) => { 
                        return (
                            <BestItem 
                                key={best.name}
                                best={best}
                            />
                        )})
                    }
                </div>
                <div className="best_slide_btn">
                    <button type="button" className="best_left_btn" onClick={prevSlideBtn}></button>
                    <button type="button" className="best_right_btn" onClick={nextSlideBtn}></button>
                </div>
                <div className="best_btn text-center">
                    <Link className="view_btn" to="/">더 보기 </Link>
                </div> 
            </div>
        </div>
    )
}
export default BestSection;