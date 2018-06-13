import React from 'react';
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import MainHeader from '../layouts/MainHeader/MainHeader';
import MainNav from '../layouts/MainNav/MainNav';
import BlogLogo from '../components/BlogLogo/BlogLogo';
import MenuButton from '../components/MenuButton/MenuButton';
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
  cover: value.frontmatter.cover,
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
      post
    };
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
      video
    } = post;
    const className = post.post_class ? post.post_class : 'post';
    const authorData = AuthorModel.getAuthor(
      this.props.data.authors.edges,
      author,
      config.blogAuthorId
    );
    const getNextData = () => (next ? formatReadNext(data.next) : null);
    const getPrevData = () => (prev ? formatReadNext(data.prev) : null);

    console.log('BLOG POST', postNode, this.props.pathContext);

    return (
      <Drawer className="post-template" isOpen={this.state.menuOpen}>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeader className="post-head" cover={cover}>
            <MainNav>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
          </MainHeader>
          <MainContent>
            <PostFormatting className={className}>
              <PostHeader>
                <h1 className="post-title">{title}</h1>
                <section className="post-meta">
                  {date && <PostDate date={date} />}
                  <PostTags prefix=" - " tags={tags} />
                </section>
              </PostHeader>

              {video && (
                <iframe
                  className="post-video"
                  title="video"
                  src={video}
                  frameBorder="0"
                  allowFullScreen
                />
              )}

              <section
                className="post-content"
                dangerouslySetInnerHTML={{ __html: postNode.html }}
              />

              {carousel && <MyCarousel data={carousel} />}

              {category === 'fundamentals' && (
                <div>
                  <h3>Disclaimer</h3>
                  <p>
                    Any reference in this website to any person, organization,
                    activity, product, or service related to such person or
                    organization, or any linkages from this web site to the web
                    site of another party, do not constitute or imply the
                    endorsement, recommendation, or favoring of Two
                    Half-Hitches.
                  </p>
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
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $next: String, $prev: String) {
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
        video
      }
      fields {
        slug
      }
    }
    # prev post data
    prev: markdownRemark(fields: { slug: { eq: $prev } }) {
      excerpt(pruneLength: 112)
      frontmatter {
        title
        cover
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
        cover
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
