import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import "./signup.scss"
import CheckBox from '../../../components/Signup/CheckBox/CheckBox';

function Signup(){ 
    const naviagte = useNavigate();
    
    //초기값세팅-이름, 생년월일, 핸드폰전화, 아이디, 비밀번호, 비밀번호확인 
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    // 오류메세지 상태 저장
    const [nameMessage, setNameMessage] =useState("");
    const [idMessage, setIdMessage] =useState("");
    const [phoneMessage, setPhoneMessage] =useState("");
    const [birthMessage, setBirthMessage] =useState("");
    const [passwordMessage, setPasswordMessage] =useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] =useState("");

     // 유효성 검사
    const [isName, setIsName] =useState(false);
    const [isId, setIsId] =useState(false);
    const [isPhone, setIsPhone] =useState(false);
    const [isBirth, setIsBirth] =useState(false);
    const [isPassword, setIsPassword] =useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] =useState(false);

    //이름 
    const onChangeName = (e) => {
        const currentName = e.target.value;
        setName(currentName);
     
        if (currentName.length < 1 || currentName.length >= 10) {
          setNameMessage("이름을 1글자 이상 10글자 이하로 입력해주세요!");
          setIsName(false);
        } else {
          setNameMessage("사용가능한 이름입니다.");
          setIsName(true);
        }
      };
      //phoneNum
      const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
     
        if (!phoneRegExp.test(currentPhone)) {
          setPhoneMessage("올바른 형식이 아닙니다!");
          setIsPhone(false);
        } else {
          setPhoneMessage("사용 가능한 번호입니다:)");
          setIsPhone(true);
        }
      };
      const addHyphen = (e) => {
        const currentNumber = e.target.value;
        setPhone(currentNumber);
        if (currentNumber.length == 3 || currentNumber.length == 8) {
          setPhone(currentNumber + "-");
          onChangePhone(currentNumber + "-");
        } else {
          onChangePhone(currentNumber);
        }
      };
      //id
      const onChangeId = (e) => {
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[a-zA-z0-9]{4,12}$/;
     
        if (!idRegExp.test(currentId)) {
          setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
          setIsId(false);
        } else {
          setIdMessage("사용가능한 아이디 입니다:)");
          setIsId(true);
        }
      };
      //생년월일 
      const onChangeBirth = (e) => {
        const currentBirth = e.target.value;
        setBirth(currentBirth);
        const birthRegExp = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
        if(!birthRegExp.test(currentBirth)){
            setBirthMessage("생년월일 8자리를 입력해주세요!");
            setIsBirth(false);
        } else{
            setBirthMessage("올바는 형식입니다:)");
            setIsBirth(true);
        }
      };
      //비밀번호 
      const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp =
        /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/;
        if (!passwordRegExp.test(currentPassword)) {
          setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 16자리 이하 입력해주세요!");
          setIsPassword(false);
        } else {
          setPasswordMessage("안전한 비밀번호 입니다:)");
          setIsPassword(true);
        }
      };
      //비밀번호확인 
      const onChangePasswordConfirm = (e) => {
        const currentPasswordConfirm = e.target.value;
        setPasswordConfirm(currentPasswordConfirm);
        if (password !== currentPasswordConfirm) {
          setPasswordConfirmMessage("비밀번호를 동일하게 입력해주세요:(");
          setIsPasswordConfirm(false);
        } else {
          setPasswordConfirmMessage("동일한 비밀번호를 입력했습니다:)");
          setIsPasswordConfirm(true);
        }
      };

    //button을 눌렀을떄 Login페이지로 이동하기 
    const goLogin = () => {
        naviagte("/login")
    }

    const [allCheck,setAllCheck] = useState(false);
    const [serviceCheck, setServiceCheck]=useState(false);
    const []=useState(false);
    const []=useState(false);
    const []=useState(false);
    const []=useState(false);



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
                            name = "userName" 
                            className={isName?'input-style success':'input-style'} 
                            placeholder='이름'
                            value={name}
                            onChange={onChangeName}
                            />
                        <div className={isName?'input-message success':'input-message'}>{nameMessage}</div>   
                    </div>
                    <div>
                        <input 
                            className={isPhone?'input-style success':'input-style'}
                            name='phoneNum' 
                            placeholder='휴대폰 번호'
                            value={phone} 
                            onChange={addHyphen}
                            
                            />
                        <div className={isPhone?'input-message success' : 'input-message'}>{phoneMessage}</div> 
                    </div>
                    <div>
                        <input 
                            className={isBirth?'input-style success':'input-style'}
                            id='birth'
                            name='birth'
                            placeholder='생년월일 예)YYYYMMDD'
                            value={birth}
                            onChange={onChangeBirth}
                            />
                        <div className={isBirth?'input-message success' : 'input-message'}>{birthMessage}</div> 
                    </div>
                    <div>
                        <input 
                            id='id-input'
                            className={isId?'input-style success':'input-style'}
                            name='id'
                            placeholder='아이디(영문 또는 숫자 4-12자)'
                            value={id} 
                            onChange={onChangeId}
                        />
                        <div className={isId?'input-message success' : 'input-message'}>{idMessage}</div> 
                    </div>
                    <div>
                        <input 
                            className={isPassword?'input-style success':'input-style'}
                            type="password"
                            id='password' 
                            name='password'
                            placeholder='비밀번호 (영문 소문자, 숫자, 특수문자 조합 8-16자)'
                            value={password}
                            onChange={onChangePassword}
                            
                        />
                        <div className={isPassword?'input-message success' : 'input-message'}>{passwordMessage}</div> 
                    </div>
                    <div>
                        <input 
                            className={isPasswordConfirm?'input-style success':'input-style'}
                            id='passwordConfirm'
                            name='passwordConfirm'
                            type="password"
                            placeholder='비밀번호 확인'
                            value={passwordConfirm}
                            onChange={onChangePasswordConfirm}
                        />
                        <div className={isPasswordConfirm?'input-message success' : 'input-message'}>{passwordConfirmMessage}</div> 
                    </div>
                    
                </div>
                <div className='check-box-style'>
                    <h3>오삼록 회원 약관</h3>
                    <CheckBox/>
                </div>
                <div>
                  {/* 스타일 적용해주기 꼭 !!! */}
                    <button className='signup-button'>동의하고 가입</button>
                    <p className='notice-style'>가입 필수 정보 및 약관을 모두 확인해주세요</p>
                </div>

            </div>
        </div>    
    )
}
export default Signup;