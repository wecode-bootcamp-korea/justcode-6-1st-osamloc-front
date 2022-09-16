import axios from "axios";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Comment(props) {

  const { id, user_id, account, content, image_url, rate, date } = props.comment;

  const location = useLocation();
  const token = localStorage.getItem('token');
  const LSAccount = localStorage.getItem('account');

  const CommentImg = styled.div`
  display: flex;
  height: 250px;
  margin-top: 15px;
  background: url(${props => props.image_url}) center center no-repeat;
  background-position: left top;
  `

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
      .catch(error => console.log('에러', error))
    }
  }

  let userId = account.substr(0, 3) + '***';

  return (
    <CommentInfo>
      <CommentLeft>
        <Date>{date}</Date>
        <Rate>평점: {rate}</Rate>
      </CommentLeft>
      <CommentRight>
        <CustomerId>
          {userId}
        </CustomerId>
        <Contents>
          {content}
        </Contents>
        {/* {image_url && <CommentImg image_url={image_url} />} */}
      </CommentRight>
      {LSAccount === account && <DeleteComment onClick={deleteComment} />}
    </CommentInfo>
  )
}

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

const Contents = styled.div`
  display: flex;
  align-items: center;
  min-height: 30px;
  margin-top: 10px;
`

const DeleteComment = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 24px;
  height: 24px;
  background: url('https://cdn-icons-png.flaticon.com/512/1214/1214428.png');
  background-size: cover;
  cursor: pointer;
`

export default Comment;