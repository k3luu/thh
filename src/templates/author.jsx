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
import Footer from '../components/Footer/Footer';
import SocialMediaIcons from '../components/SocialMediaIcons/SocialMediaIcons';

class AuthorTemplate extends React.Component {
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
    const { author, cover } = this.props.pathContext;
    const postEdges =
      this.props.data.allMarkdownRemark &&
      this.props.data.allMarkdownRemark.edges
        ? this.props.data.allMarkdownRemark.edges
        : [];
    const authorsEdges =
      this.props.data.allAuthorsJson && this.props.data.allAuthorsJson.edges
        ? this.props.data.allAuthorsJson.edges
        : [];
    const getAuthor = () => authorsEdges[0].node;

    return (
      <ThemeProvider theme={config.breakpoints}>
        <Drawer className="author-template" isOpen={this.state.menuOpen}>
          <Helmet title={`Posts by "${author}" | ${config.siteTitle}`} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />

          <SiteWrapper>
            <MainHeader className="author-head" cover={cover}>
              <MainNav onClick={this.handleOnClick} />
            </MainHeader>

            {/* PostListing component renders all the posts */}
            <PostListing postEdges={postEdges} postAuthors={authorsEdges} />

            {/* Social information here */}
            <SocialMediaIcons urls={getAuthor().socialUrls} />

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
  query AuthorPage($author: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $author } } }
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
    allAuthorsJson(filter: { id: { eq: $author } }) {
      edges {
        node {
          id
          name
          image
          url
          bio
          location
          socialUrls
        }
      }
    }
  }
`;

export default AuthorTemplate;
