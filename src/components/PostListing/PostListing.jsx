import React from 'react';
import Link from 'gatsby-link';
import { Box, Mask, Image } from 'gestalt';
import PostFormatting from '../../layouts/PostFormatting/PostFormatting';
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
        return <span />;

      case 'details':
        return (
          <section className="post-excerpt">
            <Box display="flex" marginTop={2}>
              <table className="trail-data">
                <tbody>
                  {location && (
                    <tr>
                      <td className="trail-data__label">Location</td>
                      <td className="trail-data__data">{location}</td>
                    </tr>
                  )}
                  {distance && (
                    <tr>
                      <td className="trail-data__label">Distance</td>
                      <td className="trail-data__data">{distance}</td>
                    </tr>
                  )}
                  {difficulty && (
                    <tr>
                      <td className="trail-data__label">Difficulty</td>
                      <td className="trail-data__data">{difficulty}</td>
                    </tr>
                  )}
                  {elevation && (
                    <tr>
                      <td className="trail-data__label">Elevation Gain</td>
                      <td className="trail-data__data">{elevation}</td>
                    </tr>
                  )}
                  {usage && (
                    <tr>
                      <td className="trail-data__label">Usage</td>
                      <td className="trail-data__data">{usage}</td>
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

  handlePostContent(post, index, lastEntry) {
    const { title, path, cover, thumbnail } = post;
    const { columns } = this.props;
    let className = post.post_class ? post.post_class : 'post post-listing';
    let maskHeight;
    let style = {};

    if (index % columns !== columns - 1) className += ' margin';

    // TODO: tentative... check width on different screens
    if (lastEntry && index < columns - 1) style = { width: '32%' };

    switch (columns) {
      case 2:
        maskHeight = 390;
        break;

      default:
        maskHeight = 250;
    }

    return (
      <PostFormatting className={className} style={style} key={title}>
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
      </PostFormatting>
    );
  }

  handlePostGroups() {
    const { columns } = this.props;
    const postList = getPostList(this.props.postEdges);

    const groupedPosts = [];
    const groupedCode = [];
    let mod;

    while (postList.length > 0) {
      groupedPosts.push(postList.splice(0, columns));
    }

    for (let i = 0; i < groupedPosts.length; i++) {
      mod = groupedPosts[i].length % columns !== 0;

      groupedCode.push(
        <div className="post-listing__group" key={i}>
          {groupedPosts[i].map((p, j) => {
            return this.handlePostContent(p, j, mod);
          })}
        </div>
      );
    }

    return [groupedCode];
  }

  render() {
    const { columns } = this.props;
    const postList = getPostList(this.props.postEdges);

    if (columns) return this.handlePostGroups();

    return (
      <div className="post-listing__container">
        {postList.map((post, i) => this.handlePostContent(post, i))}
      </div>
    );
  }
}

export default PostListing;
