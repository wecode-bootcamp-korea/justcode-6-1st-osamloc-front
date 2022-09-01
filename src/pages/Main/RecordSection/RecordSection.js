import React from "react";
// import RecordItem from "../../../components/Main/RecordItem";
import MainLayout from "../component/MainLayout/MainLayout";
// import "./main.scss"

function RecordSection() {
    return(
        <MainLayout
            mainTitle={"다다일상 기록"}
            subTitle={"차를 통해 달라지는 일상을 만나보세요."}
            viewButton={"차와 함께하는 삶 더 보기"}
        >
            <div className="record_wrap">
                <div className="record_slide_box">
                    <img className="record_slide_img" src="./../image/record_01.jpeg" alt="다다일상 기록 1" />
                    <div className="title">차가운 것으로 따뜻한 것을 만들다</div>
                    <div className="people">철제 가구 디자이너 양윤선의 티라이프</div>
                </div>
                <div className="record_slide_box">
                    <img className="record_slide_img" src="./../image/record_02.jpeg" alt="다다일상 기록 2" />
                    <div className="title">차가운 것으로 따뜻한 것을 만들다</div>
                    <div className="people">철제 가구 디자이너 양윤선의 티라이프</div>
                </div>
                <div className="record_slide_box">
                    <img className="record_slide_img" src="./../image/record_03.jpeg" alt="다다일상 기록 3" />
                    <div className="title">차가운 것으로 따뜻한 것을 만들다</div>
                    <div className="people">철제 가구 디자이너 양윤선의 티라이프</div>
                </div>
                
            </div>

        </MainLayout>
        
    )
}
export default RecordSection;