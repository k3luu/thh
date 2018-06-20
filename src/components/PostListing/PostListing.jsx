import React from 'react';
import Link from 'gatsby-link';
import { Box, Image } from 'gestalt';
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
  render() {
    const postList = getPostList(this.props.postEdges, this.props.postAuthors);

    return (
      <div
        className="main-content"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {postList.map((post, i) => {
          // console.log('post listing', post);
          const { title, path, excerpt, author, tags, date, cover } = post;
          const className = post.post_class
            ? post.post_class
            : 'post post-listing';

          return (
            <PostFormatting
              className={className}
              style={i % 2 === 0 ? { marginRight: 40 } : {}}
              key={title}
            >
              <PostHeader>
                {cover && (
                  <Link to={path} className="post-image">
                    <Box
                      shape="rounded"
                      color="darkGray"
                      height={300}
                      minHeight={300}
                    >
                      <Image
                        alt={title}
                        naturalHeight={1}
                        naturalWidth={1}
                        fit="cover"
                        src={cover}
                      />
                    </Box>
                  </Link>
                )}
                <Box alignItems="center">
                  <h3 className="post-title">
                    <Link to={path}>{title}</Link>
                  </h3>
                  <section className="post-excerpt">
                    <Box display="flex" marginTop={2}>
                      <p>
                        {excerpt}{' '}
                        <Link className="read-more" to={path}>
                          &raquo;
                        </Link>
                      </p>
                    </Box>
                  </section>
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
