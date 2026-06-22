import "./Pagination.scss";

type PaginationItem = number | "...";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const getPaginationItems = (
  currentPage: number,
  totalPages: number,
): PaginationItem[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const paginationItems = getPaginationItems(currentPage, totalPages);

  const handlePageChange = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return;

    onPageChange(page);
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination__arrow"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        ←
      </button>

      {paginationItems.map((item, index) =>
        item === "..." ? (
          <span key={`dots-${index}`} className="pagination__dots">
            ...
          </span>
        ) : (
          <button
            key={item}
            className={`pagination__button ${
              currentPage === item ? "pagination__button--active" : ""
            }`}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </button>
        ),
      )}

      <button
        className="pagination__arrow"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        aria-label="Next page"
      >
        →
      </button>
    </nav>
  );
};
