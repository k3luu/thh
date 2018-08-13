import React from 'react';
import PaginationLink from '../PaginationLink/PaginationLink';
import './Pagination.css';

class Pagination extends React.Component {
  render() {
    const { page, pages, prev, next } = this.props;
    return (
      <nav className="pagination">
        <PaginationLink
          className="newer-posts"
          url={prev}
          text={<i className="fa fa-caret-left" />}
        />
        <span className="page-number">
          {/*Page {page} of {pages}*/}
          {page} of {pages}
        </span>
        <PaginationLink
          className="older-posts"
          url={next}
          text={<i className="fa fa-caret-right" />}
        />
      </nav>
    );
  }
}

export default Pagination;
