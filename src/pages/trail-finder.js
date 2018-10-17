import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import config from '../../data/SiteConfig';
import SiteWrapper from '../layouts/SiteWrapper/SiteWrapper';
import MainHeader from '../layouts/MainHeader/MainHeader';
import MainNav from '../layouts/MainNav/MainNav';
import BannerTitle from '../components/BannerTitle/BannerTitle';
import Drawer from '../layouts/Drawer/Drawer';
import Navigation from '../components/Navigation/Navigation';
import TrailFinder from '../components/Trails/TrailFinder';
import Footer from '../components/Footer/Footer';

class TrailsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { location } = this.props;

    return (
      <ThemeProvider theme={config.breakpoints}>
        <Layout location={location}>
          <Drawer className="author-template" isOpen={this.state.menuOpen}>
            <Helmet title={`Trail Finder | ${config.siteTitle}`} />

            {/* The blog navigation links */}
            <Navigation config={config} onClose={this.handleOnClose} />

            <SiteWrapper>
              <MainHeader className="post-head" cover={config.finderCover}>
                <MainNav onClick={this.handleOnClick} />
              </MainHeader>

              <BannerTitle
                title="Trail Finder"
                desc="Find a trail that best suits you based on your personal interest and
            level of experience!"
              />

              <TrailFinder />

              <Footer
                copyright={config.copyright}
                promoteGatsby={config.promoteGatsby}
              />
            </SiteWrapper>
          </Drawer>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default TrailsPage;
