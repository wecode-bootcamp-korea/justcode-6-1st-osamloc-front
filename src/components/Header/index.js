import React, {useEffect, useState} from 'react';

import { Link, useLocation, useParams } from "react-router-dom";
import "./index.scss"
import Navlist from './Navlist'; 


function Header () {

  const location = useLocation();
  const [style, setStyle] = useState();


  useEffect(()=>{
    if(location.pathname === '/signup' || '/login'){
      setStyle('header-none');
    } else {
      setStyle('header');
    }
  }, [])

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
                detail : ["위클리 베스트", "베스트"]
            },
            {
                title : "티 제품",
                detail : ["티 세트", "명차", "녹차/말차", "발효차/홍차", "블렌디드티", "허브티", "밀크티/아이스티"]
            },
            {
                title : "티푸드",
                detail : ["과자/초콜릿", "베이커리", "아이스크림"] 
            },
            {
                title : "티웨어",
                detail : ["용도별", "브랜드별"]
            },
            {
                title : "라이프스타일",
                detail : ["건강기능식품", "스킨케어"]
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

    const [open, setOpen] = useState(false);
    const closeNav = () => {
        let arr = [...navItem];
        arr[0].view = false;
        setNavItem(arr);

    }
    // const [ style, setStyle ] = useState({display: 'none'});

    return (<>
        <header className={style}>
            <div className="header_wrapper">
                <div className="header_inner"> 
                    <div className="header_left">
                    <h1 className="logo">
                            <Link to="/" className="logo_white" >
                                <img src="./../../image/header/logo_osamloc_white.png" style={{width: 108}} alt="오설록 로고"/>
                            </Link>
                            <Link to="/" className="logo_black" >
                                <img src="./../../image/header/logo_osamloc_black.png" style={{width: 108}} alt="오설록 로고"/>

                            </Link>
                        </h1>
                        <nav className="nav">
                            <ul className="nav_list">
                                    <li className="nav_depth1"
                                    >
                                        <Link to={navItem[0].link} className="nav_depth1_item" 
                                            onMouseEnter={() => {
                                                let arr = [...navItem];
                                                arr[0].view = true;
                                                setNavItem(arr);
                                            }} 
                                            onMouseLeave={() => {
                                                let arr = [...navItem];
                                                arr[0].view = false;
                                                setNavItem(arr);
                                            }}

                                        >{navItem[0].title}</Link>
                                            {navItem[0].view && <Navlist
                                                items={menuItems["product"]}
                                            />}
                                      
                                    </li>
                                    <li className="nav_depth1">
                                        <Link to="/" className="nav_depth1_item" >{navItem[1].title}</Link>
                                    </li>
                                    <li className="nav_depth1"
                                    
                                    >
                                        <Link to="/" className="nav_depth1_item"
                                            onMouseEnter={() => {
                                                let arr = [...navItem];
                                                arr[2].view = true;
                                                setNavItem(arr);
                                        }} 
                                        onMouseLeave={() => {
                                            let arr = [...navItem];
                                            arr[2].view = false;
                                            setNavItem(arr);
                                        }}
                                        >{navItem[2].title}</Link>
                                        {navItem[2].view && <Navlist items={menuItems["daily"]}/>}
                                    </li>
                                    <li className="nav_depth1">
                                        <Link to="/" className="nav_depth1_item"
                                            onMouseEnter={() => {
                                                let arr = [...navItem];
                                                arr[3].view = true;
                                                setNavItem(arr);
                                            }} 
                                            onMouseLeave={() => {
                                                let arr = [...navItem];
                                                arr[3].view = false;
                                                setNavItem(arr);
                                            }}
                                        >{navItem[3].title}</Link>
                                        {navItem[3].view && <Navlist items={menuItems["brand"]}/>}
                                  
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
                                }}>안녕하세요</Link>:<Link to="/login" className="login">로그인</Link>}
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