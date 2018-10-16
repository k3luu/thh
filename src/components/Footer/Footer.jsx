import React, { Component } from 'react';
import { Link } from 'gatsby';
import './Footer.css';

class Footer extends Component {
  render() {
    const PoweredBy = props => {
      const { show } = props;
      if (show) {
        return (
          <section className="poweredby">
            Proudly published with <a href="https://gatsbyjs.org">Gatsby</a>
          </section>
        );
      }
      return null;
    };

    const Contact = props => {
      const { show } = props;
      if (show) {
        return (
          <section className="poweredby">
            <Link to="/contact">Contact Us</Link>
          </section>
        );
      }
      return null;
    };

    const { promoteGatsby, darkBackground } = this.props;
    const { label, url, year } = this.props.copyright;
    return (
      <footer
        className={
          darkBackground
            ? 'site-footer clearfix dark-background'
            : 'site-footer clearfix'
        }
      >
        <section className="copyright">
          <a href={url || '/'}>{label}</a> &copy;{' '}
          {year || new Date().getFullYear()} |{' '}
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </section>
        <PoweredBy show={promoteGatsby} />
        <Contact show />
      </footer>
    );
  }
}

export default Footer;
