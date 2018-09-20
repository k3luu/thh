import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutubeSquare,
  faFacebookSquare,
  faInstagram,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "react-social-icons";
import "./SocialMediaIcons.css";

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
            {/* <i className="fa fa-youtube-play"  /> */}
          </a>
          <a
            href={urls[1]}
            id="social-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
            {/* <i className="fa fa-facebook-square"  /> */}
          </a>
          <a
            href={urls[2]}
            id="social-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            {/* <i className="fa fa-instagram"  /> */}
          </a>
          <a
            href={urls[3]}
            id="social-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
            {/* <i className="fa fa-twitter" /> */}
          </a>
        </div>
      );
    }
    return null;
  }
}

export default SocialMediaIcons;
