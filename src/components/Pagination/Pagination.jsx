import React from 'react';
import { Link } from 'gatsby';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import './Pagination.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(23, 33, 33)'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: `'Pontano Sans', sans-serif`
  }
});

class Pagination extends React.Component {
  state = {
    pathname: '/'
  };

  componentDidMount() {
    if (window && window.location) {
      const { page } = this.props;
      let pathname = '/';

      if (page === 1) {
        pathname = window.location.pathname.replace(/\//g, '');
      } else {
        pathname = window.location.pathname.substring(
          1,
          window.location.pathname.indexOf('/', 2)
        );
      }

      this.setState({ pathname });
    }
  }

  handleDots() {
    const { page, pages } = this.props;
    const { pathname } = this.state;
    const dots = [];

    for (let i = 0; i < pages; i++) {
      if (page - 1 === i) {
        dots.push(
          <Link key={i} to={`${pathname}/${i === 0 ? '' : i + 1}`}>
            <i
              className="fa fa-circle"
              style={{ color: 'rgb(23, 33, 33)', padding: '0 5px' }}
            />
          </Link>
        );
      } else {
        dots.push(
          <Link key={i} to={`${pathname}/${i === 0 ? '' : i + 1}`}>
            <i
              className="fa fa-circle"
              style={{ color: '#CFCFCF', padding: '0 5px' }}
            />
          </Link>
        );
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
            <Link className="newer-posts" to={prev}>
              <Button size="small" disabled={!prev}>
                <KeyboardArrowLeft />
                Back
              </Button>
            </Link>
          ) : (
            <Button size="small" disabled>
              <KeyboardArrowLeft />
              Back
            </Button>
          )}

          <span className="page-number">{this.handleDots()}</span>

          {next ? (
            <Link className="older-posts" to={next}>
              <Button size="small" disabled={!next}>
                Next
                <KeyboardArrowRight />
              </Button>
            </Link>
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
