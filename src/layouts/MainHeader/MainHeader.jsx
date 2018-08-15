import React from 'react';
import { Box, Image } from 'gestalt';
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
        <Box height="100vh" width="100%">
          <Image
            alt="Header"
            naturalHeight={1}
            naturalWidth={1}
            fit="cover"
            src={cover}
            color="#172121"
          >
            {children}
          </Image>
        </Box>
      </header>
    );
  }
}

export default MainHeader;
