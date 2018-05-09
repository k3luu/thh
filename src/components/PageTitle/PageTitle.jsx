import React from 'react';
import './PageTitle.css';

class PageTitle extends React.Component {
  render() {
    const { logo, title } = this.props;
    if (logo) {
      return (
        <h1 className="page-title">
          <img src={logo} alt={title} />
        </h1>
      );
    }
    return null;
  }
}

export default PageTitle;
