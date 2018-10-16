import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Drawer from '../layouts/Drawer/Drawer';
import PostListing from '../components/PostListing/PostListing';
import Navigation from '../components/Navigation/Navigation';
import SiteWrapper from '../layouts/SiteWrapper/SiteWrapper';
import MainHeader from '../layouts/MainHeader/MainHeader';
import MainNav from '../layouts/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import PaginatedContent from '../layouts/PaginatedContent/PaginatedContent';
import BannerTitle from '../components/BannerTitle/BannerTitle';

import config from '../../data/SiteConfig';

class CategoryTemplate extends React.Component {
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
    const { location } = this.props;
    const { totalCount } = this.props.data.allMarkdownRemark;
    const { page, pages, total, limit, prev, next } = this.props.pageContext;
    const category = this.props.pageContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const authorsEdges = this.props.data.authors.edges;

    console.log(this.props);
    return (
      <ThemeProvider theme={config.breakpoints}>
        <Layout location={location}>
          <Drawer isOpen={this.state.menuOpen}>
            <Helmet
              title={`Posts in category "${category}" | ${config.siteTitle}`}
            />
            <Navigation config={config} onClose={this.handleOnClose} />
            <SiteWrapper>
              <div className="tag-template">
                <MainHeader className="tag-head" cover={config.guideCover}>
                  <MainNav onClick={this.handleOnClick} />
                </MainHeader>

                <BannerTitle
                  title={`Category: ${category}`}
                  desc={
                    parseInt(totalCount) === 1
                      ? `Total of ${totalCount} guide.`
                      : `Total of ${totalCount} guides.`
                  }
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
                    <PostListing
                      postEdges={postEdges}
                      postAuthors={authorsEdges}
                      columns={3}
                      description="none"
                    />
                  </PaginatedContent>
                </div>
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

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            thumbnail
            category
            cover
            date
            difficulty
            distance
            elevation
            location
          }
        }
      }
    }
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

export default CategoryTemplate;
