import React from "react";
import Helmet from "react-helmet";
import { ThemeProvider } from "styled-components";
import { Link } from "react-scroll";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import BannerTitle from "../components/BannerTitle/BannerTitle";
import PageHeader from "../components/PageHeader/PageHeader";
import PageDescription from "../components/PageDescription/PageDescription";
import Home from "../components/Home/Home";
import Modal from "../components/Modal/Modal";

class IndexTemplate extends React.Component {
  state = {
    menuOpen: false
  };

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

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { nodes } = this.props.pathContext;

    // console.log('INDEX', this.props);

    return (
      <ThemeProvider theme={config.breakpoints}>
        <Drawer className="home-template" isOpen={this.state.menuOpen}>
          <Helmet title={config.siteTitle} />
          <SEO postEdges={nodes} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />

          <SiteWrapper>
            {/* All the main content gets inserted here */}
            <div className="home-template">
              {/* The big featured header */}
              <MainHeader cover={config.siteCover}>
                <MainNav onClick={this.handleOnClick} />

                <div className="main-header-content inner">
                  <PageHeader
                    logo={config.siteLogoName}
                    title={config.siteTitle}
                  />
                  <PageDescription text={config.siteDescription} />
                </div>

                <Link
                  className="scroll-down icon-arrow-left"
                  to="home"
                  offset={-30}
                  spy
                  smooth
                  duration={500}
                >
                  <span className="hidden">Scroll Down</span>
                </Link>
              </MainHeader>

              <div id="home">
                <BannerTitle title="Your Guide Through the Great Outdoors" />

                <Modal />
                
                <Home config={config} nodes={nodes} />
              </div>
            </div>

            {/* The tiny footer at the very bottom */}
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

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    # posts data comes from the context
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          id
          name
          image
          url
          bio
        }
      }
    }
  }
`;

export default IndexTemplate;
