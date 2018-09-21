import React, { Component } from 'react';
import Link from 'gatsby-link';
import './PostTags.css';

class PostTags extends Component {
  render() {
    const { prefix, tags } = this.props;
    if (tags) {
      return (
        <span>
          {prefix}
          {tags.map((tag, index, arr) => (
            <span key={tag}>
              <Link key={tag} to={`/tags/${tag}`}>
                {tag}
              </Link>
              {index !== arr.length - 1 ? ', ' : ''}
            </span>
          ))}
        </span>
      );
    }
    return null;
  }
}

export default PostTags;
