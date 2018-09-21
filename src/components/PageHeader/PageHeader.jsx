import React from 'react';
import './PageHeader.css';

class PageHeader extends React.Component {
  render() {
    const { logo, title } = this.props;
    if (logo) {
      return (
        <div
          className="page-header"
          style={{ backgroundImage: `url(${logo})` }}
        />
      );
    }
    return null;
  }
}

export default PageHeader;
