import React, { Component } from 'react';
import Link from 'gatsby-link';
import './BlogLogo.css';

class BlogLogo extends Component {
  render() {
    const { logo, url, title } = this.props;
    if (logo) {
      return (
        <Link className="blog-logo" to={url || '/'}>
          {/* style={{ boxShadow: "none" }}> */}
          <img src={logo} alt={title} />
          <div>Home</div>
        </Link>
      );
    }
    return null;
  }
}

export default BlogLogo;
