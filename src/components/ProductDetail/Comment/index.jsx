import "./index.scss";
import CommentInfo from "./CommentInfo";
import CommentBox from "./CommentBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Comment() {

  const location = useLocation();
  const [commentList, setCommentList] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:10010${location.pathname}`)
    .then(res => setCommentList(res.data.data.reviews))
  }, [])

  return (
    <div className="boxsize">
      <CommentInfo commentList={commentList} />
      <CommentBox />
    </div>
  )
};

export default Comment;