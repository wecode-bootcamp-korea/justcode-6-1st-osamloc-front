import styled from "styled-components";

function CommentInfo(props) {

  const { commentList } = props;

  return (
    <div>
      <Null />
      <ReviewContainer>
        <div>
          <Title>
            고객댓글
          </Title>
          <SubTitle>
            상품에 대한 의견들을 확인해보세요.
          </SubTitle>
        </div>
        <ReviewInfoBottom>
          <div>
            <LeftTitle>
              마스터 블렌드
            </LeftTitle>
            <LeftTxt>
              <Strong>총 {commentList.length}개</Strong>의 댓글이 있습니다.
            </LeftTxt>
          </div>
          <InfoRight>
            <RightScore>
              댓글 평점
            </RightScore>
            <RightNum>
              4.7
            </RightNum>
          </InfoRight>
        </ReviewInfoBottom>
      </ReviewContainer>
    </div>
  )
};

// css
const Null = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid #ececec;
  background: #fbfbfa;
`;

const ReviewContainer = styled.div`
  height: 360px;
  width: 100%;
  padding-top: 90px;
  border-bottom: 1px solid #ececec;
`;

const Title = styled.div`
  font-size: 40px;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 18px;
  text-align: center;
  margin: 20px 0 80px 0;
`;

const ReviewInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1148px;
  margin: auto;
`;

const LeftTitle = styled.div`
  font-size: 32px;
`;

const LeftTxt = styled.div`
  display: flex;
  height: 33px;
  margin-top: 13px;
  font-size: 22px;
  color: #9e9e9e;
`;

const Strong = styled.strong`
  color: #fd5c5c;
`;

const InfoRight = styled.div`
  text-align: right;
`;

const RightScore = styled.div`
  padding: 5px 0;
  font-size: 20px;
  font-weight: 900;
  color: #313131;
`;

const RightNum = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 58px;
  font-size: 50px;
  font-weight: 900;
  color: #6c801a;
`;

export default CommentInfo;