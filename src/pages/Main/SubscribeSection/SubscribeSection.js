import React from "react";
import MainLayout from "../component/MainLayout/MainLayout";
// import "./main.scss"

const Subscribe = [
    {
        id: 1,
        imgUrl: "./../image/main/subscribe_01.jpeg",
        title: '새롭게 만나는 차, 다다일상 베이직',
        cycle: '매월',
        price: '16,000원',
        fee: '배송비 Free',
        info : {
            content: "오설록 티 소믈리에가 매월 그달의 테마와 어울리는 차들을 선정하여 보내드립니다. 일상의 작은 순간들을 차와 함께 새롭게 만나보세요. ",
            sub1: "3종류 이상의 다양한 티백 구성",
            sub2: "2만원 이상 정가 구성"
        }
    },
    {
        id: 2,
        imgUrl: "./../image/main/subscribe_02.jpeg",
        title: '다르게 만나는 차, 다다일상 홈카페',
        cycle: '매월',
        price: '25,000원',
        fee: '배송비 Free',
        info : {
            content: "매월 오설록이 티를 이용한 새로운 레시피를 소개해 드립니다. 다양한 레시피를 따라하면서 차를 색다르게 경험해보세요.",
            sub1: "3종류 이상의 다양한 티백/티푸드 구성",
            sub2: "3만 5천원 이상 정가 구성"
        }
    },
    {
        id: 3,
        imgUrl: "./../image/main/subscribe_03.jpeg",
        title: '매일 만나는 차, 정기배송',
        fee: '배송비 Free',
        info : {
            content: "원하는 차를 집에서 매월 편하게 받아보세요.오설록과 함께 편안한 티 라이프를 즐겨보세요.",
        }
    }

]

function SubscribeSection() {
    return(
        <MainLayout
            mainTitle={"다다일상 구독"}
            subTitle={"하루 한 번, 나를 만나는 시간을 가져보세요."}
            viewButton={"다다일상 자세히 보기"}
        >
            <div className="subscribe_wrap">
                {Subscribe.map((item) => {
                    return (
                        <div key={item.id} className="subscribe_box">
                            <div className="subscribe_img">
                                <img src={item.imgUrl} alt={item.title} />
                            </div>
                            <div className="subscribe_txt_box">
                                <div className="subscribe_title">{item.title}</div>
                                <div className="subscribe_txt_item">
                                    <div className="subscribe_price_item">
                                        <span className="subscribe_box_cycle">{item.cycle}</span>
                                        {item.price && <span className="subscribe_box_price">{item.price}</span>}
                                    </div>
                                    <span className="subscribe_box_fee">{item.fee}</span>
                                </div>
                            </div>
                            <div className="subscribe_hover_box">
                                <div className="subscribe_hover_inner">
                                    <div className="subscribe_title">{item.title}</div>
                                    <div className="subscribe_txt_item">
                                        <div className="subscribe_price_item">
                                            <span className="subscribe_box_cycle">{item.cycle}</span>
                                            {item.price && <span className="subscribe_box_price">{item.price}</span>}
                                        </div>
                                        <span className="subscribe_box_fee">{item.fee}</span>
                                    </div>
                                    <div className="subscribe_divider"></div>
                                    <div className="subscribe_con">{item.info.content}</div>
                                    { item.info.sub1 &&
                                        <ul className="subscribe_list">
                                            <li>{item.info.sub1}</li>
                                            <li>{item.info.sub2}</li>
                                        </ul>
                                    }
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </MainLayout>
    )
}
export default SubscribeSection;