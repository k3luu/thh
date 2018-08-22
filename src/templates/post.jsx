import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import MainHeader from '../layouts/MainHeader/MainHeader';
import MainNav from '../layouts/MainNav/MainNav';
import Drawer from '../layouts/Drawer/Drawer';
import Navigation from '../components/Navigation/Navigation';
import SiteWrapper from '../layouts/SiteWrapper/SiteWrapper';
import MainContent from '../layouts/MainContent/MainContent';
import PostHeader from '../layouts/PostHeader/PostHeader';
import PostFormatting from '../layouts/PostFormatting/PostFormatting';
import PostDate from '../components/PostDate/PostDate';
import PostFooter from '../layouts/PostFooter/PostFooter';
import AuthorImage from '../components/AuthorImage/AuthorImage';
import AuthorInfo from '../components/AuthorInfo/AuthorInfo';
import PostShare from '../components/PostShare/PostShare';
import GhostSubscribe from '../components/GhostSubscribe/GhostSubscribe';
import ReadNext from '../components/ReadNext/ReadNext';
import PostTags from '../components/PostTags/PostTags';
import Footer from '../components/Footer/Footer';
import AuthorModel from '../models/author-model';
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
  path: value.fields.slug,
  title: value.frontmatter.title,
  cover: value.frontmatter.thumbnail,
  excerpt: value.excerpt
});

class PostTemplate extends React.Component {
  constructor(p) {
    super(p);

    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = parsePost(postNode.frontmatter, slug);

    this.state = {
      menuOpen: false,
      activeStep: 0,
      post,
      details: ['trails', 'drive in', 'hike in']
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

  handleBack = () => {
    let step = this.state.activeStep - 1;
    if (step < 0) step = 0;

    this.setState({ activeStep: step });
  };

  handleForward = () => {
    let step = this.state.activeStep + 1;
    if (step >= this.state.post.carousel.length)
      step = this.state.post.carousel.length - 1;

    this.setState({ activeStep: step });
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  handleTrailData = data => {
    const {
      location,
      distance,
      difficulty,
      elevation,
      season,
      parking,
      category,
      dogs
    } = data;
    const { details } = this.state;

    // console.log(' trail data', category);

    if (details.includes(category))
      return (
        <table className="trail-data">
          <tbody>
            <tr>
              <td className="trail-data__icon">
                <i className="fa fa-map-marker" />
              </td>
              <td className="trail-data__label">Location</td>
              <td>{location}</td>
            </tr>
            <tr>
              <td className="trail-data__icon">
                <i className="fa fa-arrows-h" />
              </td>
              <td className="trail-data__label">Distance</td>
              <td>{distance}</td>
            </tr>
            <tr>
              <td className="trail-data__icon">
                <i className="fa fa-tachometer" />
              </td>
              <td className="trail-data__label">Difficulty</td>
              <td>{difficulty}</td>
            </tr>
            <tr>
              <td className="trail-data__icon">
                <i className="fa fa-arrows-v" />
              </td>
              <td className="trail-data__label">Elevation</td>
              <td>{elevation}</td>
            </tr>
            <tr>
              <td className="trail-data__icon">
                <i className="fa fa-snowflake-o" />
              </td>
              <td className="trail-data__label">Seasons</td>
              <td>{season}</td>
            </tr>
            <tr>
              <td className="trail-data__icon">
                <i className="fa fa-car" />
              </td>
              <td className="trail-data__label">Parking</td>
              <td>{parking}</td>
            </tr>
            {dogs && (
              <tr>
                <td className="trail-data__icon">
                  <i className="fa fa-paw" />
                </td>
                <td className="trail-data__label">Dogs</td>
                <td>Welcome!</td>
              </tr>
            )}
          </tbody>
        </table>
      );

    return '';
  };

  render() {
    const { location, data } = this.props;
    const { slug, next, prev } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = parsePost(postNode.frontmatter, slug);
    const {
      cover,
      title,
      date,
      author,
      tags,
      carousel,
      category,
      disclaimer,
      references
    } = post;
    const className = post.post_class ? post.post_class : 'post';
    const authorData = AuthorModel.getAuthor(
      this.props.data.authors.edges,
      author,
      config.blogAuthorId
    );
    const getNextData = () => (next ? formatReadNext(data.next) : null);
    const getPrevData = () => (prev ? formatReadNext(data.prev) : null);

    // console.log('BLOG POST', this.props);

    return (
      <ThemeProvider theme={config.breakpoints}>
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
            </MainHeader>
            <MainContent>
              <PostFormatting className={className}>
                <PostHeader>
                  <h1 className="post-title">{title}</h1>
                  <section className="post-meta">
                    {/*{date && <PostDate date={date} />}*/}
                    {/*<PostTags prefix="tags: " tags={tags} />*/}
                  </section>
                </PostHeader>

                {this.handleTrailData(post)}

                <section
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: postNode.html }}
                />

                {carousel && <MyCarousel data={carousel} />}

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
                  {/*<AuthorImage author={authorData} />*/}
                  {/*<AuthorInfo prefix="/author" author={authorData} />*/}
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
  query BlogPostBySlug($slug: String!, $next: String, $tags: [String]) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        author
        carousel
        disclaimer
        location
        distance
        difficulty
        elevation
        dogs
        season
        parking
        references
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

export default PostTemplate;
