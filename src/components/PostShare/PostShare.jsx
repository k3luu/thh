import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  PinterestShareButton,
  LivejournalShareButton,
  ViberShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon
} from 'react-share';
import './PostShare.css';

const formatSiteUrl = (siteUrl, pathPrefix, path) =>
  siteUrl + (pathPrefix === '/' ? '' : pathPrefix) + path;

class PostShare extends React.Component {
  render() {
    const { postNode, postPath, config } = this.props;
    const post = postNode.frontmatter;
    const url = formatSiteUrl(config.siteUrl, config.pathPrefix, postPath);

    return (
      <section className="share">
        <h4>Share this post</h4>
        <div className="share-icons">
          <FacebookShareButton url={url} quote={post.title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={post.title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <GooglePlusShareButton url={url} title={post.title}>
            <GooglePlusIcon size={32} round />
          </GooglePlusShareButton>
          <LinkedinShareButton url={url} title={post.title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <RedditShareButton url={url} title={post.title}>
            <RedditIcon size={32} round />
          </RedditShareButton>
          <TumblrShareButton url={url} title={post.title}>
            <TumblrIcon size={32} round />
          </TumblrShareButton>
          <PinterestShareButton url={url} title={post.title}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>
          <EmailShareButton url={url} title={post.title}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </section>
    );
  }
}

export default PostShare;
