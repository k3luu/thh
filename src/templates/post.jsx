import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Link, graphql } from 'gatsby';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

import Layout from '../components/layout';
import MainHeader from '../layouts/MainHeader/MainHeader';
import MainNav from '../layouts/MainNav/MainNav';
import Drawer from '../layouts/Drawer/Drawer';
import Navigation from '../components/Navigation/Navigation';
import SiteWrapper from '../layouts/SiteWrapper/SiteWrapper';
import MainContent from '../layouts/MainContent/MainContent';
import PostHeader from '../layouts/PostHeader/PostHeader';
import PostFormatting from '../layouts/PostFormatting/PostFormatting';
import PostFooter from '../layouts/PostFooter/PostFooter';
import PostShare from '../components/PostShare/PostShare';
import GhostSubscribe from '../components/GhostSubscribe/GhostSubscribe';
import ReadNext from '../components/ReadNext/ReadNext';
import Footer from '../components/Footer/Footer';
import Disqus from '../components/Disqus/Disqus';
import MyCarousel from '../components/Carousel/MyCarousel';

function parsePost(post, slug) {
  const result = post;
  if (!result.id) {
    result.id = slug;
  }
  if (!result.id) {
    result.category_id = config.postDefaultCategoryID;
  }
  return result;
}

const formatReadNext = value => ({
  path: (value && value.fields.slug) || '/chilao-campground',
  title: (value && value.frontmatter.title) || 'Chilao Campground',
  cover:
    (value && value.frontmatter.thumbnail) ||
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/trail+guides/Chilao+Campground/Content/thumbnail.jpg',
  excerpt:
    (value && value.excerpt) ||
    'So you want to go camping with your buddies for the weekend, but were unable to nag a spot at Buckhorn Campground? Check out Chilao Campground!'
});

const styles = {
  avatar: {
    color: '#fff',
    backgroundColor: '#f56700'
  }
};

