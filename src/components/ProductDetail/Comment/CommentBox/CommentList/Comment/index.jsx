import axios from "axios";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Comment(props) {

  const { id, user_id, account, content, image_url, rate, date } = props.comment;

  const location = useLocation();
  const inputValue = useRef();

  const token = localStorage.getItem('token');
  const LSAccount = localStorage.getItem('account');
  const [modifyView, setModifyView] = useState(false);

  let userId = account.substr(0, 3) + '***';

  const deleteComment = () => {
    if(confirm('댓글을 삭제 하시겠습니까?')){
      axios.delete(`http://localhost:10010${location.pathname}?reviewId=${id}`, {
        headers: {
          Authorization: token,
        }
      })
      .then(()=>{
        alert('댓글이 삭제 되었습니다.');
        window.location.replace(`${location.pathname}`);
      })
      .catch(error => console.log('에러', error));
    } else {
      alert('수정 안했잖아. 수정하고 다시 누르자.');
    }
  };

  const modifyComment = () => {
    if(inputValue.current.value !== content){
      if(inputValue.current.value.length > 60){
        alert('리뷰 글자 수는 최대 60자입니다.');
      } else{
        if(confirm('수정 하사겠습니까?')){
          axios.patch(`http://localhost:10010${location.pathname}?reviewId=${id}`, {
            content: inputValue.current.value,
          },
          {
            headers: {
              Authorization: token,
            }
          })
          inputValue.current.value = '';
          window.location.replace(`${location.pathname}`);
        }
      }
    } else {
      alert('수정하고 다시 누르자')
    }
  }

  const onKeyDown = (e) => {
    if(e.key === 'Enter'){
      modifyComment();
    }
  }

  console.log(LSAccount);

  return (
    <CommentInfo>
      <CommentLeft>
        <Date>{date}</Date>
        <Rate>평점: {rate}</Rate>
      </CommentLeft>
      <CommentRight>
        <CustomerId>{userId}</CustomerId>
        {modifyView ? (
          <ModifyBox>
            <ModifyInput type={"text"} defaultValue={content} ref={inputValue} onKeyDown={onKeyDown} />
            <ModifyBtn onClick={modifyComment}>수정</ModifyBtn>
            <ModifyCancleBtn onClick={()=>{
              let cancle = confirm('댓글 수정을 취소 하시겠습니까?');
              if(cancle){
                setModifyView(false);
              }
            }}>취소</ModifyCancleBtn>
          </ModifyBox>
        ) : (
          <>
            <Contents>{content}</Contents>
            {/* {image_url && <CommentImg image_url={image_url} />} */}
          </>
        )}
      </CommentRight>
      {LSAccount && LSAccount === account && (
        <>
          <Modify onClick={()=>{setModifyView(true)}} />
          <DeleteComment onClick={deleteComment} />
        </>
      )}
    </CommentInfo>
  );
};

const CommentInfo = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 128px;
  border-bottom: 1px solid #ececec;
  padding: 30px 0;

  &:nth-child(1){
    border-top: 1px solid #ececec;
  }
`

const CommentLeft = styled.span`
  width: 152px;
  padding-left: 20px;
`

const Date = styled.div`
  font-size: 16px;
  color: #b0b0b0;
`

const Rate = styled.div`
  margin-top: 15px;
  font-size: 16px;
  color: #b0b0b0;
`;

const CommentRight = styled.span`
  width: calc(100% - 152px);
  font-size: 17px;
  color: #7e7e7e;
`

const CustomerId = styled.div`
  color: #6c801a;
`

const ModifyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 40px;
`

const ModifyInput = styled.input`
  width: 400px;
  height: 30px;
  margin-top: 10px;
  border: 1px solid #ececec;
  border-radius: 5px;
  font-size: 15px;
  color: #7e7e7e;
`

const ModifyBtn = styled.button`
  width: 40px;
  height: 30px;
  margin-top: 10px;
  padding: 0;
  border: 1px solid #ececec;
  border-radius: 5px;
  font-size: 14px;
  color: #6c801a;
  background: none;
  cursor: pointer;
`

const ModifyCancleBtn = styled.button`
  width: 40px;
  height: 30px;
  margin-top: 10px;
  padding: 0;
  border: 1px solid #ececec;
  border-radius: 5px;
  font-size: 14px;
  color: red;
  background: none;
  cursor: pointer;
`

const Contents = styled.div`
  display: flex;
  align-items: center;
  min-height: 30px;
  margin-top: 10px;
`

const Modify = styled.div`
  position: absolute;
  top: 30px;
  right: 50px;
  width: 15px;
  height: 15px;
  background: url('https://cdn-icons-png.flaticon.com/512/1159/1159633.png');
  background-size: cover;
  cursor: pointer;
`

const DeleteComment = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 15px;
  height: 15px;
  background: url('https://cdn-icons-png.flaticon.com/512/1214/1214428.png');
  background-size: cover;
  cursor: pointer;
`
  // const CommentImg = styled.div`
  // display: flex;
  // height: 250px;
  // margin-top: 15px;
  // background: url(${props => props.image_url}) center center no-repeat;
  // background-position: left top;
  // `

export default Comment;