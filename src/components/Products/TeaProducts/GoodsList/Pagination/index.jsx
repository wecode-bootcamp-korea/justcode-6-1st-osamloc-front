function Pagination() {
  return (
    <div id="pagination" className="newPagination for-mobile ">
      <span className="btn btn-home is-disabled">페이지 처음으로</span>
      <span className="btn btn-prev is-disabled">이전 페이지</span>

      <Link to={""} className="num on">
        1
      </Link>
      <Link to={""} className="num ">
        2
      </Link>
      <Link to={""} className="num ">
        3
      </Link>
      <Link to={""} className="num ">
        4
      </Link>

      <span className="btn btn-next is-disabled">다음 페이지</span>
      <span className="btn btn-end is-disabled">페이지 끝으로</span>
    </div>
  );
}

export default Pagination;
