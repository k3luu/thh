import React from 'react';
import './PostFormatting.css';

class PostFormatting extends React.Component {
  render() {
    const { children, className, style } = this.props;
    return (
      <article className={className} style={style}>
        {children}
      </article>
    );
  }
}

export default PostFormatting;
