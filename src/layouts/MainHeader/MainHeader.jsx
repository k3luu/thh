import React from 'react';
import classNames from 'classnames';
import './MainHeader.css';

class MainHeader extends React.Component {
  render() {
    const { children, cover } = this.props;

    const classes = classNames(
      'main-header arrow-radial',
      this.props.className,
      {
        'no-cover': !cover
      }
    );

    return (
      <header className={classes}>
        <div
          className="main-header__photo"
          style={{ backgroundImage: `url("${cover}")` }}
        >
          {children}
        </div>
      </header>
    );
  }
}

export default MainHeader;
