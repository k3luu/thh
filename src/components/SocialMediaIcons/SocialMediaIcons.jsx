import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutubeSquare,
  faFacebookSquare,
  faInstagram,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcons.css';

class SocialMediaIcons extends React.Component {
  render() {
    const { urls, color } = this.props;
    if (urls && urls.length > 0) {
      return (
        <div className="social-media-icons">
          <a
            href={urls[0]}
            id="social-youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutubeSquare} />
          </a>
          <a
            href={urls[1]}
            id="social-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            href={urls[2]}
            id="social-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href={urls[3]}
            id="social-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
      );
    }
    return null;
  }
}

export default SocialMediaIcons;
