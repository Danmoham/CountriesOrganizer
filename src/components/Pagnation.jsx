import "bootstrap/dist/css/bootstrap.css";
export const Pagination = ({
  setCurrentPage,
  currentPage,
  totalPosts,
  postsPerPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePageClick = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h4 className="align-text">Current Page {currentPage}</h4>
      <div className="pagination">
        {pages.map((page, index) => (
          <button
            className="btn btn-light"
            key={index}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
