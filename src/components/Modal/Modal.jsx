import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const CloseIcon = styled.i`
  position: absolute;
  right: 0;
  padding: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
`;

class Modal extends React.Component {
  render() {
    const { children, onClose } = this.props;
    return (
      <Dialog {...this.props}>
        <CloseIcon className="fa fa-times" onClick={onClose} />
        <Content>{children}</Content>
      </Dialog>
    );
  }
}

export default Modal;
