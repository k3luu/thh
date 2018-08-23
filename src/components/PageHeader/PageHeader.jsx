import React from 'react';
import { Box, Image } from 'gestalt';
import './PageHeader.css';

class PageHeader extends React.Component {
  render() {
    const { logo, title } = this.props;
    if (logo) {
      return (
        <div className="page-header">
          <Image
            alt={title}
            naturalHeight={512}
            naturalWidth={546}
            fit="contain"
            src={logo}
          />
        </div>
      );
    }
    return null;
  }
}

export default PageHeader;
