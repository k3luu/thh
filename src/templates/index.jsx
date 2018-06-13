import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import Drawer from '../layouts/Drawer/Drawer';
import Navigation from '../components/Navigation/Navigation';
import SiteWrapper from '../layouts/SiteWrapper/SiteWrapper';
import Footer from '../components/Footer/Footer';
import MainHeader from '../layouts/MainHeader/MainHeader';
import MainNav from '../layouts/MainNav/MainNav';
import BlogLogo from '../components/BlogLogo/BlogLogo';
import MenuButton from '../components/MenuButton/MenuButton';
import PageTitle from '../components/PageTitle/PageTitle';
import PageDescription from '../components/PageDescription/PageDescription';
import PaginatedContent from '../layouts/PaginatedContent/PaginatedContent';
import Home from '../components/Home/Home';

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
    const {
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pathContext;
    const authorsEdges = this.props.data.authors.edges;

    console.log('index', this.props);

    return (
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
              <Headroom style={{ zIndex: 3 }}>
                <MainNav overlay={config.siteCover} home>
                  <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                  <MenuButton
                    navigation={config.siteNavigation}
                    onClick={this.handleOnClick}
                  />
                </MainNav>
              </Headroom>

              <div className="main-header-content inner">
                <PageTitle
                  logo={config.siteLogoName}
                  title={config.siteTitle}
                />
                <PageDescription text={config.siteDescription} />
              </div>

              <Link
                className="scroll-down icon-arrow-left"
                to="home"
                data-offset="-45"
                spy
                smooth
                duration={500}
              >
                <span className="hidden">Scroll Down</span>
              </Link>
            </MainHeader>

            {/*<PaginatedContent page={page} pages={pages} total={total} limit={limit} prev={prev} next={next}>*/}
            {/*/!* PostListing component renders all the posts *!/*/}
            {/*<PostListing postEdges={nodes} postAuthors={authorsEdges} />*/}
            {/*</PaginatedContent>*/}
            <Home config={config} nodes={nodes} authorsEdges={authorsEdges} />
          </div>

          {/* The tiny footer at the very bottom */}
          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
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
