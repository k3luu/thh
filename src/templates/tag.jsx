import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';
import Drawer from '../layouts/Drawer/Drawer';
import Navigation from '../components/Navigation/Navigation';
import SiteWrapper from '../layouts/SiteWrapper/SiteWrapper';
import MainHeader from '../layouts/MainHeader/MainHeader';
import MainNav from '../layouts/MainNav/MainNav';
import PageHeader from '../components/PageHeader/PageHeader';
import PageDescription from '../components/PageDescription/PageDescription';
import Footer from '../components/Footer/Footer';
import PaginatedContent from '../layouts/PaginatedContent/PaginatedContent';

class TagTemplate extends React.Component {
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
      tag,
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pathContext;
    const authorsEdges = this.props.data.authors.edges;

    return (
      <ThemeProvider theme={config.breakpoints}>
        <Drawer isOpen={this.state.menuOpen}>
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />
          <SiteWrapper>
            {/* All the main content gets inserted here */}
            <div className="tag-template">
              {/* The big featured header */}
              <MainHeader className="tag-head" cover={tag.featureImage}>
                <MainNav onClick={this.handleOnClick} />
                <div className="vertical">
                  <div className="main-header-content inner">
                    <PageHeader text={tag} />
                    <PageDescription
                      text={tag.description || `A ${total}-post collection`}
                    />
                  </div>
                </div>
              </MainHeader>

              <PaginatedContent
                page={page}
                pages={pages}
                total={total}
                limit={limit}
                prev={prev}
                next={next}
              >
                {/* PostListing component renders all the posts */}
                <PostListing postEdges={nodes} postAuthors={authorsEdges} />
              </PaginatedContent>
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
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            cover
            date
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

export default TagTemplate;
