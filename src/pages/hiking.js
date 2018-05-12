import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import SiteWrapper from '../layouts/SiteWrapper/SiteWrapper';
import MainHeader from '../layouts/MainHeader/MainHeader';
import MainNav from '../layouts/MainNav/MainNav';
import BlogLogo from '../components/BlogLogo/BlogLogo';
import MenuButton from '../components/MenuButton/MenuButton';
import Drawer from '../layouts/Drawer/Drawer';
import Navigation from '../components/Navigation/Navigation';
import Hiking from '../components/Hiking/Hiking';
import Footer from '../components/Footer/Footer';

class HikingPage extends React.Component {
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
    return (
      <Drawer className="author-template" isOpen={this.state.menuOpen}>
        <Helmet title={`Hiking Fundamentals | ${config.siteTitle}`} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeader className="post-head" cover={config.hikingCover}>
            <MainNav>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton navigation={config.siteNavigation} onClick={this.handleOnClick} />
            </MainNav>
          </MainHeader>

          <Hiking />
          <Footer copyright={config.copyright} promoteGatsby={config.promoteGatsby} />
        </SiteWrapper>
      </Drawer>
    );
  }
}

export default HikingPage;
