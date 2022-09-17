import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Comment from "./Comment";
import Pagination from "./Pagination";

function CommentList(props) {

  const location = useLocation();

  const [commentList, setCommentList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [reviewLength, setReviewLength] = useState(1);
  const limit = 4;
  const offset = (pageNum - 1) * limit;

  useEffect(()=>{
    axios.get(`http://localhost:10010${location.pathname}/review`)
    .then(res => {
      setCommentList(res.data.review);
      setReviewLength(res.data.review.length);
    })
    .catch(error => console.log('에러', error))
  }, []);

  return(
    <>
      <CommentsBox>
        {commentList.slice(offset, offset + limit).map(comment => <Comment key={comment.id} comment={comment} />)}
      </CommentsBox>
      <Pagination reviewLength={reviewLength} limit={limit} offset={offset} pageNum={pageNum} setPageNum={setPageNum} />
    </>
  )
}

const CommentsBox = styled.div`
  width: 845px;
  margin: 0 auto 50px auto;
`

export default CommentList;