import React from 'react';
import Link from 'gatsby-link';
import { Box, Mask, Image } from 'gestalt';
import AuthorThumbnail from '../AuthorThumbnail/AuthorThumbnail';
import PostTags from '../PostTags/PostTags';
import SiteConfig from '../../../data/SiteConfig';
import AuthorLink from '../AuthorLink/AuthorLink';
import PostFormatting from '../../layouts/PostFormatting/PostFormatting';
import PostHeader from '../../layouts/PostHeader/PostHeader';
import PostDate from '../PostDate/PostDate';
import AuthorModel from '../../models/author-model';
import './PostListing.css';

const getPostList = (postEdges, authorEdges) =>
  postEdges.map(postEdge => ({
    path: postEdge.node.fields.slug,
    tags: postEdge.node.frontmatter.tags,
    cover: postEdge.node.frontmatter.cover,
    thumbnail: postEdge.node.frontmatter.thumbnail,
    title: postEdge.node.frontmatter.title,
    campTitle: postEdge.node.frontmatter.campTitle,
    category: postEdge.node.frontmatter.category,
    date: postEdge.node.frontmatter.date,
    location: postEdge.node.frontmatter.location,
    distance: postEdge.node.frontmatter.distance,
    difficulty: postEdge.node.frontmatter.difficulty,
    elevation: postEdge.node.frontmatter.elevation,
    author: AuthorModel.getAuthor(
      authorEdges,
      postEdge.node.frontmatter.author,
      SiteConfig.blogAuthorId
    ),
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead
  }));

class PostListing extends React.Component {
  state = {
    camp: ['drive in', 'hike in']
  };

  handleListingClass() {
    const { columns } = this.props;

    switch (columns) {
      case 2:
        return 'post post-listing column-two';

      default:
        return 'post post-listing';
    }
  }

  handleTitle(post) {
    const { camp } = this.state;
    const { category, title, campTitle } = post;

    if (camp.includes(category)) return campTitle;

    return title;
  }

  handleDescription(post) {
    const { description } = this.props;
    const { path, excerpt, location, elevation, difficulty, distance } = post;

    switch (description) {
      case 'none':
        return '';

      case 'details':
        return (
          <section className="post-excerpt">
            <Box display="flex" marginTop={2}>
              <table className="trail-data">
                <tbody>
                  <tr>
                    {/*<td className="trail-data__icon">*/}
                    {/*<i className="fa fa-map-marker" />*/}
                    {/*</td>*/}
                    <td className="trail-data__label">Location</td>
                    <td>{location}</td>
                  </tr>
                  <tr>
                    {/*<td className="trail-data__icon">*/}
                    {/*<i className="fa fa-arrows-h" />*/}
                    {/*</td>*/}
                    <td className="trail-data__label">Distance</td>
                    <td>{distance}</td>
                  </tr>
                  <tr>
                    {/*<td className="trail-data__icon">*/}
                    {/*<i className="fa fa-tachometer" />*/}
                    {/*</td>*/}
                    <td className="trail-data__label">Difficulty</td>
                    <td>{difficulty}</td>
                  </tr>
                  <tr>
                    {/*<td className="trail-data__icon">*/}
                    {/*<i className="fa fa-arrows-v" />*/}
                    {/*</td>*/}
                    <td className="trail-data__label">Elevation</td>
                    <td>{elevation}</td>
                  </tr>
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
    const { title, path, excerpt, cover, thumbnail } = post;
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
        <footer className="post-meta">
          {/*<PostTags prefix="tags: " tags={tags} />*/}
          {/*<PostDate date={date} />*/}
        </footer>
      </PostFormatting>
    );
  }

  handlePostGroups() {
    const { columns } = this.props;
    const postList = getPostList(this.props.postEdges, this.props.postAuthors);

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
    const postList = getPostList(this.props.postEdges, this.props.postAuthors);
    console.log(postList);

    if (this.props.columns) return this.handlePostGroups();

    return (
      <div className="post-listing__container">
        {postList.map((post, i) => this.handlePostContent(post, i))}
      </div>
    );
  }
}

export default PostListing;
