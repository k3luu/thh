import React, { Component } from 'react';
import Link from 'gatsby-link';
import './BlogLogo.css';

class BlogLogo extends Component {
  handleCurrTab(link) {
    if (window.location.pathname.includes(link)) return 'selected';

    return '';
  }

  render() {
    const { logo, title } = this.props;

    console.log('blog', this.props, window.location.pathname);

    if (logo) {
      return (
        <div className="header-nav">
          <Link className="blog-logo" to="/">
            <img src={logo} alt={title} />
          </Link>
          <ul className="navigation">
            <li className={this.handleCurrTab('/no-matter-the-mountain')}>
              <Link to="/no-matter-the-mountain">Campaign</Link>
            </li>
            <li className={this.handleCurrTab('trail')}>
              <Link to="/trail-guides">Trail</Link>
              <ul>
                <li>
                  <Link to="/trail-guides">Guides</Link>
                </li>
                <li>
                  <Link to="/trail-finder">Finder</Link>
                </li>
              </ul>
            </li>
            <li className={this.handleCurrTab('/fundamentals')}>
              <Link to="/fundamentals">Fundamentals</Link>
            </li>
            <li className={this.handleCurrTab('/events')}>
              <Link to="/events">Events</Link>
            </li>
            <li className={this.handleCurrTab('/about')}>
              <Link to="/about">About</Link>
            </li>
            <li className={this.handleCurrTab('/contact')}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      );
    }
    return null;
  }
}

export default BlogLogo;