class PostTemplate extends React.Component {
  constructor(p) {
    super(p);

    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = parsePost(postNode.frontmatter, slug);

    this.state = {
      menuOpen: false,
      post,
      detailTypes: ['trails', 'drive in', 'hike in']
    };

    this.handleTrailData = this.handleTrailData.bind(this);
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

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  handleTagLink(tag) {
    return tag
      .toLowerCase()
      .replace(/\s-\s/g, '-')
      .replace(/\s/g, '-')
      .replace(/,/g, '');
  }

  handleTrailData = data => {
    const { classes } = this.props;
    const { detailTypes } = this.state;
    const {
      location,
      category,
      distance,
      difficulty,
      elevation,
      season,
      parking,
      usage,
      dogs
    } = data;

    if (detailTypes.includes(category)) {
      return (
        <table className="trail-data">
          <tbody>
            {location && (
              <tr>
                <td className="trail-data__icon">
                  <Avatar className={classes.avatar}>
                    <i className="fa fa-map-marker" />
                  </Avatar>
                </td>
                <td className="trail-data__label">Location</td>
                <td className="trail-data__data">
                  <Link to={`/tags/${this.handleTagLink(location)}`}>
                    {location}
                  </Link>
                </td>
              </tr>
            )}
            {distance && (
              <tr>
                <td className="trail-data__icon">
                  <Avatar className={classes.avatar}>
                    <i className="fa fa-arrows-h" />
                  </Avatar>
                </td>

                <td className="trail-data__label">Distance</td>
                <td className="trail-data__data">{distance}</td>
              </tr>
            )}
            {difficulty && (
              <tr>
                <td className="trail-data__icon">
                  <Avatar className={classes.avatar}>
                    <i className="fa fa-tachometer" />
                  </Avatar>
                </td>
                <td className="trail-data__label">Difficulty</td>
                <td className="trail-data__data">
                  <Link to={`/tags/${this.handleTagLink(difficulty)}`}>
                    {difficulty}
                  </Link>
                </td>
              </tr>
            )}
            {elevation && (
              <tr>
                <td className="trail-data__icon">
                  <Avatar className={classes.avatar}>
                    <FontAwesomeIcon icon={faLongArrowAltUp} />
                  </Avatar>
                </td>
                <td className="trail-data__label">Elevation Gain</td>
                <td className="trail-data__data">{elevation}</td>
              </tr>
            )}
            {season && (
              <tr>
                <td className="trail-data__icon">
                  <Avatar className={classes.avatar}>
                    <i className="fa fa-snowflake-o" />
                  </Avatar>
                </td>
                <td className="trail-data__label">Seasons</td>
                <td className="trail-data__data">{season}</td>
              </tr>
            )}
            {parking && (
              <tr>
                <td className="trail-data__icon">
                  <Avatar className={classes.avatar}>
                    <i className="fa fa-car" />
                  </Avatar>
                </td>
                <td className="trail-data__label">Parking</td>
                <td className="trail-data__data">{parking}</td>
              </tr>
            )}
            {usage && (
              <tr>
                <td className="trail-data__icon">
                  <Avatar className={classes.avatar}>
                    <i className="fa fa-group" />
                  </Avatar>
                </td>
                <td className="trail-data__label">Usage</td>
                <td className="trail-data__data">{usage}</td>
              </tr>
            )}
            {dogs && (
              <tr>
                <td className="trail-data__icon">
                  <Avatar className={classes.avatar}>
                    <i className="fa fa-paw" />
                  </Avatar>
                </td>
                <td className="trail-data__label">Dogs</td>
                <td className="trail-data__data">{dogs}</td>
              </tr>
            )}
          </tbody>
        </table>
      );
    }

    return '';
  };

  render() {
    const { location, data } = this.props;
    const { slug, next, prev } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = parsePost(postNode.frontmatter, slug);
    const {
      cover,
      title,
      carousel,
      carouselTitle,
      secondaryCarousel,
      secondaryCarouselTitle,
      disclaimer,
      references
    } = post;
    const className = post.post_class ? post.post_class : 'post';
    const getNextData = () => (next ? formatReadNext(data.next) : null);
    const getPrevData = () => (prev ? formatReadNext(data.prev) : null);

    // console.log('POST', data);

    return (
      <ThemeProvider theme={config.breakpoints}>
        <Layout location={location}>
          <Drawer className="post-template" isOpen={this.state.menuOpen}>
            <Helmet>
              <title>{`${post.title} | ${config.siteTitle}`}</title>
            </Helmet>
            <SEO postPath={slug} postNode={postNode} postSEO />

            {/* The blog navigation links */}
            <Navigation config={config} onClose={this.handleOnClose} />

            <SiteWrapper>
              <MainHeader className="post-head" cover={cover}>
                <MainNav onClick={this.handleOnClick} />

                <PostHeader>
                  <h1 className="post-title">{title}</h1>
                </PostHeader>
              </MainHeader>
              <MainContent>
                <PostFormatting className={className}>
                  {this.handleTrailData(post)}

                  <section
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: postNode.html }}
                  />

                  {carouselTitle && <h3>{carouselTitle}</h3>}
                  {carousel && (
                    <MyCarousel
                      data={carousel}
                      showStatus
                      showArrows
                      showThumbnails
                    />
                  )}

                  {secondaryCarouselTitle && <h3>{secondaryCarouselTitle}</h3>}
                  {secondaryCarousel && (
                    <MyCarousel
                      data={secondaryCarousel}
                      showStatus
                      showArrows
                      showThumbnails
                    />
                  )}

                  {disclaimer && (
                    <div className="post-disclaimer">
                      <h4>Disclaimer</h4>
                      {disclaimer.map(text => <p key={text}>{text}</p>)}
                    </div>
                  )}

                  {references && (
                    <div className="post-disclaimer">
                      <h4>References</h4>
                      {references.map(text => <p key={text}>{text}</p>)}
                    </div>
                  )}

                  <PostFooter>
                    <PostShare
                      postNode={postNode}
                      postPath={location.pathname}
                      config={config}
                    />
                    <GhostSubscribe />
                    <Disqus postNode={postNode} />
                  </PostFooter>
                </PostFormatting>
              </MainContent>
              <ReadNext next={getNextData()} prev={getPrevData()} />

              {/* The tiny footer at the very bottom */}
              <Footer
                darkBackground
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
  query BlogPostBySlug($slug: String!, $next: String, $tags: [String]) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        carousel
        carouselTitle
        category
        cover
        difficulty
        disclaimer
        distance
        dogs
        elevation
        location
        parking
        references
        season
        secondaryCarousel
        secondaryCarouselTitle
        tags
        usage
      }
      fields {
        slug
      }
    }
    # prev post data
    prev: markdownRemark(
      frontmatter: { tags: { in: $tags } }
      fields: { slug: { ne: $slug } }
    ) {
      excerpt(pruneLength: 112)
      frontmatter {
        title
        thumbnail
        date
      }
      fields {
        slug
      }
    }
    # next post data
    next: markdownRemark(fields: { slug: { eq: $next } }) {
      excerpt(pruneLength: 112)
      frontmatter {
        title
        thumbnail
        date
      }
      fields {
        slug
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

export default withStyles(styles)(PostTemplate);
