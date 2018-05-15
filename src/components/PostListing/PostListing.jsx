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
    author: AuthorModel.getAuthor(authorEdges, postEdge.node.frontmatter.author, SiteConfig.blogAuthorId),
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead
  }));

class PostListing extends React.Component {
  render() {
    const postList = getPostList(this.props.postEdges, this.props.postAuthors);

    return (
      <div>
        {/* This is the post loop - each post will be output using this markup */}
        {postList.map(post => {
          console.log('post listing', post);
          const { title, path, excerpt, author, tags, date, cover } = post;
          const className = post.post_class ? post.post_class : 'post';

          return (
            <PostFormatting className={className} key={title}>
              <PostHeader>
                <Box display="flex">
                  {cover && (
                    <Box color="darkGray" height={100} width={100} minWidth={100} marginRight={4}>
                      <Image
                        alt={title}
                        color="rgb(111, 91, 77)"
                        naturalHeight={1}
                        naturalWidth={1}
                        fit="cover"
                        src={cover}
                      />
                    </Box>
                  )}
                  <Box display="flex" alignItems="center">
                    <h2 className="post-title">
                      <Link to={path}>{title}</Link>
                    </h2>
                  </Box>
                </Box>
              </PostHeader>
              <section className="post-excerpt">
                {/* TODO limit excerpt to 26 words */}
                <p>
                  {excerpt}{' '}
                  <Link className="read-more" to={path}>
                    &raquo;
                  </Link>
                </p>
              </section>
              <footer className="post-meta">
                {/*<AuthorThumbnail avatar={author.image} name={author.name} />*/}
                {/*/!*<AuthorLink url={`/author/${author.id}`} name={author.name} />*!/*/}
                {/*<PostTags prefix=" on " tags={tags} />*/}
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
