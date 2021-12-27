/* eslint-disable jsx-a11y/anchor-is-valid */
import './pagination.css';

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const cardNumbers = [];

  // Find number of pages required
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    cardNumbers.push(i);
  }

  return (
    <nav id="pagination-nav">
      <ul className="pagination-list">
        {cardNumbers.map((cardNumber, index) => (
          <li key={index} className="pagination-list-item">
            <a
              onClick={() => paginate(cardNumber)}
              href="#search-results-section"
              className={
                'page-btn ' + (currentPage === cardNumber ? 'current-page' : '')
              }
            >
              {cardNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
