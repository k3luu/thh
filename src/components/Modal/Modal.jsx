import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  overflow-y: hidden;
`;

class Modal extends Component {
  constructor(p) {
    super(p);

    this.state = {};
  }

  render() {
    const {} = this.props;

    return <Container>hi</Container>;
  }
}

export default Modal;
