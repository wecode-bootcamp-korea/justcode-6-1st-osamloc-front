import "./index.scss";
import styled from "styled-components";
import { useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function InputComment() {

  const location = useLocation();
  const inputValue = useRef();
  const token = localStorage.getItem('token');

  const addComment = () => {
    if(inputValue.current.value.length > 60){
      alert('리뷰 글자 수는 60자가 최대입니다.');
    } else{
      axios.post(`http://localhost:10010${location.pathname}`, {
        content: inputValue.current.value,
        rate: 5,
      },
      {
        headers: {
          Authorization: token,
        }
      })
      inputValue.current.value = '';
      window.location.replace(`${location.pathname}`);
    }
  };
  
  const onKeyDown = (e) => {
    if(e.key === 'Enter'){
      addComment();
    }
  }
  
  return (
    <InputCommentBox>
      <InputTxt placeholder="댓글을 입력해주세요.." type="text" ref={inputValue} onKeyDown={onKeyDown} />
      <InputBtn onClick={addComment}>게시</InputBtn>
    </InputCommentBox>
  )
}

// css
const InputCommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  height: 120px;
  margin: 50px auto;
`

const InputTxt = styled.input`
  position: relative;
  width: 750px;
  height: 80px;
  border: 1px solid #313131;
  border-radius: 3px;
  margin-right: 20px;
  padding: 15px;
  background: #ffffff;
  font-size: 15px;
  
    &:hover {
      border: 1px solid #6c801a;
    }
`

const InputBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  height: 80px;
  cursor: pointer;
  font-size: 15px;
  color: #313131;
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #313131;

    &:hover {
      border: 1px solid #6c801a;
      color: #6c801a;
    };
`

export default InputComment;