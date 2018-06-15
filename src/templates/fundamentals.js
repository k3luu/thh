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
import PaginatedContent from '../layouts/PaginatedContent/PaginatedContent';
import PostListing from '../components/PostListing/PostListing';
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
    const {
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pathContext;

    return (
      <Drawer className="author-template" isOpen={this.state.menuOpen}>
        <Helmet title={`Hiking Fundamentals | ${config.siteTitle}`} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeader className="post-head" cover={config.fundamentalsCover}>
            <MainNav>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
          </MainHeader>

          <div className="main-content">
            <h1>Hiking Fundamentals</h1>
            <p>
              Are you new to hiking, or need to brush up on your outdoor skills?
              Fundamentals gives you a breakdown of all sorts of skills you'll
              want to know before you head out. Part of exploring is being
              adaptable, and understanding the way nature can shift. Our goal is
              to get readers prepared for the unforeseen conditions the Great
              Outdoors will bring you.
            </p>
          </div>

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
            />
          </PaginatedContent>

          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
    );
  }
}

// /* eslint no-undef: "off" */
export const pageQuery = graphql`
  query HikingQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
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
            author
          }
        }
      }
    }
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

export default HikingPage;
