import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './SocialMediaIcons.css';

class SocialMediaIcons extends React.Component {
  render() {
    const { urls, color } = this.props;
    if (urls && urls.length > 0) {
      return (
        <div className="social-media-icons">
          {/*{urls.map(url => (*/}
          {/*<SocialIcon*/}
          {/*key={url}*/}
          {/*className="social-media-icon"*/}
          {/*url={url}*/}
          {/*color={color}*/}
          {/*style={{ height: null, width: null }}*/}
          {/*/>*/}
          {/*))}*/}
          <a href={urls[0]} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube" />
          </a>
          <a href={urls[1]} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook" />
          </a>
          <a href={urls[2]} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" />
          </a>
          <a href={urls[3]} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" />
          </a>
        </div>
      );
    }
    return null;
  }
}

export default SocialMediaIcons;
