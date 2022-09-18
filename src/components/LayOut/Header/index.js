import React, {useEffect, useState} from 'react';

import { Link } from "react-router-dom";
import "./index.scss";
import Navlist from './Navlist';


function Header () {

    const [navItem, setNavItem] = useState ([ 
        {
            title : "제품",
            link : "/products",
            view: false
        },
        {
            title : "선물추천",
            link : "/",
            view: false
        },
        {
            title : "다다일상",
            link : "/",
            view: false
        },
        {
            title : "브랜드",
            link : "/",
            view: false
        },
    
    ]);
    const menuItems = {
        product : [
            {
                title : "베스트",
                detail : [
                    {
                        subtitle: '위클리 베스트',
                        link: '/products/weeklybest'
                    },
                    {
                        subtitle: '베스트',
                        link: '/products/weeklybest/best'
                    }
                ]
            },
            {
                title : "티 제품",
                detail : [
                    {subtitle: '티 세트', link: '/products'},
                    {subtitle: '명차', link: '/products/greattea'},
                    {subtitle: '녹차/말차', link: '/products/greentea'},
                    {subtitle: '발효차/홍차', link: '/products/blacktea'},
                    {subtitle: '블렌디드티', link: '/products/blendedtea'},
                    {subtitle: '허브티', link: '/products/herbtea'},
                    {subtitle: '밀크티/아이스티', link: '/products/milktea'},
                ]
            },
            {
                title : "티푸드",
                detail : [
                    {subtitle: '과자/초콜릿', link: '/'},
                    {subtitle: '베이커리', link: '/'},
                    {subtitle: '아이스크림', link: '/'},
                ]
            },
            {
                title : "티웨어",
                detail : [
                    {subtitle: '용도별', link: '/'},
                    {subtitle: '브랜드별', link: '/'},
                ]
            },
            {
                title : "라이프스타일",
                detail : [
                    {subtitle: '건강기능식품', link: '/'},
                    {subtitle: '스킨케어', link: '/'},
                ]
            },
        ],
        daily : [
            {
                title : "다다일상 구독"
            },
            {
                title : "다다일상 기록"
            }
        ],
        brand : [
            {
                title : "오설록 스토리"
            },
            {
                title : "제주 티뮤지엄"
            },
            {
                title : "티하우스 북촌"
            }
        ]
        
    }
    return (<>
        <header className='header'>
            <div className="header_wrapper">
                <div className="header_inner"> 
                    <div className="header_left">
                    <h1 className="logo">
                            <Link to="/" className="logo_white" >
                                <img src="../../../image/header/logo_osamloc_white.png" style={{width: 108}} alt="오설록 로고"/>
                            </Link>
                            <Link to="/" className="logo_black" >
                                <img src="./../../image/header/logo_osamloc_black.png" style={{width: 108}} alt="오설록 로고"/>
                            </Link>
                        </h1>
                        <nav className="nav">
                            <ul className="nav_list">
                                <li className="nav_depth1">
                                    <Link to={navItem[0].link} className="nav_depth1_item">{navItem[0].title}</Link>
                                    <Navlist items={menuItems["product"]}/>
                                </li>
                                <li className="nav_depth1">
                                    <Link to="/" className="nav_depth1_item" >{navItem[1].title}</Link>
                                </li>
                                <li className="nav_depth1">
                                    <Link to="/" className="nav_depth1_item">{navItem[2].title}</Link>
                                    <Navlist items={menuItems["daily"]}/>
                                </li>
                                <li className="nav_depth1">
                                    <Link to="/" className="nav_depth1_item">{navItem[3].title}</Link>
                                    <Navlist items={menuItems["brand"]}/>
                                </li>
                            
                            </ul>
                        </nav>
                    </div>
                    <div className="header_right">
                        <ul className="nav_util">
                            <li>
                                <Link to="/" className="nav_search"></Link>
                            </li>
                            <li>
                                <Link to="/cart" className="nav_cart"></Link>
                            </li>
                            <li>
                                <Link to="/" className="nav_more"></Link>
                            </li>
                        </ul>
                        <ul className="nav_drop">
                            <li>
                                {localStorage.getItem('token') ? <Link to={''} className="login"
                                onClick={()=>{
                                  localStorage.removeItem('token');
                                }}>{localStorage.getItem('account')}</Link>:<Link to="/login" className="login">로그인</Link>}
                            </li>
                            <li>
                                <Link to="/" className="language">KOREAN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>);
}
export default Header;