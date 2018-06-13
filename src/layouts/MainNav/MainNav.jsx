import React from 'react';
import classNames from 'classnames';
import './MainNav.css';

class MainNav extends React.Component {
  render() {
    const { children, className, home } = this.props;
    let formatting = ['overlay'];
    if (home) formatting.push('home');

    const classes = classNames('main-nav', formatting, className);

    return <nav className={classes}>{children}</nav>;
  }
}

export default MainNav;
