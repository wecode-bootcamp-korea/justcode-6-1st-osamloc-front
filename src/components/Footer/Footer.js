import React, { useEffect, useState } from 'react';
import { Link,useLocation,useNavigate} from 'react-router-dom';
import "./Footer.scss"



function Footer(){

    const navigator = useNavigate();

    const goLoginPage = () => {
      navigator("/login");
      localStorage.removeItem("token");
    };

    const location = useLocation();
    const [style, setStyle] = useState();

    useEffect(()=>{
      if(location.pathname === '/signup' || '/login'){
        setStyle('footer-container-none');
      } else {
        setStyle('footer-container');
      }
    }, [])

    return(
        <div className={style}>
            <div className='footer-bar footer-flex'>
                {localStorage.getItem('token') ? <button onClick={goLoginPage} className='footer-login-btn'>안녕하세요</button> : <button onClick={goLoginPage} className='footer-login-btn'>로그인</button>}
                <img onClick={()=>{window.open("https://www.facebook.com/Jeju.OSULLOC",'_blank')}} className='footer-align' src='/image/footer/facebook.png'/>
                <img onClick={()=>{window.open("https://www.instagram.com/osulloc_official/",'_blank')}} className='footer-align'src='/image/footer/instagram.png'/>
            </div>
            <div className='footer-mid-flex'>
                <div className='footer-mid'>
                    <div className='footer-mid-container'>
                        <p className='title'>고객상담센터 주문/배송문의</p>
                        <p className='phone'>080-805-5555</p>
                        <p className='time'>평일 09:30-17:00(점심 11:30-13:00)</p>
                    </div>
                    <div className='footer-mid-container'>
                        <p className='title'>특판, 대량구매 문의</p>
                        <a className='mail'>help@osamloc.com</a>
                        <p className='id'>카카오톡ID : osamlocmall</p>
                        <p className='time'>평일 09:30-17:00(점심 11:30-13:00)</p>
                    </div>
                </div>
                <div className="footer-image-flex">
                    <div className='img-container'>
                        <img className='img-size' alt ="placeholder" src='/image/footer/placeholder.png'/>
                        <p>매장안내</p>
                    </div>
                    <div className='img-container'>
                        <img className='img-size' alt='memerbership' src='/image/footer/membership.png'/>
                        <p>멤버십혜택</p>
                    </div>
                    <div className='img-container'>
                        <img className='img-size' alt='faq'src='/image/footer/question.png'/>
                        <p> FAQ</p>
                    </div>
                    <div className='img-container'>
                        <img className='img-size' alt='inquiry' src='/image/footer/talking.png'/>
                        <p>1:1문의</p>
                    </div>    
                </div>
            </div>
            <div className='buttom-style'>
                <div>
                    <img className='logo-img' alt= "logo-img" src="/image/footer/osamloc.png"/>
                </div>
                <div >
                    
                        <ul className='explain'>
                            <li><a>회사소개</a></li>
                            <li><a>서비스 이용약관 </a></li>
                            <li><a>개인정보 처리방침</a></li>
                            <li><a>영상정보 처리방침</a></li>
                            <li><a>뷰티포인트</a></li>
                            <li><a>임직원할인</a></li>
                            <li><a>사이트맵</a></li>
                            <li><a>전자공고</a></li>
                        </ul>
                    
                <div className='address-container'>
                    <p className='address-style'>㈜ 오삼록</p>
                    <p className='address-style'>대표이사:000 주소:저스트코드 사업자등록번호: 390-87-01499</p>
                    <p className='address-style'>통신판매업신고번호:2019-서울용산-1173호 호스팅제공자: ㈜오삼록</p>
                    <p className='address-style'>(주)오삼록은 오삼록 브랜드를 제외한 입점 브랜드에 대해서는 통신판매중개자 이며 통신판매의 당사자가 아닙니다.<br/>따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.</p>
                </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;