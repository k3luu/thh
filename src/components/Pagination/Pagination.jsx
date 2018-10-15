import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import PaginationLink from '../PaginationLink/PaginationLink';
import './Pagination.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(23, 33, 33)'
    }
  },
  typography: {
    fontFamily: `'Pontano Sans', sans-serif`
  }
});

class Pagination extends React.Component {
  handleDots() {
    const { page, pages } = this.props;
    const dots = [];

    for (let i = 0; i < pages; i++) {
      if (page - 1 === i) {
        dots.push(<i key={i} className="fa fa-circle" style={{ color: 'rgb(23, 33, 33)', padding: '0 5px' }} />);
      } else {
        dots.push(<i key={i} className="fa fa-circle" style={{ color: '#CFCFCF', padding: '0 5px' }} />);
      }
    }

    return dots;
  }

  render() {
    const { prev, next } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <nav className="pagination">
          {prev ? (
            <PaginationLink className="newer-posts" url={prev}>
              <Button size="small" disabled={!prev}>
                <KeyboardArrowLeft />
                Back
              </Button>
            </PaginationLink>
          ) : (
            <Button size="small" disabled>
              <KeyboardArrowLeft />
              Back
            </Button>
          )}

          <span className="page-number">{this.handleDots()}</span>

          {next ? (
            <PaginationLink className="older-posts" url={next}>
              <Button size="small" disabled={!next}>
                Next
                <KeyboardArrowRight />
              </Button>
            </PaginationLink>
          ) : (
            <Button size="small" disabled>
              Next
              <KeyboardArrowRight />
            </Button>
          )}
        </nav>
      </MuiThemeProvider>
    );
  }
}

export default Pagination;
