import React from "react";
import { Box, Image } from "gestalt";
import "./BannerTitle.css";

class BannerTitle extends React.Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div className="banner__container">
        <Image
          alt={title}
          naturalHeight={1}
          naturalWidth={1}
          fit="cover"
          src="https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/Mt+Baden-Powell+Topo+Map.jpg"
        >
          <div className="banner__content">
            <div className="banner-title">{title}</div>
            {desc && <div className="banner-description">{desc}</div>}
          </div>
        </Image>
      </div>
    );
  }
}

export default BannerTitle;
