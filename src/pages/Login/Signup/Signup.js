import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import "./signup.scss"
import CheckBox from '../../../components/Signup/CheckBox/CheckBox';

function Signup(){
    const naviagte = useNavigate();
    const [id, setId] =  useState("");
    const [pw, setPw] =  useState("");

    //button을 눌렀을떄 Login페이지로 이동하기 
    const goLogin = () => {
        naviagte("/login")
    }
    const handleIdInput = (e) =>{
        const idValue = e.target.value;
        setId(idValue);
        (idValue.length<13 && idValue.length>=4)&&(pw.length<17&&pw.length>=8)
        ? setIsValid(true)
        :setIsValid(false) 
      };  
      
      const handlePwInput = (e) =>{
        const pwValue = e.target.value;
        setPw(pwValue);
        (id.length<13 && id.length>=4)&&(pwValue.length<17&&pwValue.length>=8)
        ? setIsValid(true)
        :setIsValid(false)
      };

  

    return (
        <div className='signup-flex-wrpper signup'>
            <div className='signup-container '>
                <div className='signup-subject-wrapper fix-bar'>
                    <h1 className='signup-subject-style' >회원가입 및 약관동의</h1>
                    <button onClick={goLogin} className='close-button-style' type="button"><img className='close-button-size' src="image/Login/close.png" alt="close"/></button>
                </div>
                <div className='input-wrapper'>
                    <div>
                        <input className='input-style' placeholder='이름' />
                    </div>
                    <div>
                        <input className='input-style' placeholder='휴대폰 번호' />
                    </div>
                    <div>
                        <input className='input-style'placeholder='생년월일'/>
                    </div>
                    <div>
                        <input 
                            id='id-input'
                            className='input-style'
                            placeholder='아이디(영문 또는 숫자 4-12자)'
                            onChange={handleIdInput}
                        />
                    </div>
                    <div>
                        <input className='input-style' type="password" placeholder='비밀번호 (영문 소문자, 숫자, 특수문자 조합 8-16자)'onChange={handlePwInput}/>
                    </div>
                    <div>
                        <input className='input-style'placeholder='비밀번호 확인'/>
                    </div>
                    
                </div>
                <div className='check-box-stlye'>
                    <h3>오삼록 회원 약관</h3>
                    <CheckBox title={"전체 약관에 모두 동의합니다."}/>
                    <CheckBox title={"[필수] 오삼록 서비스 이용약관"}/>
                    <CheckBox title={"[필수] 개인정보 수집 동의(오삼록)"}/>
                    <CheckBox title={"[필수] 개인정보 수집/이용 동의(오삼록)"}/>
                    <CheckBox title={"[선택] 개인정보 제공동의(오삼록)"}/>
                    <CheckBox title={"[선택] 개인정보 국외이전 동의(오삼록)"}/>
                </div>
                <div>
                    <button className='signup-button'>동의하고 가입</button>
                    <p className='notice-style'>가입 필수 정보 및 약관을 모두 확인해주세요</p>
                </div>

            </div>
        </div>    
    )
}
export default Signup;