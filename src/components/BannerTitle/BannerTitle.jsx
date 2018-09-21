import React from 'react';
import './BannerTitle.css';

class BannerTitle extends React.Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div
        className="banner__container"
        style={{
          backgroundImage: `url("https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/Mt+Baden-Powell+Topo+Map.jpg")`
        }}
      >
        <div className="banner__content">
          <div className="banner-title">{title}</div>
          {desc && <div className="banner-description">{desc}</div>}
        </div>
      </div>
    );
  }
}

export default BannerTitle;
