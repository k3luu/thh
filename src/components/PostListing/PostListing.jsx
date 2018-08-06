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
    date: postEdge.node.frontmatter.date,
    author: AuthorModel.getAuthor(
      authorEdges,
      postEdge.node.frontmatter.author,
      SiteConfig.blogAuthorId
    ),
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead
  }));

class PostListing extends React.Component {
  handleListingClass() {
    const { columns } = this.props;

    switch (columns) {
      case 2:
        return 'post post-listing column-two';

      default:
        return 'post post-listing';
    }
  }

  handlePostContent(post) {
    const { title, path, excerpt, author, tags, date, cover, thumbnail } = post;
    const { hideDescription, columns } = this.props;
    const className = post.post_class ? post.post_class : 'post post-listing';
    let maskHeight;

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
            <h3 className="post-title">
              <Link to={path}>{title}</Link>
            </h3>
            {!hideDescription && (
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
            )}
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
            if (postList[i + j]) return this.handlePostContent(postList[i + j]);
          })}
        </div>
      );
    }

    return code;
  }

  render() {
    const postList = getPostList(this.props.postEdges, this.props.postAuthors);
    const { hideDescription } = this.props;

    if (this.props.columns) return this.handlePostGroups();

    return (
      <div className="post-listing__container">
        {postList.map((post, i) => {
          console.log('post listing', post);
          const {
            title,
            path,
            excerpt,
            author,
            tags,
            date,
            cover,
            thumbnail
          } = post;
          const className = post.post_class
            ? post.post_class
            : this.handleListingClass();

          return (
            <PostFormatting className={className} key={title}>
              <PostHeader>
                {cover && (
                  <Link to={path} className="post-image">
                    <Box color="darkGray" height={350}>
                      <Image
                        alt={title}
                        naturalHeight={1}
                        naturalWidth={1}
                        fit="cover"
                        src={thumbnail}
                      />
                    </Box>
                  </Link>
                )}
                <Box alignItems="center">
                  <h3 className="post-title">
                    <Link to={path}>{title}</Link>
                  </h3>
                  {!hideDescription && (
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
                  )}
                </Box>
              </PostHeader>
              <footer className="post-meta">
                {/*<PostTags prefix="tags: " tags={tags} />*/}
                {/*<PostDate date={date} />*/}
              </footer>
            </PostFormatting>
          );
        })}
      </div>
    );
  }
}

export default PostListing;
