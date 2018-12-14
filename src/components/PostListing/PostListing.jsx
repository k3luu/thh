import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';

import config from '../../../data/SiteConfig';
import PostFormatting from '../../layouts/PostFormatting/PostFormatting';
import './PostListing.css';

const styles = () => ({
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
  menu: {
    fontFamily: `'Pontano Sans', sans-serif`,
    fontWeight: 700
  }
});

const formatSiteUrl = (siteUrl, pathPrefix, path) =>
  siteUrl + (pathPrefix === '/' ? '' : pathPrefix) + path;

/**
 * Maps the post data into a simpler data object
 */
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
  state = {
    anchorEl: null
  };

  /**
   * We have 2 kinds of titles: regular titles and camp titles. Determine which to
   * use by props passed in. `campListing` = true tells us to use the camp title.
   *
   * @param post post data
   */
  handleTitle(post) {
    const { campListing } = this.props;
    const { title, campTitle } = post;

    if (campListing) {
      return campTitle;
    }

    return title;
  }

  /**
   * Formats the link to get rid of special chars and lower-case letters
   * @param tag value to parse
   * @return stringified tag for linking
   */
  handleTagLink(tag) {
    return tag
      .toLowerCase()
      .replace(/\s-\s/g, '-')
      .replace(/\s/g, '-')
      .replace(/,/g, '');
  }

  /**
   * Read in the difficulty level and assign classnames based on that.
   *
   * @param level data to evaluate
   * @return classStyling string of class to use
   */
  handleDifficultyClass(level) {
    let classStyling = 'post-listing__difficulty ';
    level = level.toLowerCase();

    if (level.includes('strenuous')) {
      classStyling += 'strenuous';
    } else if (level.includes('difficult')) {
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

  /**
   * Differeny ways to display post data: None, Specific Details, and regular Post Excerpt.
   *
   * @param {*} post post data
   */
  handleDescription(post) {
    const { description } = this.props;
    const { path, excerpt, elevation, difficulty, distance, usage } = post;

    switch (description) {
      case 'none':
        return <span />;

      case 'details':
        return (
          <section className="post-excerpt">
            {difficulty && (
              <div className="post-listing__difficulty-container">
                <Link
                  to={`/tags/${this.handleTagLink(difficulty)}`}
                  className={this.handleDifficultyClass(difficulty)}
                >
                  {difficulty}
                </Link>
              </div>
            )}

            {distance && distance.length > 20 ? (
              <Tooltip title={distance}>
                <div className="post-listing__distance">{`${distance.substring(
                  0,
                  20
                )}...`}</div>
              </Tooltip>
            ) : (
              <div className="post-listing__distance">{distance || ''}</div>
            )}

            {elevation && (
              <div className="post-listing__elevation">
                {elevation} Elevation Gain
              </div>
            )}
            {usage && <div className="post-listing__usage">{usage} Usage</div>}
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

  /**
   * Displays the post data into MUI's Card component.
   *
   * @param {*} post      data about the post
   * @param {*} index     what placement is the post in the page
   * @param {*} lastEntry special formatting for last entry
   */
  handlePostContent(post, index, lastEntry) {
    const { title, path, thumbnail } = post;
    const { columns, classes, description } = this.props;
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
            classes={{
              root: classes.cardHeaderRoot,
              title: classes.cardHeaderTitle
            }}
            title={this.handleTitle(post)}
            subheader={
              post.location ? (
                <Link
                  to={`/tags/${this.handleTagLink(post.location)}`}
                  style={{ color: 'rgba(0, 0, 0, 0.54)' }}
                >
                  {post.location}
                </Link>
              ) : (
                false
              )
            }
            action={
              <IconButton onClick={e => this.handleCardMenuOpen(e, post)}>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <Link to={path}>
            <CardMedia
              className={classes.media}
              image={thumbnail}
              title={this.handleTitle(post)}
            />
          </Link>
          {description !== 'none' && (
            <CardContent className={classes.content}>
              {this.handleDescription(post)}
            </CardContent>
          )}
        </Card>
      </PostFormatting>
    );
  }

  /**
   * Formats the posts to take up a certain width determined by column #.
   */
  handlePostGroups() {
    const { columns } = this.props;
    const postList = getPostList(this.props.postEdges);

    const groupedPosts = [];
    const groupedCode = [this.handlePostMenu()];
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

  handleCardMenuOpen = (e, post) => {
    e.preventDefault();
    this.setState({ anchorEl: e.currentTarget, postMenuNode: post });
  };

  handleCardMenuClose = () => {
    this.setState({ anchorEl: null, postMenuNode: null });
  };

  /**
   * Handles the menu option available for each post.
   */
  handlePostMenu() {
    const { classes } = this.props;
    const { anchorEl, postMenuNode } = this.state;
    const url = postMenuNode
      ? formatSiteUrl(config.siteUrl, config.pathPrefix, postMenuNode.path)
      : '';

    if (!postMenuNode) {
      return '';
    }

    return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={this.handleCardMenuClose}
      >
        <a href={postMenuNode.path} target="_blank">
          <MenuItem onClick={this.handleCardMenuClose}>
            <ListItemIcon>
              <i className="fa fa-external-link" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.menu }}
              style={{ paddingLeft: 15 }}
            >
              Open in New Tab
            </ListItemText>
          </MenuItem>
        </a>

        <FacebookShareButton url={url} quote={postMenuNode.title}>
          <MenuItem onClick={this.handleCardMenuClose}>
            <ListItemIcon>
              <i className="fa fa-facebook" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.menu }}
              style={{ paddingLeft: 22 }}
            >
              Share on Facebook
            </ListItemText>
          </MenuItem>
        </FacebookShareButton>

        <TwitterShareButton url={url} title={postMenuNode.title}>
          <MenuItem onClick={this.handleCardMenuClose}>
            <ListItemIcon>
              <i className="fa fa-twitter" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.menu }}>
              Share on Twitter
            </ListItemText>
          </MenuItem>
        </TwitterShareButton>

        <EmailShareButton url={url} title={postMenuNode.title}>
          <MenuItem onClick={this.handleCardMenuClose}>
            <ListItemIcon>
              <i className="fa fa-envelope" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.menu }}>
              Email
            </ListItemText>
          </MenuItem>
        </EmailShareButton>
      </Menu>
    );
  }

  /**
   * Displays a list of posts. If 'columns' is specified in props, posts will be rendered with
   * that many columns (desktop only). Else, posts will be displayed one by one.
   */
  render() {
    const { columns } = this.props;
    const postList = getPostList(this.props.postEdges);

    if (columns) {
      return this.handlePostGroups();
    }

    return (
      <div className="post-listing__container">
        {postList.map((post, i) => this.handlePostContent(post, i))}
        {this.handlePostMenu()}
      </div>
    );
  }
}

export default withStyles(styles)(PostListing);
