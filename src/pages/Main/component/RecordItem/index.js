import React from "react";

function RecordItem({imgUrl, title, subTitle}){
    return(<>
        <div className="record_slide_box">
            <img className="record_slide_img" src={imgUrl} alt="다다일상 기록 1" />
            <div className="title">{title}</div>
            <div className="people">{subTitle}</div>
        </div>
    </>);
}
export default RecordItem;