import React from 'react';
import Link from 'gatsby-link';
import { Box, Mask, Image } from 'gestalt';
import SiteConfig from '../../../data/SiteConfig';
import PostFormatting from '../../layouts/PostFormatting/PostFormatting';
import PostHeader from '../../layouts/PostHeader/PostHeader';
import './PostListing.css';

const getPostList = postEdges =>
  postEdges.map(postEdge => ({
    path: postEdge.node.fields.slug,
    title: postEdge.node.frontmatter.title,
    cover: postEdge.node.frontmatter.cover,
    thumbnail: postEdge.node.frontmatter.thumbnail,
    campTitle: postEdge.node.frontmatter.campTitle,
    category: postEdge.node.frontmatter.category,
    date: postEdge.node.frontmatter.date,
    difficulty: postEdge.node.frontmatter.difficulty,
    distance: postEdge.node.frontmatter.distance,
    elevation: postEdge.node.frontmatter.elevation,
    location: postEdge.node.frontmatter.location,
    tags: postEdge.node.frontmatter.tags,
    usage: postEdge.node.frontmatter.usage,
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead
  }));

class PostListing extends React.Component {
  handleTitle(post) {
    const { campListing } = this.props;
    const { title, campTitle } = post;

    if (campListing) return campTitle;

    return title;
  }

  handleDescription(post) {
    const { description } = this.props;
    const {
      path,
      excerpt,
      location,
      elevation,
      difficulty,
      distance,
      usage
    } = post;

    switch (description) {
      case 'none':
        return '';

      case 'details':
        return (
          <section className="post-excerpt">
            <Box display="flex" marginTop={2}>
              <table className="trail-data">
                <tbody>
                  {location && (
                    <tr>
                      <td className="trail-data__label">Location</td>
                      <td>{location}</td>
                    </tr>
                  )}
                  {distance && (
                    <tr>
                      <td className="trail-data__label">Distance</td>
                      <td>{distance}</td>
                    </tr>
                  )}
                  {difficulty && (
                    <tr>
                      <td className="trail-data__label">Difficulty</td>
                      <td>{difficulty}</td>
                    </tr>
                  )}
                  {elevation && (
                    <tr>
                      <td className="trail-data__label">Elevation</td>
                      <td>{elevation}</td>
                    </tr>
                  )}
                  {usage && (
                    <tr>
                      <td className="trail-data__label">Usage</td>
                      <td>{usage}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Box>
          </section>
        );

      default:
        return (
          <section className="post-excerpt">
            <Box display="flex" marginTop={2}>
              <p>
                {excerpt.replace(/\s\s+/g, ' ')}{' '}
                <Link className="read-more" to={path}>
                  &raquo;
                </Link>
              </p>
            </Box>
          </section>
        );
    }
  }

  handlePostContent(post, index) {
    const { title, path, cover, thumbnail } = post;
    const { columns } = this.props;
    let className = post.post_class ? post.post_class : 'post post-listing';
    let maskHeight;

    if (index % columns !== columns - 1) className += ' margin';

    switch (columns) {
      case 2:
        maskHeight = 390;
        break;

      default:
        maskHeight = 250;
    }

    return (
      <PostFormatting className={className} key={title}>
        <PostHeader>
          {cover && (
            <Link to={path} className="post-image">
              <Mask color="darkGray" height={maskHeight}>
                <Image
                  alt={title}
                  naturalHeight={1}
                  naturalWidth={1}
                  fit="cover"
                  src={thumbnail}
                />
              </Mask>
            </Link>
          )}
          <Box alignItems="center">
            <h4 className="post-title">
              <Link to={path}>{this.handleTitle(post)}</Link>
            </h4>
            {this.handleDescription(post)}
          </Box>
        </PostHeader>
      </PostFormatting>
    );
  }

  handlePostGroups() {
    const { columns } = this.props;
    const postList = getPostList(this.props.postEdges);

    let list = [];
    let code = [];

    for (let i = 0; i < columns; i++) {
      list.push('hi');
    }

    for (let i = 0; i < postList.length; i += columns) {
      let style = {};
      if (i + columns >= postList.length) {
        const items = postList.length - i;
        style = { width: (100 * items) / columns + '%' };
      }

      code.push(
        <div className="post-listing__group" style={style} key={i}>
          {list.map((p, j) => {
            if (postList[i + j])
              return this.handlePostContent(postList[i + j], i + j);
          })}
        </div>
      );
    }

    return code;
  }

  render() {
    const postList = getPostList(this.props.postEdges);

    if (this.props.columns) return this.handlePostGroups();

    return (
      <div className="post-listing__container">
        {postList.map((post, i) => this.handlePostContent(post, i))}
      </div>
    );
  }
}

export default PostListing;
