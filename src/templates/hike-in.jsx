import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import config from '../../data/SiteConfig';
import SiteWrapper from '../layouts/SiteWrapper/SiteWrapper';
import MainHeader from '../layouts/MainHeader/MainHeader';
import MainNav from '../layouts/MainNav/MainNav';
import Drawer from '../layouts/Drawer/Drawer';
import Navigation from '../components/Navigation/Navigation';
import BannerTitle from '../components/BannerTitle/BannerTitle';
import PageDescription from '../components/PageDescription/PageDescription';
import PaginatedContent from '../layouts/PaginatedContent/PaginatedContent';
import PostListing from '../components/PostListing/PostListing';
import Footer from '../components/Footer/Footer';

class HikeInPage extends React.Component {
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
    const {
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pageContext;

    return (
      <ThemeProvider theme={config.breakpoints}>
        <Layout location={location}>
          <Drawer className="author-template" isOpen={this.state.menuOpen}>
            <Helmet title={`Camp Hike-In | ${config.siteTitle}`} />

            {/* The blog navigation links */}
            <Navigation config={config} onClose={this.handleOnClose} />

            <SiteWrapper>
              <MainHeader className="post-head" cover={config.hikeInCover}>
                <MainNav onClick={this.handleOnClick} />
              </MainHeader>

              <BannerTitle
                title="Camp Hike-In"
                desc="Whether it's for a solo trip, or a group of your best friends,
                find the trail camp that best suits you!"
              />

              <div className="main-content">
                <PaginatedContent
                  page={page}
                  pages={pages}
                  total={total}
                  limit={limit}
                  prev={prev}
                  next={next}
                >
                  {/* PostListing component renders all the posts */}
                  <PostListing
                    postEdges={nodes}
                    postAuthors={this.props.data.authors.edges}
                    columns={3}
                    description="details"
                    campListing
                  />
                </PaginatedContent>
              </div>

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

// /* eslint no-undef: "off" */
export const pageQuery = graphql`
  query hikeInQuery {
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

export default HikeInPage;
