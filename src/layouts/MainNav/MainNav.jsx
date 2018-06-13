import React from 'react';
import Headroom from 'react-headroom';
import classNames from 'classnames';
import './MainNav.css';

class MainNav extends React.Component {
  render() {
    const { children, className } = this.props;
    const formatting = ['overlay'];
    const classes = classNames('main-nav', formatting, className);

    return (
      <Headroom style={{ zIndex: 3 }}>
        <nav className={classes}>{children}</nav>
      </Headroom>
    );
  }
}

export default MainNav;
