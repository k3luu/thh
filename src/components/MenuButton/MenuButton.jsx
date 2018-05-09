import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {
  render() {
    const { navigation, onClick } = this.props;
    if (navigation && onClick) {
      return (
        <div className="menu-button icon-menu" onClick={onClick}>
          <span className="word">Menu</span>
        </div>
      );
    }
    return null;
  }
}

export default MenuButton;
