import styled from "styled-components";
import CommentList from "./CommentList";
import InputComment from "./InputComment";

function CommentBox() {

  return (
    <CommentContainer>
      {/* 댓글 입력 컴포넌트 */}
      <InputComment />
      <CommentList />
    </CommentContainer>
  )
}

// css
const CommentContainer = styled.div`
  width: 100%;
`

export default CommentBox;