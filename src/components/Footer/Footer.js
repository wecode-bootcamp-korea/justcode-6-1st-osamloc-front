import React from 'react';
import "./Footer.scss"

function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-bar'>
                <button className='footer-login-btn'>로그인</button>
                <img src='/image/footer/facebook.png'/>
                <img src='/image/footer/instagram.png'/>
            </div>
            <div>
                <div className='flex'>
                    <p>고객상담센터 주문/배송문의</p>
                    <p>080-805-5555</p>
                    <p>평일 09:30-17:00(점심 11:30-13:00)</p>
                </div>
                <div>
                    <p>특판, 대량구매 문의</p>
                    <a>help@osamloc.com</a>
                    <p>카카오톡ID : osamlocmall</p>
                </div>
                <div>
                    <div>
                        <img className='img-size' alt ="placeholder" src='/image/footer/placeholder.png'/>
                        <p>매장안내</p>
                    </div>
                    <div>
                        <img className='img-size' alt='memerbership' src='/image/footer/membership.png'/>
                        <p>멤버십혜택</p>
                    </div>
                    <div>
                        <img className='img-size' alt='faq'src='/image/footer/question.png'/>
                        <p>FAQ</p>
                    </div>
                    <div>
                        <img className='img-size' alt='inquiry' src='/image/footer/talking.png'/>
                        <p>1:1문의</p>
                    </div>    
                </div>
            </div>
            <div>
                <div>
                    <img className='logo-img' alt= "logo-img" src="/image/footer/osamloc.png"/>
                </div>
                <div>
                    <ul>
                        <li>
                            <a>회사소개</a>
                        </li>
                        <li>
                         <a>서비스 이용약관</a>   뷰티포인트 임직원할인 사이트맵 전자공고
                        </li>
                        <li>
                            <a>개인정보 처리방침</a>
                        </li>
                        <li>
                            <a>영상정보 처리방침</a>
                        </li>
                        <li>
                            <a>뷰티포인트</a>
                        </li>
                        <li>
                            <a>임직원할인</a>
                        </li>
                        <li>
                            <a>사이트맵</a>
                        </li>
                        <li>
                            <a>전자공고</a>
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <p>㈜ 오설록</p>
                    <p>대표이사:000 주소:서울특별시 용산구 한강대로 100, 14층(한강로2가) 사업자등록번호: 390-87-01499</p>
                    <p>통신판매업신고번호:2019-서울용산-1173호 호스팅제공자: ㈜오삼록</p>
                    <p>(주)오설록은 오설록 브랜드를 제외한 입점 브랜드에 대해서는 통신판매중개자 이며 통신판매의 당사자가 아닙니다.
따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.</p>
                </div>
            </div>

        </div>
    )
}
export default Footer;