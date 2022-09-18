import styled from "styled-components";

function Pagination(props) {

  const { reviewLength, limit, pageNum, setPageNum, offset } = props;

  const numPages = Math.ceil(reviewLength / limit);
  const pageLength = 
    Array(numPages)
    .fill()
    .map((_, i) => {
      return i;
    });

  return (
    <Nav className="pagination">
      <Button onClick={() => setPageNum(pageNum - 1)} disabled={pageNum === 1}>
        &lt;
      </Button>
      {pageLength.map((_, i) => (
        <InnerButton
          key={i + 1}
          onClick={() => setPageNum(i + 1)}
          aria-current={pageNum === i + 1 ? "pageNum" : null}
        >
          {i + 1}
        </InnerButton>
      ))}
      <Button onClick={() => setPageNum(pageNum + 1)} disabled={pageNum === numPages}>
        &gt;
      </Button>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  font-family: "Arita-dotum-Medium";
  width: 50px;
  height: 50px;
  border: 1px solid #e1e1e1;
  padding: 0;
  margin: 0 24px;
  color: #999;
  font-size: 20px;
  font-weight: 100;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    cursor: revert;
  }

  &[aria-current] {
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const InnerButton = styled.button`
  font-family: "Arita-dotum-Medium";
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  padding: 0;
  margin: 0 8px;
  color: #999;
  font-size: 20px;
  font-weight: 100;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    cursor: revert;
  }
  
  &[aria-current] {
    background-color: #f5f5f5;
    color: black;
    cursor: revert;
  }
`;

export default Pagination;
