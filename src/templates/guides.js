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
import PageDescription from '../components/PageDescription/PageDescription';
import PaginatedContent from '../layouts/PaginatedContent/PaginatedContent';
import PostListing from '../components/PostListing/PostListing';
import Footer from '../components/Footer/Footer';

class GuidesPage extends React.Component {
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

    // console.log('trail guide page', this.props);

    return (
      <Drawer className="author-template" isOpen={this.state.menuOpen}>
        <Helmet title={`Trail Guides | ${config.siteTitle}`} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeader className="post-head" cover={config.guideCover}>
            <MainNav>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
          </MainHeader>

          <div className="main-content">
            <h1>Trail Guides</h1>
            <p>
              Follow us on our most recent expeditions! The blog is our way of
              sharing our personal experiences to show readers how engaging and
              inspiring the outdoors can be. We provide reviews of trails,
              photos from our trip, and tips if you're planning on trekking the
              same trail. We understand that getting out there can seem
              daunting, but hopefully by sharing our experiences you can benefit
              by having a clear view of what to expect going into your
              adventure.
            </p>

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
          </div>

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
  query GuidesQuery {
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

export default GuidesPage;
