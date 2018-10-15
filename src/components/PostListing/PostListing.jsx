import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import PostFormatting from '../../layouts/PostFormatting/PostFormatting';
import './PostListing.css';

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  cardHeaderRoot: {
    height: 75
  },
  cardHeaderTitle: {
    fontFamily: `'Pontano Sans', sans-serif`,
    fontSize: '1rem',
    fontWeight: 700
  },
  media: {
    height: 0,
    paddingTop: '67.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  content: {},
  avatar: {
    color: '#fff',
    backgroundColor: '#f56700',
    height: 30,
    width: 30,
    opacity: 0.9,
    margin: 10
  }
});

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

    if (campListing) {
      return campTitle;
    }

    return title;
  }

  handleTagLink(tag) {
    return tag
      .toLowerCase()
      .replace(/\s-\s/g, '-')
      .replace(/\s/g, '-')
      .replace(/,/g, '');
  }

  handleDifficultyClass(level) {
    let classStyling = 'post-listing__difficulty ';
    level = level.toLowerCase();

    if (level.includes('difficult')) {
      classStyling += 'difficult';
    } else if (level.includes('easy-')) {
      classStyling += 'easy-moderate';
    } else if (level.includes('moderate')) {
      classStyling += 'moderate';
    } else if (level.includes('easy')) {
      classStyling += 'easy';
    }

    return classStyling;
  }

  handleDescription(post) {
    const { description, classes } = this.props;
    const { path, excerpt, elevation, difficulty, distance, usage } = post;

    switch (description) {
      case 'none':
        return <span />;

      case 'details':
        return (
          <section className="post-excerpt">
            {difficulty && (
              <Link to={`/tags/${this.handleTagLink(difficulty)}`} className={this.handleDifficultyClass(difficulty)}>
                {difficulty}
              </Link>
            )}

            {distance && (
              <div>
                {/* <Avatar className={classes.avatar}>
                <i className="fa fa-arrows-h" />
              </Avatar> */}
                <span>{distance}</span>
              </div>
            )}

            {elevation && (
              <div>
                {/* <Avatar className={classes.avatar}>
                  <i className="fa fa-arrows-v" />
                </Avatar> */}
                {elevation}
              </div>
            )}

            {usage && (
              <div>
                {/* <Avatar className={classes.avatar}>
                  <i className="fa fa-group" />
                </Avatar> */}
                {usage} Usage
              </div>
            )}
          </section>
        );

      default:
        return (
          <section className="post-excerpt">
            <p>
              {excerpt.replace(/\s\s+/g, ' ')}{' '}
              <Link className="read-more" to={path}>
                &raquo;
              </Link>
            </p>
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
            <div
              className="post-listing__photo"
              style={{
                backgroundImage: `url("${thumbnail}")`,
                height: maskHeight
              }}
            />
          </Link>
        )}
        <h4 className="post-title">
          <Link to={path}>{this.handleTitle(post)}</Link>
        </h4>
        {this.handleDescription(post)}
      </PostFormatting>
    );
  }

  handleOtherPostContent(post, index, lastEntry) {
    const { title, path, thumbnail } = post;
    const { columns, classes } = this.props;
    let className = post.post_class ? post.post_class : 'post post-listing';
    let style = {};

    if (index % columns !== columns - 1) {
      className += ' margin';
    }

    // TODO: tentative... check width on different screens
    if (lastEntry && index < columns - 1) {
      style = { width: '32%' };
    }

    return (
      <PostFormatting className={className} style={style} key={title}>
        <Card>
          <CardHeader
            classes={{ root: classes.cardHeaderRoot, title: classes.cardHeaderTitle }}
            title={this.handleTitle(post)}
            subheader={
              post.location ? (
                <Link to={`/tags/${this.handleTagLink(post.location)}`} style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                  {post.location}
                </Link>
              ) : (
                false
              )
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <Link to={path}>
            <CardMedia className={classes.media} image={thumbnail} title={this.handleTitle(post)} />
          </Link>
          <CardContent className={classes.content}>{this.handleDescription(post)}</CardContent>
        </Card>
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
            return this.handleOtherPostContent(p, j, mod);
          })}
        </div>
      );
    }

    return [groupedCode];
  }

  render() {
    const { columns } = this.props;
    const postList = getPostList(this.props.postEdges);

    if (columns) {
      return this.handlePostGroups();
    }

    return <div className="post-listing__container">{postList.map((post, i) => this.handlePostContent(post, i))}</div>;
  }
}

export default withStyles(styles)(PostListing);
