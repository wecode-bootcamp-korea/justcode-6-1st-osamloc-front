import React, {useState, useEffect} from "react";

import MainLayout from "../component/MainLayout/MainLayout";
import RecordItem from "../component/RecordItem";

function RecordSection() {

    const [record, setRecord] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0); //현재 슬라이드 index

    const prevSlideBtn = () => {
        currentIdx === 0 ? setCurrentIdx(0) : setCurrentIdx(currentIdx - 1)
    }
    const nextSlideBtn = () => {
        currentIdx === 2 ? setCurrentIdx(2) : setCurrentIdx(currentIdx + 1)
    }

    useEffect(() => {
        fetch("/data/main/record.json")
            .then((res) => res.json())
            .then((data) => setRecord(data.RecordData))
    },[]);
    
    return(
        <MainLayout
            mainTitle={"다다일상 기록"}
            subTitle={"차를 통해 달라지는 일상을 만나보세요."}
            viewButton={"차와 함께하는 삶 더 보기"}
            slide
        >
            <div className="record_wrap" style={{ transform: `translateX(${currentIdx * 33 * -1}%)`, transition: '.8s ease-in-out'}}>
                {record.map((item) => {
                    return(
                        <RecordItem 
                            key={item.id}
                            imgUrl={item.imgUrl}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    )
                })}
            </div>
            <div className="record_slide_btn">
                <button type="button" className="record_left_btn" onClick={prevSlideBtn}></button>
                <button type="button" className="record_right_btn" onClick={nextSlideBtn}></button>
            </div>
        </MainLayout>
    )
}
export default RecordSection;