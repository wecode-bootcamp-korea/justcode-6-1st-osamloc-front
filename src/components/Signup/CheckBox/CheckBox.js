import React, { useEffect, useState } from 'react';

function CheckBox(){

    const[allCheck, setAllCheck] = useState(false)
    const[serviceCheck, setServiceCheck]=useState(false)
    const[privacyCollection, setPrivacyCollection]=useState(false)
    const[privacyUse,setPrivacyUse]=useState(false)
    const[privacyOffer,setPrivacyOffer]=useState(false)
    const[privacyTransfer,setPrivacyTransfer]=useState(false)

    const allBtnEvent = ()=>{
        if(allCheck === false){
            setAllCheck(true);
            setServiceCheck(true);
            setPrivacyCollection(true);
            setPrivacyUse(true);
            setPrivacyOffer(true);
            setPrivacyTransfer(true);
        }else{
            setAllCheck(false);
            setServiceCheck(false);
            setPrivacyCollection(false);
            setPrivacyUse(false);
            setPrivacyOffer(false);
            setPrivacyTransfer(false);
        }
    };
    const serviceBtnEvent=()=>{
        if(serviceCheck === false){
            setServiceCheck(true)
        }else{
            setServiceCheck(false)
        }
    }
    const collectionBtnEvent=()=>{
        if(privacyCollection === false){
            setPrivacyCollection(true)
        }else{
            setPrivacyCollection(false)
        }
    }
    const useBtnEvent=()=>{
        if(privacyUse === false){
            setPrivacyUse(true)
        }else{
            setPrivacyUse(false)
        }
    }
    const offerBtnEvent=()=>{
        if(privacyOffer === false){
            setPrivacyOffer(true)
        }else{
            setPrivacyOffer(false)
        }
    };
    const transferBtnEvent=()=>{
        if(privacyTransfer === false){
            setPrivacyTransfer(true)
        }else{
            setPrivacyTransfer(false)
        }

    };

    useEffect(()=>{
        if(serviceCheck === true && privacyCollection ===true && privacyUse === true && privacyOffer === true && privacyTransfer === true){
            setAllCheck(true)
        }else{
            setAllCheck(false)
        }
    },[serviceCheck,privacyCollection,privacyUse,privacyOffer,privacyTransfer])


    
    return(
        <div>
            <div className='check-box-style'>
                        <input type="checkbox" checked={allCheck} onChange={allBtnEvent}/>
                        <label htmlFor="all-check"> 전체 약관에 모두 동의합니다.</label>
             </div>
             <div className='check-box-style'>
                        <input type="checkbox" checked = {serviceCheck} onChange={serviceBtnEvent}/>
                        <label htmlFor="service-check"> [필수] 오삼록 서비스 이용약관</label>
             </div>
             <div className='check-box-style'>
                        <input type="checkbox" checked = {privacyCollection} onChange={collectionBtnEvent}/>
                        <label htmlFor="scales"> [필수] 개인정보 수집 동의(오삼록)</label>
             </div>
             <div className='check-box-style'>
                        <input type="checkbox" checked = {privacyUse} onChange ={useBtnEvent}/>
                        <label htmlFor="scales"> [선택] 개인정보 수집/이용 동의(오삼록)</label>
             </div>
             <div className='check-box-style'>
                        <input type="checkbox" checked = {privacyOffer} onChange = {offerBtnEvent}/>
                        <label htmlFor="scales"> [선택] 개인정보 제공동의(오삼록)</label>
             </div>
             <div className='check-box-style'>
                        <input type="checkbox" checked = {privacyTransfer} onChange = {transferBtnEvent}/>
                        <label htmlFor="scales"> [선택] 개인정보 국외이전 동의(오삼록)</label>
             </div>

             <div>
                    <button className= {(serviceCheck&&privacyCollection)?'signup-button success':'signup-button'}>동의하고 가입 </button>
                    <p className='notice-style'>가입 필수 정보 및 약관을 모두 확인해주세요</p>
             </div>
        </div>
    )
}

export default CheckBox;