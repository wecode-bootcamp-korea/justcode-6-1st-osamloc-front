import styled from "styled-components";

function Pagination(props) {

  const { total, limit, pageNum, setPageNum } = props;

  const numPages = Math.ceil(total / limit);
  const pageLength = [0, 1, 2, 3];
    // Array(numPages)
    // .fill()
    // .map((_, i) => {
    //   return i;
    // });

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
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  width: 50px;
  heigth: 50px;
  border: 1px solid #e1e1e1;
  padding: 0;
  margin: 0;
  color: #999;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    cursor: revert;
  }

  &[aria-current] {
    // background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const InnerButton = styled.button`
width: 50px;
heigth: 50px;
border: 1px solid #e1e1e1;
padding: 0;
margin: 0;
color: #999;
font-size: 14px;

&:hover {
  cursor: pointer;
}

&[disabled] {
    color: black;
    cursor: revert;
}

&[aria-current] {
  // background: deeppink;
  font-weight: bold;
  cursor: revert;
  transform: revert;
}
`;

export default Pagination;
