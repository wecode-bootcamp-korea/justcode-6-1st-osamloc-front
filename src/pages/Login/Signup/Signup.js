import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import "./signup.scss"
import CheckBox from '../../../components/Signup/CheckBox/CheckBox';

function Signup(){ 
    const naviagte = useNavigate();

    const [nameValid,setNameValid] = useState(true);
    const [phoneNumValid, setPhoneNumValid] = useState(true);
    const [birthValid,setBirthValid] = useState(true);
    const [idValid, setIdValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [rePasswordValid, setRePasswordValid] = useState(true);

   // 정규표현식을 사용해서 개별 숫자 지정해주기 
    const regularExpression = {
        spcialChar : /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\']/g,
        number : /[0-9]/g,
        string : /[a-zA-Z]/g,
        phoneNum :/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
    };

    const desc ={
        name : "1자이상 10자이하로 입력해주세요.",
        birth : "'.'빼고 생년월일 8자를 입력해주세요",
        phoneNum : " '-'을 포함해서 입력해주세요.",
        id : "4-12자 영문 또는 숫자를 사용하여 입력해주세요",
        //문자 조합수식 생각해보기 
        password : "영문(소문자),숫자, 특수문자 최소 2가지 이상의 문자 조합 8-16자로 입력해주세요",
        rePassword : "비밀번호를 한번 더 입력해 주세요 "
    };
    //초기값 설정해주기
    const [inputValue,setInputValue]= useState({
        name : "",
        birth : "",
        phoneNum:"",
        id : "",
        password :"",
        rePassword:"",
    });
 
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
                        <input
                            type="text"
                            name = "name" 
                            className='input-style' 
                            placeholder='이름'
                            />
                        <div className='description'>{desc.name}</div>   
                    </div>
                    <div>
                        <input className='input-style' placeholder='휴대폰 번호'/>
                        <div className='description'>{desc.phoneNum}</div> 
                    </div>
                    <div>
                        <input className='input-style'placeholder='생년월일 예)YYYYMMDD'/>
                        <div className='description'>{desc.birth}</div> 
                    </div>
                    <div>
                        <input 
                            id='id-input'
                            className='input-style'
                            placeholder='아이디(영문 또는 숫자 4-12자)'
                            onChange={handleIdInput}
                        />
                        <div className='description'>{desc.id}</div> 
                    </div>
                    <div>
                        <input className='input-style' type="password" placeholder='비밀번호 (영문 소문자, 숫자, 특수문자 조합 8-16자)'onChange={handlePwInput}/>
                        <div className='description'>{desc.password}</div> 
                    </div>
                    <div>
                        <input className='input-style'placeholder='비밀번호 확인'/>
                        <div className='description'>{desc.name}</div> 
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