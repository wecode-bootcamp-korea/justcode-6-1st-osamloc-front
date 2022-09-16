import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Comment from "./Comment";

function CommentList(props) {

  const location = useLocation();

  const [commentList, setCommentList] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:10010${location.pathname}/review`)
    .then(res => setCommentList(res.data.review))
    .catch(error => console.log(error))
  }, []);

  return(
    <CommentsBox>
      {commentList.map(comment => <Comment key={comment.id} comment={comment} />)}
    </CommentsBox>
  )
}

const CommentsBox = styled.div`
  width: 845px;
  margin: 0 auto 50px auto;
`

export default CommentList;