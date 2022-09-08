import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const slideimg = [
    {
        id: 1,
        imgUrl: "./../image/main/main_slide01.png",
        title: <>공식 홈페이지 단독<br />추석 하루 특가</>,
        info : <>최대 50% 할인 + 10% 뷰티포인트 페이백 + 사은품 증정<br /> 역대급 추석 혜택을 지금 바로 만나보세요!</>,
        data : "08.22 - 09.05"
    },
    {
        id: 2,
        imgUrl: "./../image/main/main_slide02.png",
        title: <>추석 리미티드<br />보자기 포장 선물세트</>,
        info : <>오설록의 시그니처 색으로 물들인 보자기로 포장된<br />프리미엄 선물 세트를 추석 한정으로 만나보세요.</>,
        data : "08.22 - 09.05"
    },
    {
        id: 3,
        imgUrl: "./../image/main/main_slide03.png",
        title: <>오설록 추천<br />베스트 티 컬렉션</>,
        info : <>오설록이 추천하는 다양한 베스트 티를<br />최대 36% 할인으로 만나보세요.</>,
        data : "08.29 - 09.12"
    },
    {
        id: 4,
        imgUrl: "./../image/main/main_slide04.png",
        title: <>토스로 첫 결제 시<br />3천원 즉시 캐시백</>,
        info : <>지금 토스로 1만 원 이상 결제하면<br />3천 원을 돌려드려요.</>,
        data : "08.23 - 09.12"
    },
    {
        id: 5,
        imgUrl: "./../image/main/main_slide05.png",
        title: <>오설록 선물하기 서비스<br />잘 활용하는 법</>,
        info : <>오설록의 간편한 선물하기 서비스로<br />언제든지 편하고 가볍게 티타임을 선물해보세요</>,
        data : "07.05 - 12.31"
    },
]


function MainSlide() {

    const [ slideIdx, setSlideIdx ] = useState(0);

    const nextSlide =() => {
        slideIdx+1 < slideimg.length  ? setSlideIdx(slideIdx + 1) : setSlideIdx(0);
    }
    const prevSlide =() => {
        slideIdx === slideimg.length - 5 ? setSlideIdx(4) : setSlideIdx(slideIdx - 1);
    }
    
    // useEffect(() => {
    //     console.log('fade 효과');
    // }, [slideIdx])

    return(<>
        <div className="main_bg">
            <div>
                <img src={slideimg[slideIdx].imgUrl} alt="메인 슬라이드" style={{transition: 'all .5s ease-in-out'}} />
                <div className="main_slide_wrapper" style={{transition: '.8s ease-in-out'}}>
                    <div className="main_slide_btn">
                        <button type="button" className="main_slide_leftbtn" onClick={prevSlide} ></button>
                        <button type="button" className="main_slide_rightbtn" onClick={nextSlide}></button>
                    </div>
                    <div className="main_slide_textbox" style={{transition: '.8s ease-in-out'}} >
                        <div className="main_slide_tit">{slideimg[slideIdx].title}</div>
                        <div className="main_slide_info">{slideimg[slideIdx].info}</div>
                        <div className="main_slide_date">{slideimg[slideIdx].data}</div>
                    </div>
                    <div className="main_slide_eventbtn">
                        <Link to="/main" className="slide_eventbtn">이벤트 전체보기</Link>
                    </div>
                </div>
            </div>
        </div>




        {/* <div className="">
            <div className="main_bg">
                <div className="container">
                <div className="main_slide_alignbox">
                    <div className="main_slide_textbox">
                        <div className="main_slide_tit">추석 리미티드<br /> 보자기 포장 선물세트</div>
                        <div className="main_slide_info">오설록의 시그니처 색으로 물들인 보자기로 포장된<br /> 프리미엄 선물 세트를 추석 한정으로 만나보세요.</div>
                        <div className="main_slide_date">08.22 - 09.05</div>
                        <div >
                            <Link to="/main">이벤트 전체보기</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div> */}

        
    </>)
}
export default MainSlide;