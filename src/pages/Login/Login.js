import React, { useEffect, useState } from 'react';
import "./login.scss"
import {useNavigate} from "react-router-dom"
function Login() {
  //로그인창 활성화 초기값 설정 
  const naviagte = useNavigate();
  const [id, setId] =  useState("");
  const [pw, setPw] =  useState("");

  const [isValid, setIsValid] = useState(false);

  //button을 눌렀을떄 Login페이지로 이동하기 
  const goMain = () => {
      naviagte("/")
    }  
    //button을 눌럿을떄 signup페이지로 이동하기  
  const goSignUp = () => {
      naviagte("/signup")
    }
    
  // 조건에 맞게 되면 로그인 버튼 활성화 
  const handleIdInput = (e) =>{
    const idValue = e.target.value;
    setId(idValue);
    (idValue.length<13 && idValue.length>=4)&&(pw.length<17&&pw.length>=8)
    ?setIsValid(true)
    :setIsValid(false)
    
  }; 
  
  const handlePwInput = (e) =>{
    const pwValue = e.target.value;
    setPw(pwValue);
    (id.length<13 && id.length>=4)&&(pwValue.length<17&&pwValue.length>=8)
    ? setIsValid(true)
    :setIsValid(false)
  }; 
      //signup api
      const loginBtnClick = ()=>{
        const body = {
          account : id,
          password: pw,
        }
        fetch('http://localhost:10010/users/login',{
          method:"POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(body)
        }).then(res => res.json())
          .then(json => {
            if(json.message == "LOGIN_SUCCESS"){
              alert('로그인에 성공하였습니다.')
              localStorage.setItem("token", json.token)
              naviagte('/');
            }else{
              alert('아이디와 비밀번호를 다시 확인해주세요 ');

            }
            }
            
    
        )
  
    };
  
  return (
    <div className='container-wrapper'>
      <div className='login-container'>
        <div className='headerbar-flex'>
          <span>로그인</span> 
          <button onClick={goMain}className='close-button-style' type="button"><img className='close-button-size' src="image/Login/close.png" alt="close"/></button>
        </div>
        <p className='noice'>아모레퍼시픽 뷰티포인트 통합회원<br/>아이디로 로그인해주세요.</p>
      <div>
        <div className='login-flex login-wrapper'>
          <input className='login-input'  
                placeholder='아이디 입력'
                onChange={handleIdInput}/>
        </div>
        <div className='login-flex login-wrapper'>
          <input className='login-input'type="password" placeholder='비밀번호 입력 (영문 숫자,특수문자 조합)'onChange={handlePwInput}/>
        </div>
        <div className='check-box-stlye'>
          <input type="checkbox"/>
          <label htmlFor="scales"> 아이디저장</label>
        </div> 

        <div className='login-flex button-wrapper'>      
        <button onClick={loginBtnClick} style={{backgroundColor : isValid?"#5c95f0":"#f0f0f0"}}className='button-style'>로그인</button>
      </div>
        <div className='img-flex'>
            <div>
              <img className='logo-size' alt = "cellphone-logo" src="image/Login/sellphone.png"/>
              <p>휴대폰<br/>로그인</p>
            </div>
            <div>
              <img className='logo-size' alt = "kakao-logo"src='image/Login/kakao.png'/>
              <p>카카오<br/>로그인</p>
            </div> 
            <div>
              <img className='logo-size' alt = "naver-logo"src='image/Login/naver.png'/>
              <p>네이버<br/>로그인</p>
            </div> 
            <div>
              <img className='logo-size' alt = "more-logo" src='image/Login/more.png'/>
              <p>더보기</p>
            </div>
          </div>
          <div className='find-tag-align'>
              <a className='find-tag' href='#'>아이디찾기</a>
              <span className="find-tag">  |  </span>
              <a className='find-tag' href='#'>비밀번호찾기</a>
            </div>
            <div className='signup-wrapper'>
            <button onClick={goSignUp}className='signup-button-style'>아직 회원이 아니세요? 회원가입</button>
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default Login;
