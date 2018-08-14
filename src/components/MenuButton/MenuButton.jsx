import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Container = styled.div`
  color: #fff;
  background: transparent;
  border-width: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  height: 38px;
  line-height: 35px;
  padding: 5px;
  opacity: 1;
  text-align: center;
  transition: all 0.5s ease;

  ${breakpoint('sm')`
    display: none;
  `};

  &:before {
    content: '\\f609';
    font-size: 20px;
    font-weight: bold;
    margin-right: 6px;
    position: relative;
    top: 1px;
  }
`;

class MenuButton extends Component {
  render() {
    const { navigation, onClick } = this.props;
    if (navigation && onClick) {
      return <Container className="menu-button icon-menu" onClick={onClick} />;
    }
    return null;
  }
}

export default MenuButton;
