import React from "react";
import Helmet from "react-helmet";
import { ThemeProvider } from "styled-components";
import config from "../../data/SiteConfig";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import BannerTitle from "../components/BannerTitle/BannerTitle";
import Calendar from "../components/Calendar/Calendar";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

class EventsPage extends React.Component {
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
      <ThemeProvider theme={config.breakpoints}>
        <Drawer className="author-template" isOpen={this.state.menuOpen}>
          <Helmet title={`Events | ${config.siteTitle}`} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />

          <SiteWrapper>
            <MainHeader className="post-head" cover={config.eventCover}>
              <MainNav onClick={this.handleOnClick} />
            </MainHeader>

            <BannerTitle
              title="Events"
              desc="Join us as we hit the trails! Check our calendar of events for more
                details"
            />

            <div className="main-content">
              <Calendar />
            </div>

            <Footer
              copyright={config.copyright}
              promoteGatsby={config.promoteGatsby}
            />
          </SiteWrapper>
        </Drawer>
      </ThemeProvider>
    );
  }
}

export default EventsPage;
